const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
let Profile = new Schema({
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String
  }
})

module.exports = mongoose.model('Profile', Profile)