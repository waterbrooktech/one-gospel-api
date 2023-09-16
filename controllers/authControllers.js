require('dotenv').config();

const confirmPassword = (req, res) => {
  const { password } = req.body;

  if (!password || password !== process.env.POST_PASSWORD.toString()) {
    return res.status(401).send({ message: 'Invalid password.' });
  }

  return res.status(200).send({ success: true });
};

module.exports = { confirmPassword };