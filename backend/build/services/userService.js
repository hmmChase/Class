"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPasswordLogin = exports.signupUserByEmail = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = require("@prisma/client");

var _argon = _interopRequireDefault(require("argon2"));

var emailHandler = _interopRequireWildcard(require("../handlers/emailHandler"));

var authService = _interopRequireWildcard(require("../services/authService"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var prisma = new _client.PrismaClient();

var signupUserByEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(res, username, email, password) {
    var emailNormalized, usernameNormalized, passwordHashed, user, createdUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            emailNormalized = email.trim().toLowerCase();
            usernameNormalized = username.trim();
            _context.next = 4;
            return _argon["default"].hash(password);

          case 4:
            passwordHashed = _context.sent;
            // authService.validateEmail(res, emailNormalized);
            user = {
              username: usernameNormalized,
              email: emailNormalized,
              password: passwordHashed
            };
            _context.next = 8;
            return prisma.user.create({
              data: user
            });

          case 8:
            createdUser = _context.sent;
            emailHandler.sendEmailSignup(usernameNormalized, emailNormalized);
            return _context.abrupt("return", createdUser);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signupUserByEmail(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.signupUserByEmail = signupUserByEmail;

var resetPasswordLogin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(res, email, password) {
    var userRecord, isCorrectPass, userJWT, newJWT, userClientData;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return prisma.user.findUnique({
              where: {
                email: email
              }
            });

          case 2:
            userRecord = _context2.sent;

            if (userRecord) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              error: 'login.invalidCredentials'
            }));

          case 5:
            _context2.next = 7;
            return _argon["default"].verify(userRecord.password, password);

          case 7:
            isCorrectPass = _context2.sent;

            if (isCorrectPass) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              error: 'login.invalidCredentials'
            }));

          case 10:
            userJWT = {
              user: {
                id: userRecord.id
              }
            };
            newJWT = authService.generateJWT(userJWT);
            userClientData = authService.userClientCleaner(userRecord);
            return _context2.abrupt("return", [newJWT, userClientData]);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function resetPasswordLogin(_x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();

exports.resetPasswordLogin = resetPasswordLogin;
//# sourceMappingURL=userService.js.map