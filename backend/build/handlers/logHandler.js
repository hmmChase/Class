"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _winston = _interopRequireDefault(require("winston"));

require("winston-daily-rotate-file");

var logger = new _winston["default"].createLogger({
  level: 'info',
  format: _winston["default"].format.combine(_winston["default"].format.timestamp({
    format: 'YYY-MM-DD HH:mm:ss'
  }), _winston["default"].format.errors({
    stack: true
  }), _winston["default"].format.json()),
  transports: [new _winston["default"].transports.Console({
    colorize: true,
    json: false,
    handleExceptions: true,
    format: _winston["default"].format.combine(_winston["default"].format.colorize(), _winston["default"].format.simple())
  }) // new winston.transports.File({
  //   level: 'info',
  //   filename: './logs/logs.log',
  //   handleExceptions: true,
  //   json: true,
  //   maxsize: 5242880, // 5MB
  //   maxFiles: 5,
  //   colorize: false
  // })
  ],
  exitOnError: false
}); // winston.addColors({ error: 'red', info: 'cyan', warn: 'yellow' });

var _default = logger; //   transports: [
//     new winston.transports.Console({
//       colorize: true,
//       json: false,
//       handleExceptions: true,
//       format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.simple()
//       )
//     })
//     // new winston.transports.File({
//     //   level: 'info',
//     //   filename: './logs/logs.log',
//     //   handleExceptions: true,
//     //   json: true,
//     //   maxsize: 5242880, // 5MB
//     //   maxFiles: 5,
//     //   colorize: false
//     // })
//   ],
//   exitOnError: false
// });
// // const colors = { error: 'red', info: 'cyan', warn: 'yellow' };
// // winston.addColors(colors);
// logger.stream = { write: message => logger.info(message) };
// export default logger;

exports["default"] = _default;
//# sourceMappingURL=logHandler.js.map