require('dotenv').config();

const { default: mongoose } = require('mongoose');

const centerServices = require('./centerServices');
const memberServices = require('./memberServices');
const postServices = require('./postServices');

const dbURI = process.env.DB_URI;

mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
mongoose.connection.once('open', () => {
  console.log('DB Connection Successful.');
});
mongoose.connection.on('error', console.error.bind(console, 'Connection error: '));

module.exports = {
  centerServices,
  memberServices,
  postServices
};
