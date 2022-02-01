// https://expressjs.com/en/advanced/best-practice-security.html
// https://expressjs.com/en/advanced/best-practice-performance.html

const production = process.env.NODE_ENV === 'production';

// In production, env vars are defined on the host
// https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// if (!production) require('dotenv').config();
import 'dotenv/config';

import express from 'express';
import cookieParser from 'cookie-parser';
// import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
// import http from 'http';
// import createError from 'http-errors';
import morgan from 'morgan';

import { corsOptions } from './constants/cors.js';
import indexRouter from './routes/index.js';
import userRouter from './routes/user.js';
import discordRouter from './routes/discord.js';
import challengeRouter from './routes/challenge.js';
import projectRouter from './routes/project.js';
import questionRouter from './routes/question.js';
import commentRouter from './routes/comment.js';

import {
  handleErrors,
  notFound,
  developmentErrors,
  productionErrors,
  CustomError
} from './handlers/errorHandler.js';
import logger from './handlers/logHandler.js';

const app = express();

const morganLogStyle = app.get('env') === 'development' ? 'dev' : 'combined';
logger.stream = { write: message => logger.info(message) };
app.use(morgan(morganLogStyle, { stream: logger.stream }));
// app.use(logger(production ? 'combined' : 'dev'));

app.use(cors(corsOptions));
app.use(helmet({ contentSecurityPolicy: production ? undefined : false }));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api', indexRouter);

const v1 = express.Router();
app.use('/api/v1', v1);

v1.use('/', indexRouter);
v1.use('/user', userRouter);
v1.use('/discord', discordRouter);
v1.use('/challenge', challengeRouter);
v1.use('/project', projectRouter);
v1.use('/question', questionRouter);
v1.use('/comment', commentRouter);

app.get(
  '/error',
  handleErrors(() => {
    throw new CustomError('This is a custom mock error.', 'mockError', 401);
  })
);

app.use(notFound);

if (app.get('env') === 'development') app.use(developmentErrors);
else app.use(productionErrors);

// app.use(function (err, req, res, next) {
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

// // catch 404 and forward to error handler
// app.use((req, res, next) => next(createError(404)));

// // error handler
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // return the error
//   res.status(err.status || 500);
//   res.json({ message: err.message, error: err });
// });

export default app;
