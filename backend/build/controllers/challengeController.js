"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.getChallenge = exports.getAllChallenges = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("@prisma/client"));

// import { PrismaClient } from '@prisma/client';
var PrismaClient = _client["default"].PrismaClient;
var prisma = new PrismaClient();
/* GET */

var getAllChallenges = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var challenges;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prisma.challenge.findMany({});

          case 2:
            challenges = _context.sent;
            return _context.abrupt("return", res.json(challenges));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllChallenges(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllChallenges = getAllChallenges;

var getChallenge = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var challengePath, challenge;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            challengePath = req.params.challengePath;
            _context2.next = 3;
            return prisma.challenge.findUnique({
              where: {
                path: challengePath
              }
            });

          case 3:
            challenge = _context2.sent;
            return _context2.abrupt("return", res.json(challenge));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getChallenge(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
/* POST */


exports.getChallenge = getChallenge;

var create = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var _req$body, tite, desc, id, challengeRecord;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, tite = _req$body.tite, desc = _req$body.desc;
            id = req.user.user.id;
            _context3.next = 4;
            return prisma.challege.create({
              data: {
                tite: tite,
                desc: desc,
                author: {
                  connect: {
                    id: id
                  }
                }
              }
            });

          case 4:
            challengeRecord = _context3.sent;
            return _context3.abrupt("return", res.json(challengeRecord));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function create(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.create = create;
//# sourceMappingURL=challengeController.js.map