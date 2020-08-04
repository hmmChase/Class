const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const questionsRouter = require('./routes/questions');
const repliesRouter = require('./routes/replies');
const usersRouter = require('./routes/users');
const discordRouter = require('./routes/discord');

const errorHandlers = require('./handlers/errorHandlers');

const app = express();

app.set('view engine', 'ejs');

// const whitelist = [];
// if (app.get('env') === 'development') whitelist.push('http://localhost:4000');
// else whitelist.push('https://challenge-board.vercel.app/');

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) callback(null, true);
//     else callback(Error('Not allowed by CORS'));
//   },

//   credentials: true
// };

const corsOptions = {
  origin:
    process.env.NODE_ENV === 'production'
      ? 'https://challenge-board.vercel.app'
      : 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api', indexRouter);

const v1 = express.Router();
app.use('/api/v1', v1);

v1.use('/', indexRouter);
v1.use('/questions', questionsRouter);
v1.use('/replies', repliesRouter);
v1.use('/users', usersRouter);
v1.use('/discord', discordRouter);

app.use(errorHandlers.notFound);

if (app.get('env') === 'development') app.use(errorHandlers.developmentErrors);
else app.use(errorHandlers.productionErrors);

module.exports = app;
