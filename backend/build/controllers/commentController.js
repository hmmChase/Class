"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.answerDemote = exports.answerPromote = exports.deleteSoft = exports.create = exports.getQuestionComments = exports.getComment = exports.getAllComments = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("@prisma/client"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

// import { PrismaClient } from '@prisma/client';
var PrismaClient = _client["default"].PrismaClient;
var prisma = new PrismaClient();
/* GET */

var getAllComments = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var comments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prisma.comment.findMany({});

          case 2:
            comments = _context.sent;
            return _context.abrupt("return", res.json(comments));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllComments(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllComments = getAllComments;

var getComment = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var commentId, comment;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commentId = req.params.commentId;
            _context2.next = 3;
            return prisma.comment.findUnique({
              where: {
                id: commentId
              }
            });

          case 3:
            comment = _context2.sent;
            return _context2.abrupt("return", res.json(comment));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getComment(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getComment = getComment;

var getQuestionComments = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var questionId, comments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            questionId = req.params.questionId;
            console.log('questionId:', questionId);
            _context3.next = 4;
            return prisma.comment.findMany({
              where: {
                question: {
                  id: parseInt(questionId)
                },
                deletedAt: null
              },
              include: {
                author: true
              },
              orderBy: {
                createdAt: 'asc'
              }
            });

          case 4:
            comments = _context3.sent;
            return _context3.abrupt("return", res.json(comments));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getQuestionComments(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
/* POST */


exports.getQuestionComments = getQuestionComments;

var create = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var _req$body, questionId, body, user, commentRecord;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, questionId = _req$body.questionId, body = _req$body.body;
            user = _jsonwebtoken["default"].verify(req.cookies.jwt, Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64'));
            _context4.next = 4;
            return prisma.comment.create({
              data: {
                author: {
                  connect: {
                    id: user.user.id
                  }
                },
                question: {
                  connect: {
                    id: parseInt(questionId)
                  }
                },
                body: body
              },
              include: {
                author: true
              }
            });

          case 4:
            commentRecord = _context4.sent;
            return _context4.abrupt("return", res.json(commentRecord));

          case 6:
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
    var commentId, commentRecord;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            commentId = req.body.commentId;
            _context5.next = 3;
            return prisma.comment.update({
              where: {
                id: commentId
              },
              data: {
                deletedAt: new Date().toISOString()
              }
            });

          case 3:
            commentRecord = _context5.sent;
            return _context5.abrupt("return", res.json(commentRecord));

          case 5:
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

exports.deleteSoft = deleteSoft;

var answerPromote = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var commentId, commentRecord, updatedComments;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            commentId = req.body.commentId;
            _context6.next = 3;
            return prisma.comment.update({
              where: {
                id: commentId
              },
              data: {
                isAnswer: true
              }
            });

          case 3:
            commentRecord = _context6.sent;
            _context6.next = 6;
            return prisma.comment.findMany({
              where: {
                question: {
                  id: parseInt(commentRecord.question_id)
                },
                deletedAt: null
              },
              include: {
                author: true
              }
            });

          case 6:
            updatedComments = _context6.sent;
            return _context6.abrupt("return", res.json(updatedComments));

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function answerPromote(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.answerPromote = answerPromote;

var answerDemote = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var commentId, commentRecord, updatedComments;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            commentId = req.body.commentId;
            _context7.next = 3;
            return prisma.comment.update({
              where: {
                id: commentId
              },
              data: {
                isAnswer: false
              }
            });

          case 3:
            commentRecord = _context7.sent;
            _context7.next = 6;
            return prisma.comment.findMany({
              where: {
                question: {
                  id: parseInt(commentRecord.question_id)
                },
                deletedAt: null
              },
              include: {
                author: true
              }
            });

          case 6:
            updatedComments = _context7.sent;
            return _context7.abrupt("return", res.json(updatedComments));

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function answerDemote(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();
/* PATCH */


exports.answerDemote = answerDemote;

var update = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var _req$body2, id, body, commentRecord, updatedComments;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body2 = req.body, id = _req$body2.id, body = _req$body2.body;
            _context8.next = 3;
            return prisma.comment.update({
              where: {
                id: id
              },
              data: {
                body: body
              }
            });

          case 3:
            commentRecord = _context8.sent;
            _context8.next = 6;
            return prisma.comment.findMany({
              where: {
                question: {
                  id: parseInt(commentRecord.question_id)
                },
                deletedAt: null
              },
              include: {
                author: true
              },
              orderBy: {
                createdAt: 'asc'
              }
            });

          case 6:
            updatedComments = _context8.sent;
            return _context8.abrupt("return", res.json(updatedComments));

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function update(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

exports.update = update;
//# sourceMappingURL=commentController.js.map