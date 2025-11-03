// import Joi from 'joi';

// export const createContactSchema = Joi.object({
//   name: Joi.string().min(3).max(20).required(),
//   email: Joi.string().email().required(),
//   phoneNumber: Joi.string().min(3).max(20).required(),
//   contactType: Joi.string().valid('Personal', 'Work', 'Other').required(),
//   isFavourite: Joi.boolean().optional(),
// });

// export const updateContactSchema = Joi.object({
//   name: Joi.string().min(3).max(20),
//   email: Joi.string().email(),
//   phoneNumber: Joi.string().min(3).max(20),
//   contactType: Joi.string().valid('Personal', 'Work', 'Other'),
//   isFavourite: Joi.boolean(),
// }).min(1);

// src/schemas/ContactSchemas.js
import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().optional().allow(null),
  phoneNumber: Joi.string().min(3).max(20).required(),
  contactType: Joi.string().valid('personal', 'business', 'home').required(),
  isFavourite: Joi.boolean().optional(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  email: Joi.string().email().allow(null),
  phoneNumber: Joi.string().min(3).max(20),
  contactType: Joi.string().valid('personal', 'business', 'home'),
  isFavourite: Joi.boolean(),
}).min(1);
