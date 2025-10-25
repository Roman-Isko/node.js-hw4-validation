import express from 'express';
import dotenv from 'dotenv';
import contactsRouter from './routers/Contacts.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

dotenv.config();

export default function setupServer() {
  const app = express();

  app.use(express.json());

  app.use('/contacts', contactsRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  return app;
}
