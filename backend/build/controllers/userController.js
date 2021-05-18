"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPassword = exports.generatePassReset = exports.logout = exports.login = exports.signup = exports.getCurrentUser = exports.getAllUsers = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = require("@prisma/client");

var _crypto = _interopRequireDefault(require("crypto"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var authService = _interopRequireWildcard(require("../services/authService.js"));

var userService = _interopRequireWildcard(require("../services/userService.js"));

var emailHandler = _interopRequireWildcard(require("../handlers/emailHandler.js"));

var _config = require("../config.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import argon2 from 'argon2';
var prisma = new _client.PrismaClient();

var getAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var users;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prisma.user.findMany();

          case 2:
            users = _context.sent;
            res.json(users);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllUsers(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllUsers = getAllUsers;

var getCurrentUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user, userRecord, userJWT, newJWT, userClient;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('req.cookies:', req.cookies);

            if (!(!req || !req.cookies || !req.cookies.jwt)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.json({}));

          case 3:
            user = _jsonwebtoken["default"].verify(req.cookies.jwt, Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64'));
            _context2.prev = 4;
            _context2.next = 7;
            return prisma.user.findUnique({
              where: {
                id: user.user.id
              }
            });

          case 7:
            userRecord = _context2.sent;

            if (userRecord) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", req.status(404).json({
              error: 'user.notFound'
            }));

          case 10:
            userJWT = {
              user: {
                id: userRecord.id
              }
            };
            newJWT = authService.generateJWT(userJWT);
            userClient = authService.userClientCleaner(userRecord);
            res.cookie('jwt', newJWT, _config.COOKIE_CONFIG);
            return _context2.abrupt("return", res.json(userClient));

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](4);
            return _context2.abrupt("return", res.json({}));

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 17]]);
  }));

  return function getCurrentUser(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCurrentUser = getCurrentUser;

var signup = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, username, email, password, createdUser, jwtData, newJWT, userClientData;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password;
            _context3.next = 3;
            return userService.signupUserByEmail(res, username, email, password);

          case 3:
            createdUser = _context3.sent;
            jwtData = {
              user: {
                id: createdUser.id
              }
            };
            newJWT = authService.generateJWT(jwtData);
            userClientData = authService.userClientCleaner(createdUser);
            res.cookie('jwt', newJWT, _config.COOKIE_CONFIG);
            return _context3.abrupt("return", res.json(userClientData));

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function signup(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.signup = signup;

var login = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, email, password, userRecord, isCorrectPass, jwtData, newJWT, userClientData;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;

            if (!(!email || !password)) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", res.status(401).json({
              error: 'login.invalidCredentials'
            }));

          case 3:
            _context4.next = 5;
            return prisma.user.findUnique({
              where: {
                email: email
              }
            });

          case 5:
            userRecord = _context4.sent;

            if (userRecord) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(401).json({
              error: 'login.invalidCredentials'
            }));

          case 8:
            _context4.next = 10;
            return _bcryptjs["default"].compare(password, userRecord.password);

          case 10:
            isCorrectPass = _context4.sent;

            if (isCorrectPass) {
              _context4.next = 13;
              break;
            }

            return _context4.abrupt("return", res.status(401).json({
              error: 'login.invalidCredentials'
            }));

          case 13:
            jwtData = {
              user: {
                id: userRecord.id
              }
            };
            newJWT = authService.generateJWT(jwtData);
            userClientData = authService.userClientCleaner(userRecord); // const cookieOptions = {
            //   httpOnly: true,
            //   path: '/',
            //   secure: process.env.NODE_ENV === 'production',
            //   maxAge: 1000 * 60 * 60 * 24 * 7,
            //   sameSite: 'strict'
            // };

            res.cookie('jwt', newJWT, _config.COOKIE_CONFIG); // res.cookie('jwt', newJWT, cookieOptions);
            // res.cookie('name', 'isophy');
            // res.cookie('name', 'value', {
            //   maxAge: 1000 * 60 * 60 * 24 * 7,
            //   httpOnly: false,
            //   path: '/',
            //   secure: false,
            //   sameSite: 'none',
            //   sameParty: false
            // });
            // res.setHeader('Set-Cookie', 'name=setHeader');
            // res.append('Set-Cookie', 'name=append');

            return _context4.abrupt("return", res.json(userClientData));

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function login(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.login = login;

var logout = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            res.clearCookie('jwt');
            res.clearCookie('state');
            return _context5.abrupt("return", res.json(true));

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function logout(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

exports.logout = logout;

var generatePassReset = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var email, userRecord, emailSentMessage, resetPassToken, expiryDate, resetPassTokenExpiry, resetPasswordUrl;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            email = req.body.email; // if can find email, begin reset flow

            _context6.next = 3;
            return prisma.user.findUnique({
              where: {
                email: email
              }
            });

          case 3:
            userRecord = _context6.sent;
            emailSentMessage = 'An email has been sent to the specified address'; // don't tell them the user doesn't exist!!

            if (userRecord) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", res.json({
              message: emailSentMessage
            }));

          case 7:
            // generate token and expiry, set it on user row
            resetPassToken = _crypto["default"].randomBytes(25).toString('hex');
            expiryDate = Date.now() + 1000 * 60 * 60; // 1 hour

            resetPassTokenExpiry = new Date(expiryDate).toISOString();
            _context6.next = 12;
            return prisma.user.update({
              where: {
                email: userRecord.email
              },
              data: {
                resetPassToken: resetPassToken,
                resetPassTokenExpiry: resetPassTokenExpiry
              }
            });

          case 12:
            // send email with reset password in a link
            resetPasswordUrl = "".concat(_config.BASE_URL, "/reset-password?resetToken=").concat(resetPassToken);
            emailHandler.sendEmailPasswordReset(email, resetPasswordUrl);
            return _context6.abrupt("return", res.json({
              message: emailSentMessage
            }));

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function generatePassReset(_x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}();

