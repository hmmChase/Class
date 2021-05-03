"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.getChallengeProjects = exports.getAllProjects = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = require("@prisma/client");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var prisma = new _client.PrismaClient();
/* GET */

var getAllProjects = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var projectRecords;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prisma.project.findMany({
              orderBy: {
                id: 'desc'
              },
              include: {
                author: true
              }
            });

          case 2:
            projectRecords = _context.sent;
            return _context.abrupt("return", res.json(projectRecords));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllProjects(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllProjects = getAllProjects;

var getChallengeProjects = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var challengePath, projects;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            challengePath = req.params.challengePath;
            _context2.next = 3;
            return prisma.project.findMany({
              where: {
                challenge: {
                  path: challengePath
                },
                deletedAt: null
              },
              include: {
                author: true
              },
              orderBy: {
                id: 'desc'
              }
            });

          case 3:
            projects = _context2.sent;
            return _context2.abrupt("return", res.json(projects));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getChallengeProjects(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
/* POST */


exports.getChallengeProjects = getChallengeProjects;

var create = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var _req$body, githubLink, additionalLink, comments, user, projectRecord;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, githubLink = _req$body.githubLink, additionalLink = _req$body.additionalLink, comments = _req$body.comments;
            user = _jsonwebtoken["default"].verify(req.cookies.jwt, Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64'));
            _context3.next = 4;
            return prisma.project.create({
              data: {
                githubLink: githubLink,
                additionalLink: additionalLink,
                comments: comments,
                author: {
                  connect: {
                    id: user.user.id
                  }
                }
              }
            });

          case 4:
            projectRecord = _context3.sent;
            return _context3.abrupt("return", res.json(projectRecord));

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
//# sourceMappingURL=projectController.js.map