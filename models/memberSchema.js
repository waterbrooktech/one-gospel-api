const { model, Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const memberSchema = new Schema({
  name: {
    require: true,
    type: String
  },
  email: {
    require: true,
    type: String,
    unique: true
  },
  phoneNumber: {
    require: false,
    type: String,
    unique: true
  },
  altPhoneNumbers: [{
    require: false,
    type: String
  }],
}, {
  timestamps: true
});
memberSchema.plugin(uniqueValidator);

module.exports = model('Member', memberSchema);