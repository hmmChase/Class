"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _compression = _interopRequireDefault(require("compression"));

var _helmet = _interopRequireDefault(require("helmet"));

require("dotenv/config");

var _index = _interopRequireDefault(require("./routes/index"));

var _user = _interopRequireDefault(require("./routes/user"));

var _discord = _interopRequireDefault(require("./routes/discord"));

var _challenge = _interopRequireDefault(require("./routes/challenge"));

var _project = _interopRequireDefault(require("./routes/project"));

var _question = _interopRequireDefault(require("./routes/question"));

var _comment = _interopRequireDefault(require("./routes/comment"));

var _errorHandler = require("./handlers/errorHandler");

var _logHandler = _interopRequireDefault(require("./handlers/logHandler"));

var _config2 = require("./config");

var app = (0, _express["default"])();
app.set('view engine', 'ejs');
var whitelist = ['http://localhost:3000', 'http://localhost:4000', 'https://challenge-board.vercel.app'];
var corsOptions = {
  origin: function origin(_origin, callback) {
    if (whitelist.indexOf(_origin) !== -1) callback(null, true);else callback(new Error('Not allowed by CORS'));
  },
  credentials: true
};
app.use((0, _cors["default"])(corsOptions));
var morganLogStyle = app.get('env') === 'development' ? 'dev' : 'combined';
_logHandler["default"].stream = {
  write: function write(message) {
    return _logHandler["default"].info(message);
  }
};
app.use((0, _morgan["default"])(morganLogStyle, {
  stream: _logHandler["default"].stream
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use((0, _cookieParser["default"])());
app.use((0, _compression["default"])());
app.use((0, _helmet["default"])());
app.use('/', _index["default"]);
app.use('/api', _index["default"]);

var v1 = _express["default"].Router();

app.use('/api/v1', v1);
v1.use('/', _index["default"]);
v1.use('/user', _user["default"]);
v1.use('/discord', _discord["default"]);
v1.use('/challenge', _challenge["default"]);
v1.use('/project', _project["default"]);
v1.use('/question', _question["default"]);
v1.use('/comment', _comment["default"]);
app.get('/error', (0, _errorHandler.handleErrors)(function () {
  throw new _errorHandler.CustomError('This is a custom mock error.', 'mockError', 401);
}));
app.use(_errorHandler.notFound);
if (app.get('env') === 'development') app.use(_errorHandler.developmentErrors);else app.use(_errorHandler.productionErrors); // app.use(function (err, req, res, next) {
//   logger.error(
//     `${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`
//   );
//   next(err);
// });
// // Default Error Handler
// app.use((err, req, res, next) => {
//   winstom.error('Internal Server Error');
//   res.status(500).send('500. Internal Server Error');
//   next();
// });
// export default app;

app.listen({
  port: _config2.port || 4000
}, function (err) {
  if (err) throw err;
  console.log("Server ready at http://localhost:".concat(_config2.port, "/api/v1/"));
});
//# sourceMappingURL=index.js.map