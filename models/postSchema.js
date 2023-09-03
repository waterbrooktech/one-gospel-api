const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  banner: {
    url: {
      require: true,
      type: String
    },
    id: {
      require: true,
      type: String
    }
  },
  date: {
    require: false,
    type: Date
  },
  link: {
    require: false,
    type: String
  },
  isArchived: {
    default: false,
    type: Boolean
  },
  message: {
    require: true,
    type: String
  },
  title: {
    require: true,
    type: String
  },
}, {
  timestamps: true
});

module.exports = model('Post', postSchema);