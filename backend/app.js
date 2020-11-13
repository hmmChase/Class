import express from 'express';
import morgan from 'morgan';
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

import {
  handleErrors,
  notFound,
  developmentErrors,
  productionErrors,
  CustomError
} from './handlers/errorHandler';
import logger from './handlers/logHandler';
import { port } from './config';


const app = express();

app.set('view engine', 'ejs');

const whitelist = [
  'http://localhost:3000',
  'http://localhost:4000',
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

const morganLogStyle = app.get('env') === 'development' ? 'dev' : 'combined';

logger.stream = { write: message => logger.info(message) };

app.use(morgan(morganLogStyle, { stream: logger.stream }));

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

// export default app;

app.listen({ port: port || 4000 }, err => {
  if (err) throw err;

  console.log(`Server ready at http://localhost:${port}/api/v1/`);
});
