// import express from 'express';
// import {
//   getAllContacts,
//   getContactById,
//   createContact,
//   updateContact,
//   deleteContact,
// } from '../controllers/Contacts.js';
// import { ctrlWrapper } from '../utils/ctrlWrapper.js';

// const router = express.Router();

// // GET /contacts
// router.get('/', ctrlWrapper(getAllContacts));

// // GET /contacts/:contactId
// router.get('/:contactId', ctrlWrapper(getContactById));

// // POST /contacts
// router.post('/', ctrlWrapper(createContact));

// // PATCH /contacts/:contactId
// router.patch('/:contactId', ctrlWrapper(updateContact));

// // DELETE /contacts/:contactId
// router.delete('/:contactId', ctrlWrapper(deleteContact));

// export default router;

// src/routes/Сontacts.js
import express from 'express';
import * as contactsController from '../controllers/Contacts.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../schemas/СontactSchemas.js';

const router = express.Router();

router.get('/', contactsController.getAllContacts);
router.get('/:contactId', isValidId, contactsController.getContactById);
router.post(
  '/',
  validateBody(createContactSchema),
  contactsController.createContact,
);
router.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  contactsController.updateContact,
);
router.delete('/:contactId', isValidId, contactsController.deleteContact);

export default router;
