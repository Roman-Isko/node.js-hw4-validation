// // middlewares/validateBody.js
// const { BadRequest } = require('http-errors');

// const validateBody = (schema) => {
//   return (req, res, next) => {
//     const { error } = schema.validate(req.body);
//     if (error) {
//       return next(BadRequest(error.details[0].message));
//     }
//     next();
//   };
// };

// module.exports = validateBody;

// src/middlewares/validateBody.js
import createHttpError from 'http-errors';

export const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return next(createHttpError(400, error.details[0].message));
    }

    next();
  };
};
