"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userClientCleaner = exports.getStateFromHeader = exports.generateJWT = exports.validateEmail = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _isemail = _interopRequireDefault(require("isemail"));

var validateEmail = function validateEmail(res, email) {
  var notString = typeof email !== 'string';
  if (notString) return res.status(401).json({
    error: 'email.invalid'
  });

  var isvalid = _isemail["default"].validate(email);

  if (!isvalid) return res.status(401).json({
    error: 'email.invalid'
  });
};

exports.validateEmail = validateEmail;

var generateJWT = function generateJWT(payload) {
  var secret = Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64');
  var options = {
    expiresIn: '6h'
  };
  return _jsonwebtoken["default"].sign(payload, secret, options);
}; // export const getParameterByName = (name, url) => {
//   const parsedName = name.replace(/[\[\]]/g, '\\$&');
//   const regex = new RegExp('[?&]' + parsedName + '(=([^&#]*)|&|#|$)');
//   const results = regex.exec(url);
//   if (!results) return null;
//   if (!results[2]) return '';
//   return decodeURIComponent(results[2].replace(/\+/g, ' '));
// };


exports.generateJWT = generateJWT;

var getStateFromHeader = function getStateFromHeader(req) {
  // if (req && req.headers) return cookie.parse(req.headers.cookie).state;
  if (req && req.headers) return req.cookies.state;
};

exports.getStateFromHeader = getStateFromHeader;

var userClientCleaner = function userClientCleaner(user) {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    hasDiscordLogin: user.hasDiscordLogin
  };
};

exports.userClientCleaner = userClientCleaner;
//# sourceMappingURL=authService.js.map