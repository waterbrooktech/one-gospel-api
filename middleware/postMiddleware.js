const MESSAGE_CHARACTER_LIMIT = 20;
const TITLE_CHARACTER_LIMIT = 4;

const validateCreate = (req, res, next) => {
  const { title, message } = req.body;

  if (!title || title.length < TITLE_CHARACTER_LIMIT) {
    return res.status(400).send({ message: `Invalid title, must be at least ${TITLE_CHARACTER_LIMIT} characters` });
  }

  if (!message || message.length < MESSAGE_CHARACTER_LIMIT) {
    return res.status(400).send({ message: `Invalid message, must be at least ${MESSAGE_CHARACTER_LIMIT} characters` });
  }

  next();
};

module.exports = {
  validateCreate
};