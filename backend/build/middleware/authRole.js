"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = require("@prisma/client");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var prisma = new _client.PrismaClient();

var _default = function _default(requiredRoles) {
  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var user, userRecord, role;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = _jsonwebtoken["default"].verify(req.cookies.jwt, Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64'));
              _context.next = 3;
              return prisma.user.findUnique({
                where: {
                  id: user.user.id
                }
              });

            case 3:
              userRecord = _context.sent;
              role = userRecord.role;

              if (userRecord) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", status(404).json({
                error: 'user.notFound'
              }));

            case 9:
              if (!(!!requiredRoles && !isCorrectRole(requiredRoles, role))) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return", status(403).json({
                error: 'user.unauthorized'
              }));

            case 13:
              return _context.abrupt("return", next());

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports["default"] = _default;

var isCorrectRole = function isCorrectRole(requiredRoles, userRole) {
  if (typeof requiredRoles === 'string') return userRole === requiredRoles;else return requiredRoles.includes(userRole);
};
//# sourceMappingURL=authRole.js.map