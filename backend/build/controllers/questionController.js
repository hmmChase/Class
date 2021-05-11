"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.deleteSoft = exports.create = exports.getChallengeQuestions = exports.getQuestion = exports.getAllQuestions = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("@prisma/client"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

// import { PrismaClient } from '@prisma/client';
var PrismaClient = _client["default"].PrismaClient;
var prisma = new PrismaClient();
/* GET */

var getAllQuestions = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var questionRecords;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prisma.question.findMany({});

          case 2:
            questionRecords = _context.sent;
            return _context.abrupt("return", res.json(questionRecords));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllQuestions(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllQuestions = getAllQuestions;

var getQuestion = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var questionId, questionRecord;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            questionId = req.params.questionId;
            _context2.next = 3;
            return prisma.question.findUnique({
              where: {
                id: parseInt(questionId)
              },
              include: {
                author: true
              }
            });

          case 3:
            questionRecord = _context2.sent;
            return _context2.abrupt("return", res.json(questionRecord));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getQuestion(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getQuestion = getQuestion;

var getChallengeQuestions = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var challengePath, questions;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            challengePath = req.params.challengePath;
            _context3.next = 3;
            return prisma.question.findMany({
              where: {
                challenge: {
                  path: challengePath
                },
                deletedAt: null
              },
              include: {
                author: true,
                comments: {
                  where: {
                    deletedAt: null
                  }
                }
              },
              orderBy: {
                id: 'desc'
              }
            });

          case 3:
            questions = _context3.sent;
            return _context3.abrupt("return", res.json(questions));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getChallengeQuestions(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
/* POST */


exports.getChallengeQuestions = getChallengeQuestions;

var create = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var _req$body, title, body, challengePath, user, questionRecord;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, body = _req$body.body;
            challengePath = req.params.challengePath;
            user = _jsonwebtoken["default"].verify(req.cookies.jwt, Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64'));
            _context4.next = 5;
            return prisma.question.create({
              data: {
                title: title,
                body: body,
                author: {
                  connect: {
                    id: user.user.id
                  }
                },
                challenge: {
                  connect: {
                    path: challengePath
                  }
                }
              },
              include: {
                author: true,
                comments: {
                  where: {
                    deletedAt: null
                  }
                }
              }
            });

          case 5:
            questionRecord = _context4.sent;
            console.log('questionRecord:', questionRecord);
            return _context4.abrupt("return", res.json(questionRecord));

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function create(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.create = create;

var deleteSoft = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var _req$body2, challengePath, questionId, updatedQuestions;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, challengePath = _req$body2.challengePath, questionId = _req$body2.questionId;
            console.log('questionId:', questionId);
            _context5.next = 4;
            return prisma.question.update({
              where: {
                id: parseInt(questionId)
              },
              data: {
                deletedAt: new Date().toISOString()
              }
            });

          case 4:
            _context5.next = 6;
            return prisma.question.findMany({
              where: {
                challenge: {
                  path: challengePath
                },
                deletedAt: null
              },
              include: {
                author: true,
                comments: {
                  where: {
                    deletedAt: null
                  }
                }
              },
              orderBy: {
                id: 'desc'
              }
            });

          case 6:
            updatedQuestions = _context5.sent;
            return _context5.abrupt("return", res.json(updatedQuestions));

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteSoft(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
/* PATCH */


exports.deleteSoft = deleteSoft;

var update = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var _req$body3, challengePath, title, body, id, updatedQuestions;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body3 = req.body, challengePath = _req$body3.challengePath, title = _req$body3.title, body = _req$body3.body, id = _req$body3.id;
            _context6.next = 3;
            return prisma.question.update({
              where: {
                id: id
              },
              data: {
                title: title,
                body: body
              }
            });

          case 3:
            _context6.next = 5;
            return prisma.question.findMany({
              where: {
                challenge: {
                  path: challengePath
                },
                deletedAt: null
              },
              include: {
                author: true,
                comments: {
                  where: {
                    deletedAt: null
                  }
                }
              },
              orderBy: {
                id: 'desc'
              }
            });

          case 5:
            updatedQuestions = _context6.sent;
            return _context6.abrupt("return", res.json(updatedQuestions));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function update(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.update = update;
//# sourceMappingURL=questionController.js.map