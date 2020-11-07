import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import helmet from 'helmet';
import 'dotenv/config';

import indexRouter from './routes/index';
import userRouter from './routes/user';
import discordRouter from './routes/discord';
import challengeRouter from './routes/challenge';
import projectRouter from './routes/project';
import questionRouter from './routes/question';
import commentRouter from './routes/comment';

import * as errorHandler from './handlers/errorHandler';
import logger from './handlers/logger';
import { port } from './config';

const app = express();

app.set('view engine', 'ejs');

const whitelist = [
  'http://localhost:3000',
  'https://challenge-board.vercel.app'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) callback(null, true);
    else callback(new Error('Not allowed by CORS'));
  },
  credentials: true
};

app.use(cors(corsOptions));

const morganLogStyle = app.get('env') === 'development' ? 'dev' : 'common';
app.use(logger(morganLogStyle));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use(helmet());

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

app.use(errorHandler.notFound);

if (app.get('env') === 'development') app.use(errorHandler.developmentErrors);
else app.use(errorHandler.productionErrors);

// export default app;

app.listen({ port: port || 4000 }, err => {
  if (err) throw err;

  console.log(`Server ready at http://localhost:${port}/api/v1/`);
});
