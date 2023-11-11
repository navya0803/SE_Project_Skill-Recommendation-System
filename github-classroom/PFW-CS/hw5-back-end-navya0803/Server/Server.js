const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { body, validationResult } = require('express-validator'); // Import express-validator
const Contact = require('./Model'); // Adjust the path accordingly

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const MONGO_URI = 'mongodb+srv://navya:Navya08@nkfashion.edjlw3b.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Define storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = './uploads';

    // Check if the directory exists, create it if not
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Create multer instance
const upload = multer({ storage });

// Validation middleware for the contact form
const contactValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
];

// API endpoint for handling file upload
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    const { file } = req;
    console.log('File uploaded successfully:', file);

    // You can perform additional actions after successful file upload

    res.json({ message: 'File uploaded successfully', file });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// API endpoint for handling contact form submissions with validation
app.post('/api/contact', contactValidation, async (req, res) => {
  // Validate the request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email } = req.body;
    const newContact = new Contact({ name, email });
    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