exports.generatePassReset = generatePassReset;

var resetPassword = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body3, newPassword, resetToken, userRecord, tokenInvalidMessage, isTokenExpired, hashedPassword, updatedUser, _yield$userService$re, _yield$userService$re2, jwt, user;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body3 = req.body, newPassword = _req$body3.newPassword, resetToken = _req$body3.resetToken;
            _context7.next = 3;
            return prisma.user.findUnique({
              where: {
                resetPassToken: resetToken // resetPassTokenExpiry: {
                //   // if the expiration is after right now, it's valid
                //   gt: Date.now()
                // }

              }
            });

          case 3:
            userRecord = _context7.sent;
            tokenInvalidMessage = 'Reset token invalid. Try resetting your password again.';

            if (userRecord) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", res.status(401).json({
              error: tokenInvalidMessage
            }));

          case 7:
            isTokenExpired = Date.now() > userRecord.resetPassTokenExpiry;

            if (!(!userRecord || isTokenExpired)) {
              _context7.next = 10;
              break;
            }

            return _context7.abrupt("return", res.status(401).json({
              error: tokenInvalidMessage
            }));

          case 10:
            _context7.next = 12;
            return _bcryptjs["default"].hash(newPassword);

          case 12:
            hashedPassword = _context7.sent;
            _context7.next = 15;
            return prisma.user.update({
              where: {
                id: userRecord.id
              },
              data: {
                password: hashedPassword,
                resetPassToken: null,
                resetPassTokenExpiry: null
              }
            });

          case 15:
            updatedUser = _context7.sent;
            _context7.next = 18;
            return userService.resetPasswordLogin(res, updatedUser.email, newPassword);

          case 18:
            _yield$userService$re = _context7.sent;
            _yield$userService$re2 = (0, _slicedToArray2["default"])(_yield$userService$re, 2);
            jwt = _yield$userService$re2[0];
            user = _yield$userService$re2[1];
            res.cookie('jwt', jwt, _config.COOKIE_CONFIG);
            return _context7.abrupt("return", res.json(user));

          case 24:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function resetPassword(_x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}();

exports.resetPassword = resetPassword;
//# sourceMappingURL=userController.js.map