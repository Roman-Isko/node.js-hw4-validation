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
