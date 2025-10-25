import express from 'express';
import { getContactById } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/:contactId', ctrlWrapper(getContactById));

export default router;
