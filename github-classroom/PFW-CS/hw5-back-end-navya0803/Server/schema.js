const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  originalname: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  // You can add more fields as needed
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
