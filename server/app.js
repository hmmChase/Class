var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var threadsRouter = require('./routes/threads');
var errorHandlers = require('./handlers/errorHandlers');

var app = express();

const whitelist = [];
if (app.get('env') === 'development') whitelist.push('http://localhost:3000');
else whitelist.push('challenge-board.vercel.app/');

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) callback(null, true);
    else callback(Error('Not allowed by CORS'));
  }
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/threads', threadsRouter);

app.use(errorHandlers.notFound);

// error handlers:
if (app.get('env') === 'development') {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;
