const { CustomAPIError } = require('../errors/custom-error');
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(error.statusCode).json({ msg: error.message });
  }

  return res.status(500).json({ msg: error.message });
};

module.exports = errorHandlerMiddleware;
