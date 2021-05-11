"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.signup = exports.oauthLogin = exports.oauthSignup = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = require("@prisma/client");

var _discordOauth = _interopRequireDefault(require("discord-oauth2"));

var authService = _interopRequireWildcard(require("./authService.js"));

var _config = require("../config.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import * as emailHandler from '../handlers/emailHandler.js';
var prisma = new _client.PrismaClient();
var oauthSignup = new _discordOauth["default"]({
  clientId: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_SECRET,
  redirectUri: "".concat(_config.BASE_URL, "/signup-discord")
});
exports.oauthSignup = oauthSignup;
var oauthLogin = new _discordOauth["default"]({
  clientId: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_SECRET,
  redirectUri: "".concat(_config.BASE_URL, "/login-discord")
});
exports.oauthLogin = oauthLogin;

var signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(res, code) {
    var tokenResponse, discordUser, user, userRecord, userClientData, jwtData, jwt;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return oauthSignup.tokenRequest({
              code: code,
              scope: 'identify email',
              grantType: 'authorization_code'
            });

          case 3:
            tokenResponse = _context.sent;
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log('signup error: ', _context.t0);

          case 9:
            _context.next = 11;
            return oauthSignup.getUser(tokenResponse.access_token);

          case 11:
            discordUser = _context.sent;

            if (discordUser) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              error: 'user.notFoundDiscord'
            }));

          case 14:
            user = {
              username: discordUser.username,
              email: discordUser.email,
              hasDiscordLogin: true
            };
            _context.next = 17;
            return prisma.user.create({
              data: user
            });

          case 17:
            userRecord = _context.sent;
            userClientData = authService.userClientCleaner(userRecord); // emailHandler.sendEmailSignup(userClientData.username, userClientData.email);

            jwtData = {
              user: {
                id: userClientData.id
              }
            };
            jwt = authService.generateJWT(jwtData);
            return _context.abrupt("return", {
              jwt: jwt,
              user: userClientData
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(res, code) {
    var tokenResponse, discordUser, userRecord, userClientData, jwtData, jwt;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return oauthLogin.tokenRequest({
              code: code,
              scope: 'identify email',
              grantType: 'authorization_code'
            });

          case 2:
            tokenResponse = _context2.sent;
            _context2.next = 5;
            return oauthLogin.getUser(tokenResponse.access_token);

          case 5:
            discordUser = _context2.sent;

            if (discordUser) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              error: 'user.notFoundDiscord'
            }));

          case 8:
            _context2.next = 10;
            return prisma.user.findUnique({
              where: {
                email: discordUser.email
              }
            });

          case 10:
            userRecord = _context2.sent;

            if (userRecord) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              error: 'user.notFoundDiscord'
            }));

          case 13:
            userClientData = authService.userClientCleaner(userRecord);
            jwtData = {
              user: {
                id: userClientData.id
              }
            };
            jwt = authService.generateJWT(jwtData);
            return _context2.abrupt("return", {
              jwt: jwt,
              user: userClientData
            });

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;
//# sourceMappingURL=discordService.js.map