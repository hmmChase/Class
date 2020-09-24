export const developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || '';

  const errorDetails = {
    message: err.message,
    status: err.status,
    stack: err.stack
  };

  res.status(err.status || 500);

  res.json(errorDetails);
};

export const productionErrors = (err, req, res, next) => {
  res.status(err.status || 500);

  res.json({ message: err.message, error: {} });
};

export const notFound = (req, res, next) => {
  const err = Error('Not Found');

  err.status = 404;

  next(err);
};

export const asyncErrorWrapper = fn => (req, res, next) =>
  fn(req, res, next).catch(next);
