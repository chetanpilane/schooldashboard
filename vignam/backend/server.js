const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/vignam', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const contentSchema = new mongoose.Schema({
  type: String, // 'text' or 'pdf'
  content: String, // Text content or file path for PDF
});

const Content = mongoose.model('Content', contentSchema);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/upload', upload.single('pdf'), (req, res) => {
  const type = req.body.type;
  const content = req.body.content;
  console.log('Received upload request:', { type, content, file: req.file });

  if (type === 'text') {
    const newTextContent = new Content({ type: 'text', content });
    newTextContent.save()
      .then(savedContent => {
        console.log('Text content saved:', savedContent);
        res.json({ type: 'text', content });
      })
      .catch(err => {
        console.error('Error saving text content:', err);
        res.status(400).json('Error: ' + err);
      });
  } else if (type === 'pdf') {
    if (!req.file) {
      console.error('No file uploaded for PDF content');
      return res.status(400).json('No file uploaded');
    }

    const newPdfContent = new Content({ type: 'pdf', content: req.file.filename });
    newPdfContent.save()
      .then(savedContent => {
        console.log('PDF content saved:', savedContent);
        res.json({ type: 'pdf', content: req.file.filename });
      })
      .catch(err => {
        console.error('Error saving PDF content:', err);
        res.status(400).json('Error: ' + err);
      });
  } else {
    console.error('Invalid content type');
    res.status(400).json('Invalid content type');
  }
});

app.get('/contents', (req, res) => {
  Content.find()
    .then(contents => {
      console.log('Contents retrieved:', contents);
      res.json(contents);
    })
    .catch(err => {
      console.error('Error retrieving contents:', err);
      res.status(400).json('Error: ' + err);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});





