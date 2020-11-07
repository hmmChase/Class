import logger from './logger';

export class CustomError extends Error {
  constructor(error, name, status) {
    // Pass remaining arguments (including vender specific ones) to parent constructor
    super(error);

    // Maintains proper stack trace for where our error was thrown (node v8)
    if (Error.captureStackTrace) Error.captureStackTrace(this, CustomError);

    this.name = name;
    this.status = status;
  }
}

export const asyncErrorWrapper = fn => (req, res, next) =>
  fn(req, res, next).catch(next);

export const developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || '';

  const errorDetails = {
    status: err.status,
    message: err.message,
    stack: err.stack
  };

  logger.error(err);

  res.status(err.status || 500).json(errorDetails);
};

export const productionErrors = (err, req, res, next) => {
  logger.error(err);

  // res.status(err.status || 500).json({ message: err.message, error: {} });

  res.status(err.status || 500).json({ error: err.message });
};

export const notFound = (req, res, next) => {
  const err = Error('server.notFound');

  err.status = 404;

  logger.error(err);

  next(err);
};
