"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

// 'npm run seed' to seed
var _require = require('@prisma/client'),
    PrismaClient = _require.PrismaClient; // const argon2 = require('argon2');


var bcryptjs = require('bcryptjs');

var prisma = new PrismaClient();

var main = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var teacher, student1, student2, challenge1, challenge2, project1, project2, i, twoOrThree, oneOrTwo, commentAnswer, _i, oneThroughFive, _twoOrThree;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = prisma.user;
            _context.next = 3;
            return bcryptjs.hash('teacher', 10);

          case 3:
            _context.t1 = _context.sent;
            _context.t2 = {
              email: 'teacher@email.com',
              username: 'Teacher',
              password: _context.t1,
              role: 'TEACHER',
              avatarUrl: 'http://picsum.photos/40'
            };
            _context.t3 = {
              data: _context.t2
            };
            _context.next = 8;
            return _context.t0.create.call(_context.t0, _context.t3);

          case 8:
            teacher = _context.sent;
            _context.t4 = prisma.user;
            _context.next = 12;
            return bcryptjs.hash('student1', 10);

          case 12:
            _context.t5 = _context.sent;
            _context.t6 = {
              email: 'student1@email.com',
              username: 'Student 1',
              password: _context.t5,
              role: 'STUDENT',
              avatarUrl: 'http://picsum.photos/40'
            };
            _context.t7 = {
              data: _context.t6
            };
            _context.next = 17;
            return _context.t4.create.call(_context.t4, _context.t7);

          case 17:
            student1 = _context.sent;
            _context.t8 = prisma.user;
            _context.next = 21;
            return bcrypt.hash('student2', 10);

          case 21:
            _context.t9 = _context.sent;
            _context.t10 = {
              email: 'student2@email.com',
              username: 'Student 2',
              password: _context.t9,
              avatarUrl: 'http://picsum.photos/40',
              role: 'STUDENT',
              hasDiscordLogin: true
            };
            _context.t11 = {
              data: _context.t10
            };
            _context.next = 26;
            return _context.t8.create.call(_context.t8, _context.t11);

          case 26:
            student2 = _context.sent;
            _context.next = 29;
            return prisma.challenge.create({
              data: {
                path: 'challenge1',
                title: 'Turn any Design into HTML',
                desc: 'First challenge, turning any design into HTML, and CSS. First challenge, turning any design into HTML, and CSS. First challenge, turning any design into HTML, and CSS.',
                videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
                author: {
                  connect: {
                    id: 1
                  }
                }
              }
            });

          case 29:
            challenge1 = _context.sent;
            _context.next = 32;
            return prisma.challenge.create({
              data: {
                path: 'challenge2',
                title: 'Second challenge',
                desc: 'Quam dolor esse ut. Vel rerum rem eius in deserunt numquam. Ratione repudiandae sint cupiditate. Voluptatem quasi et. Natus libero enim consequatur et aut tempora.',
                videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
                author: {
                  connect: {
                    id: 1
                  }
                }
              }
            });

          case 32:
            challenge2 = _context.sent;
            _context.next = 35;
            return prisma.project.create({
              data: {
                githubLink: 'www.github.com',
                additionalLink: 'www.google.com',
                comments: 'Here is my project',
                challenge: {
                  connect: {
                    id: 1
                  }
                },
                author: {
                  connect: {
                    id: 2
                  }
                }
              }
            });

          case 35:
            project1 = _context.sent;
            _context.next = 38;
            return prisma.project.create({
              data: {
                githubLink: 'www.github.com',
                additionalLink: 'www.google.com',
                comments: 'My project is here',
                challenge: {
                  connect: {
                    id: 2
                  }
                },
                author: {
                  connect: {
                    id: 3
                  }
                }
              }
            });

          case 38:
            project2 = _context.sent;
            i = 1;

          case 40:
            if (!(i <= 10)) {
              _context.next = 48;
              break;
            }

            twoOrThree = Math.floor(Math.random() * 2) + 2;
            oneOrTwo = Math.floor(Math.random() * 2) + 1;
            _context.next = 45;
            return prisma.question.create({
              data: {
                title: 'seeded question ' + i,
                body: 'Voluptatem sunt voluptate. Reiciendis vel rerum. Voluptas voluptas numquam. Odit pariatur qui. Quod consequatur inventore. At non consequatur dolore nulla consectetur eveniet illo commodi. Sint commodi possimus mollitia magnam molestiae omnis odio eaque autem. Et nihil fugit aut ab et praesentium minus. Omnis nihil odit commodi et quod voluptates sint a. Nostrum minima odio ut harum. Sunt quia et nisi praesentium et aut est quia.',
                author: {
                  connect: {
                    id: twoOrThree
                  }
                },
                challenge: {
                  connect: {
                    id: oneOrTwo
                  }
                }
              }
            });

          case 45:
            i++;
            _context.next = 40;
            break;

          case 48:
            _context.next = 50;
            return prisma.comment.create({
              data: {
                body: "seeded answer",
                isAnswer: true,
                question: {
                  connect: {
                    id: 1
                  }
                },
                author: {
                  connect: {
                    id: 2
                  }
                }
              }
            });

          case 50:
            commentAnswer = _context.sent;
            _i = 1;

          case 52:
            if (!(_i <= 10)) {
              _context.next = 60;
              break;
            }

            oneThroughFive = Math.floor(Math.random() * 5) + 1;
            _twoOrThree = Math.floor(Math.random() * 2) + 2;
            _context.next = 57;
            return prisma.comment.create({
              data: {
                body: "seeded comment ".concat(_i),
                isAnswer: false,
                question: {
                  connect: {
                    id: oneThroughFive
                  }
                },
                author: {
                  connect: {
                    id: _twoOrThree
                  }
                }
              }
            });

          case 57:
            _i++;
            _context.next = 52;
            break;

          case 60:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

main()["catch"](function (e) {
  throw e;
})["finally"]( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('Seeding complete.');
          _context2.next = 3;
          return prisma.$disconnect();

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
//# sourceMappingURL=seed.js.map