const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
