import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import helmet from 'helmet';
import 'dotenv/config';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import discordRouter from './routes/discord';
import challengesRouter from './routes/challenges';
import projectsRouter from './routes/projects';
import questionsRouter from './routes/questions';
import commentsRouter from './routes/comments';

import * as errorHandlers from './handlers/errorHandlers';
import { BASE_URL, port } from './config';

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

const corsOptions = { origin: BASE_URL, credentials: true };

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use(helmet());

app.use('/', indexRouter);
app.use('/api', indexRouter);

const v1 = express.Router();
app.use('/api/v1', v1);

v1.use('/', indexRouter);
v1.use('/users', usersRouter);
v1.use('/discord', discordRouter);
v1.use('/challenges', challengesRouter);
v1.use('/projects', projectsRouter);
v1.use('/questions', questionsRouter);
v1.use('/comments', commentsRouter);

app.use(errorHandlers.notFound);

if (app.get('env') === 'development') app.use(errorHandlers.developmentErrors);
else app.use(errorHandlers.productionErrors);

export default app;

// module.exports = app;

// app.listen({ port: port || 4000 }, err => {
//   if (err) throw err;

//   console.log(`Server ready at http://localhost:${port}/api/v1/`);
// });
