import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { initMongoConnection } from './db/initMongoConnection.js';
import Contact from './models/contact.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function seed() {
  try {
    await initMongoConnection();
    const filePath = path.join(__dirname, 'contacts.json');
    const raw = fs.readFileSync(filePath, 'utf8');
    const contacts = JSON.parse(raw);

    if (!Array.isArray(contacts)) {
      throw new Error('contacts.json must contain an array');
    }

    await Contact.deleteMany({});
    await Contact.insertMany(contacts);

    console.log(`Seeded ${contacts.length} contacts`);
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
