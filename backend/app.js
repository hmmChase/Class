const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const threadsRouter = require('./routes/threads');
const errorHandlers = require('./handlers/errorHandlers');

const app = express();
// const router = express.Router();

app.set('view engine', 'ejs');

// app.use('/v1', router);

const whitelist = [];
if (app.get('env') === 'development') whitelist.push('http://localhost:3000');
else whitelist.push('https://challenge-board.vercel.app/');

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) callback(null, true);
    else callback(Error('Not allowed by CORS'));
  },

  credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/api/v1', router);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/threads', threadsRouter);

app.use(errorHandlers.notFound);

// error handlers:
if (app.get('env') === 'development') app.use(errorHandlers.developmentErrors);
else app.use(errorHandlers.productionErrors);

module.exports = app;
