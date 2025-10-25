import express from 'express';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from '../controllers/Contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

// GET /contacts
router.get('/', ctrlWrapper(getAllContacts));

// GET /contacts/:contactId
router.get('/:contactId', ctrlWrapper(getContactById));

// POST /contacts
router.post('/', ctrlWrapper(createContact));

// PATCH /contacts/:contactId
router.patch('/:contactId', ctrlWrapper(updateContact));

// DELETE /contacts/:contactId
router.delete('/:contactId', ctrlWrapper(deleteContact));

export default router;
