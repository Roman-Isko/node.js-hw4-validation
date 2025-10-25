// // middlewares/isValidId.js
// const { isValidObjectId } = require('mongoose');
// const { BadRequest } = require('http-errors');

// const isValidId = (req, res, next) => {
//   const { contactId } = req.params;
//   if (!isValidObjectId(contactId)) {
//     return next(BadRequest('Invalid id'));
//   }
//   next();
// };

// module.exports = isValidId;

// src/middlewares/isValidId.js
import mongoose from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { contactId } = req.params;

  if (!mongoose.isValidObjectId(contactId)) {
    return next(createHttpError(400, 'Invalid contact ID'));
  }

  next();
};
