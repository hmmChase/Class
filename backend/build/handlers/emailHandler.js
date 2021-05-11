"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmailPasswordReset = exports.sendEmailSignup = exports.sendEmail = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _ejs = _interopRequireDefault(require("ejs"));

var _juice = _interopRequireDefault(require("juice"));

var _logHandler = _interopRequireDefault(require("./logHandler.js"));

var transport = _nodemailer["default"].createTransport({
  host: 'smtp.mailtrap.io',
  port: '2525',
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
});

var generateHTML = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(filename, options) {
    var html;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _ejs["default"].renderFile("".concat(__dirname, "/../views/email/").concat(filename, ".ejs"), options);

          case 2:
            html = _context.sent;
            return _context.abrupt("return", (0, _juice["default"])(html));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function generateHTML(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // // using Twilio SendGrid's v3 Node.js Library
// // https://github.com/sendgrid/sendgrid-nodejs
// // javascript;
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'test@example.com', // Change to your recipient
//   from: 'test@example.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>'
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent');
//   })
//   .catch(error => {
//     console.error(error);
//   });


var sendEmail = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(options) {
    var emailHtml, mailOptions;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return generateHTML(options.filename, options);

          case 2:
            emailHtml = _context2.sent;
            mailOptions = {
              from: 'Challenge Board <challengeboard@email.com>',
              to: options.user.email,
              subject: options.subject,
              html: emailHtml
            };

            _logHandler["default"].info("sending email, subject: ".concat(options.subject));

            return _context2.abrupt("return", transport.sendMail(mailOptions));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function sendEmail(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.sendEmail = sendEmail;

var sendEmailSignup = function sendEmailSignup(username, email) {
  var options = {
    subject: 'Welcome to the Challange Board!',
    filename: 'signupEmail',
    user: {
      username: username,
      email: email
    }
  };
  sendEmail(options);
};

exports.sendEmailSignup = sendEmailSignup;

var sendEmailPasswordReset = function sendEmailPasswordReset(email, resetPasswordUrl) {
  sendEmail({
    subject: 'Password Reset for the Challenge Board',
    filename: 'resetPassEmail',
    user: {
      email: email
    },
    resetPasswordUrl: resetPasswordUrl
  });
};

exports.sendEmailPasswordReset = sendEmailPasswordReset;
//# sourceMappingURL=emailHandler.js.map