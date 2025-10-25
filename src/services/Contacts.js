// import Contact from '../models/Contacts.js';

// // Отримати всі контакти
// export async function getAllContacts() {
//   return await Contact.find().lean();
// }

// // Отримати контакт за ID
// export async function getContactById(contactId) {
//   return await Contact.findById(contactId).lean();
// }

// // Створити контакт
// export async function createContact(contactData) {
//   const contact = new Contact(contactData);
//   return await contact.save();
// }

// // Оновити контакт
// export async function updateContact(contactId, updateData) {
//   return await Contact.findByIdAndUpdate(contactId, updateData, {
//     new: true,
//     runValidators: true,
//   }).lean();
// }

// // Видалити контакт
// export async function deleteContact(contactId) {
//   const result = await Contact.findByIdAndDelete(contactId);
//   return !!result;
// }

// src/services/Contacts.js
import Contact from '../models/Contacts.js';

export const getAllContacts = async () => {
  return await Contact.find();
};

export const getContactById = async (id) => {
  return await Contact.findById(id);
};

export const createContact = async (data) => {
  return await Contact.create(data);
};

export const updateContact = async (id, data) => {
  return await Contact.findByIdAndUpdate(id, data, { new: true });
};

export const deleteContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};

// 🔹 Нові методи для пагінації, сортування та фільтрації
export const countContacts = async (filter = {}) => {
  return await Contact.countDocuments(filter);
};

export const getPaginatedContacts = async ({
  filter = {},
  sort = {},
  skip = 0,
  limit = 10,
}) => {
  return await Contact.find(filter).sort(sort).skip(skip).limit(limit);
};
