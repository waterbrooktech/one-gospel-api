const { default: mongoose } = require('mongoose');

const centerServices = require('./centerServices');
const memberServices = require('./memberServices');
const postServices = require('./postServices');

const dbURI = 'mongodb+srv://abisolawal:rGnZgnys3jGM66jy@one-gospel-dev-cluster.gi8fbwg.mongodb.net/twb-post-board-app?retryWrites=true&w=majority';

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
