const { isValidEmail, isValidPhoneNumber } = require("../utils/string.utils");

const ADDRESS_CHARACTER_LIMIT = 20;
const MAX_CAPACITY_LOWER_LIMIT = 3;
const MAX_CAPACITY_UPPER_LIMIT = 50;

const validateCreate = (req, res, next) => {
  const { address, area, contacts, maxCapacity } = req.body;

  if (!address || address.length < ADDRESS_CHARACTER_LIMIT) {
    return res.status(400).send({ message: `Invalid address, must be at least ${ADDRESS_CHARACTER_LIMIT} characters` });
  }

  if (!area) {
    return res.status(400).send({ message: 'Area is required.' });
  }

  if (!contacts || contacts.length < 1) {
    return res.status(400).send({ message: 'Must have at least one contact.' });
  }

  if (contacts.findIndex(contact => contact.phoneNumber.length < 11) > -1) {
    return res.status(400).send({ message: 'All contacts must have a valid number.' });
  }

  if (isNaN(maxCapacity)) {
    return res.status(400).send({ message: 'max capacity must be a number' });
  }

  if (maxCapacity < MAX_CAPACITY_LOWER_LIMIT) {
    return res.status(400).send({ message: `max capacity cannot be less than ${MAX_CAPACITY_LOWER_LIMIT} people` });
  }

  if (maxCapacity > MAX_CAPACITY_UPPER_LIMIT) {
    return res.status(400).send({ message: `max capacity cannot be more than ${MAX_CAPACITY_UPPER_LIMIT} people` });
  }

  next();
};

const validateMemberRegistration = (req, res, next) => {
  const { email, name, phoneNumber } = req.body;

  if (!email || !isValidEmail(email)) {
    return res.status(400).send({ message: `Invalid email address` });
  }

  if (!name || name.length < 3) {
    return res.status(400).send({ message: 'Name must be at least 3 characters.' });
  }

  if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
    return res.status(400).send({ message: 'Must have a valid phone number.' });
  }

  next();
};

module.exports = {
  validateCreate,
  validateMemberRegistration
};