"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginDiscord = exports.signupDiscord = exports.getLoginUrl = exports.getSignupUrl = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _crypto = _interopRequireDefault(require("crypto"));

var authService = _interopRequireWildcard(require("../services/authService.js"));

var discordService = _interopRequireWildcard(require("../services/discordService.js"));

var _config = require("../config.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getSignupUrl = function getSignupUrl(req, res) {
  var scope = ['identify', 'email'];

  var state = _crypto["default"].randomBytes(16).toString('hex');

  var url = discordService.oauthSignup.generateAuthUrl({
    scope: scope,
    state: state
  });
  res.cookie('state', state, _config.COOKIE_CONFIG);
  return res.json(url);
};

exports.getSignupUrl = getSignupUrl;

var getLoginUrl = function getLoginUrl(req, res) {
  var scope = ['identify', 'email'];

  var state = _crypto["default"].randomBytes(16).toString('hex');

  var url = discordService.oauthLogin.generateAuthUrl({
    scope: scope,
    state: state
  });
  res.cookie('state', state, _config.COOKIE_CONFIG);
  return res.json(url);
};

exports.getLoginUrl = getLoginUrl;

var signupDiscord = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, code, state, previousState, _yield$discordService, jwt, user;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, code = _req$body.code, state = _req$body.state;
            previousState = authService.getStateFromHeader(req);

            if (!(state !== previousState)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              error: 'login.discordError'
            }));

          case 4:
            _context.next = 6;
            return discordService.signup(res, code);

          case 6:
            _yield$discordService = _context.sent;
            jwt = _yield$discordService.jwt;
            user = _yield$discordService.user;
            res.cookie('jwt', jwt, _config.COOKIE_CONFIG);
            return _context.abrupt("return", res.json(user));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signupDiscord(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signupDiscord = signupDiscord;

var loginDiscord = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, code, state, previousState, _yield$discordService2, user, jwt;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, code = _req$body2.code, state = _req$body2.state;
            previousState = authService.getStateFromHeader(req);

            if (!(state !== previousState)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              error: 'login.discordError'
            }));

          case 4:
            _context2.next = 6;
            return discordService.login(res, code);

          case 6:
            _yield$discordService2 = _context2.sent;
            user = _yield$discordService2.user;
            jwt = _yield$discordService2.jwt;
            res.cookie('jwt', jwt, _config.COOKIE_CONFIG);
            return _context2.abrupt("return", res.json(user));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function loginDiscord(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loginDiscord = loginDiscord;
//# sourceMappingURL=discordController.js.map