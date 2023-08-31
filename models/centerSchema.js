const { model, Schema } = require('mongoose');

const centerSchema = new Schema({
  address: {
    require: true,
    type: String
  },
  area: {
    require: true,
    type: String
  },
  contacts: [{
    name: {
      require: true,
      type: String
    },
    phoneNumber: {
      length: 11,
      require: true,
      type: String
    }
  }],
  isArchived: {
    default: false,
    type: Boolean
  },
  maxCapacity: {
    require: true,
    type: Number
  },
  registeredAttendees: [{
    type: Schema.Types.ObjectId,
    ref: 'Member'
  }]
}, {
  timestamps: true
});

module.exports = model('Center', centerSchema);