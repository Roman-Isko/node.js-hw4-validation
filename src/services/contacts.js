import Contact from '../models/Contacts.js';

// Отримати всі контакти...
export async function getAllContacts() {
  return await Contact.find().lean();
}

// Отримати контакт за ID
export async function getContactById(contactId) {
  return await Contact.findById(contactId).lean();
}

// Створити контакт
export async function createContact(contactData) {
  const contact = new Contact(contactData);
  return await contact.save();
}

// Оновити контакт
export async function updateContact(contactId, updateData) {
  return await Contact.findByIdAndUpdate(contactId, updateData, {
    new: true,
    runValidators: true,
  }).lean();
}

// Видалити контакт
export async function deleteContact(contactId) {
  const result = await Contact.findByIdAndDelete(contactId);
  return !!result;
}
