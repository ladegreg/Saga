const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
{
  nick: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
},
{timestamps: true}
);

module.exports = mongoose.model('User', userSchema);