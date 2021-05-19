"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CORSwhitelist = exports.BASE_URL = exports.COOKIE_CONFIG = exports.port = void 0;
var port = process.env.PORT || 4000;
exports.port = port;
var COOKIE_CONFIG = {
  maxAge: 365 * 52 * 7 * 24 * 60,
  path: '/',
  httpOnly: process.env.NODE_ENV === 'production',
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'none' // sameParty: false

}; // sameSite: 'strict'

exports.COOKIE_CONFIG = COOKIE_CONFIG;
var deployedUrl = process.env.VERCEL_URL;
var frontendUrlProd = 'https://challenge-board.vercel.app';
var frontendUrlDev = 'http://localhost:3000';
var BASE_URL = process.env.NODE_ENV === 'production' ? frontendUrlProd : frontendUrlDev;
exports.BASE_URL = BASE_URL;
var CORSwhitelist = process.env.NODE_ENV === 'production' ? [frontendUrlProd, deployedUrl] : frontendUrlDev;
exports.CORSwhitelist = CORSwhitelist;
//# sourceMappingURL=config.js.map