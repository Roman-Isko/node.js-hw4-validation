import express from 'express';
import dotenv from 'dotenv';
import contactsRouter from './routers/Contacts.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

dotenv.config();

export default function setupServer() {
  const app = express();

  app.use(express.json());

  app.use('/api/contacts', contactsRouter);

  //////////////////

  // debug: list routes
  setImmediate(() => {
    console.log('Mounted routes:');
    if (app._router && app._router.stack) {
      app._router.stack.forEach((r) => {
        if (r.route && r.route.path) {
          console.log(
            Object.keys(r.route.methods).join(',').toUpperCase(),
            r.route.path,
          );
        } else if (r.name === 'router') {
          // nested router
          r.handle.stack.forEach((layer) => {
            if (layer.route && layer.route.path) {
              console.log(
                Object.keys(layer.route.methods).join(',').toUpperCase(),
                layer.route.path,
              );
            }
          });
        }
      });
    }
  });

  ///////////////////

  app.use(notFoundHandler);

  app.use(errorHandler);

  return app;
}
