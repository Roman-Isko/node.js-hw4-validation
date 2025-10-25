// // schemas/contactSchemas.js
// const Joi = require('joi');

// const contactSchema = Joi.object({
//   name: Joi.string().min(3).max(20).required(),
//   email: Joi.string().email().required(),
//   phone: Joi.string().min(3).max(20).required(),
//   contactType: Joi.string().valid('Personal', 'Work', 'Other').required(),
//   isFavourite: Joi.boolean().optional(),
// });

// const updateContactSchema = Joi.object({
//   name: Joi.string().min(3).max(20),
//   email: Joi.string().email(),
//   phone: Joi.string().min(3).max(20),
//   contactType: Joi.string().valid('Personal', 'Work', 'Other'),
//   isFavourite: Joi.boolean(),
// }).min(1); // хоча б одне поле повинно бути

// module.exports = { contactSchema, updateContactSchema };

// src/schemas/СontactSchemas.js
import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(3).max(20).required(),
  contactType: Joi.string().valid('Personal', 'Work', 'Other').required(),
  isFavourite: Joi.boolean().optional(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  email: Joi.string().email(),
  phone: Joi.string().min(3).max(20),
  contactType: Joi.string().valid('Personal', 'Work', 'Other'),
  isFavourite: Joi.boolean(),
}).min(1); // мінімум одне поле
