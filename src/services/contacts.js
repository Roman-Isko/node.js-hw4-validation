import Contact from '../models/contact.js';

export async function listContacts() {
  return await Contact.find().lean();
}

export async function getContactById(contactId) {
  return await Contact.findById(contactId).lean();
}

export async function createContact(contactData) {
  const contact = new Contact(contactData);
  return await contact.save();
}

export async function updateContact(contactId, updateData) {
  return await Contact.findByIdAndUpdate(contactId, updateData, {
    new: true,
    runValidators: true,
  }).lean();
}

export async function deleteContact(contactId) {
  const result = await Contact.findByIdAndDelete(contactId);
  return !!result;
}
