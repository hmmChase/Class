"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.port = exports.BASE_URL = exports.COOKIE_CONFIG = void 0;
var COOKIE_CONFIG = {
  httpOnly: true,
  // path: '/',
  secure: process.env.NODE_ENV === 'production',
  maxAge: 1000 * 60 * 20,
  // 20m
  sameSite: 'strict'
};
exports.COOKIE_CONFIG = COOKIE_CONFIG;
var BASE_URL = process.env.NODE_ENV === 'production' ? 'https://challenge-board.vercel.app' : 'http://localhost:3000';
exports.BASE_URL = BASE_URL;
var port = 4000;
exports.port = port;
//# sourceMappingURL=config.js.map