import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/contacts`);
  return response.data;
};

const create = async (newContact) => {
  const response = await axios.post(`${baseUrl}/contacts`, newContact);
  return response.data;
};

const update = async (contactId, updatedContact) => {
  const response = await axios.put(
    `${baseUrl}/contacts/${contactId}`,
    updatedContact
  );
  return response.data;
};

const deleteOne = async (contactId) => {
  const response = await axios.delete(`${baseUrl}/contacts/${contactId}`);
  return response.data;
};

const contactService = {
  getAll,
  create,
  update,
  deleteOne,
};

export default contactService;
