const multer = require('multer');
const express = require('express');
const app = express();
const upload = multer({ dest: 'uploads/' });

// Test single file upload
app.post('/single', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.send('Single file uploaded');
});

// Test multiple file upload
app.post('/multiple', upload.array('files', 3), (req, res) => {
  console.log(req.files);
  res.send('Multiple files uploaded');
});

// Test mixed file upload
app.post('/mixed', upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 3 }]), (req, res) => {
  console.log(req.files);
  res.send('Mixed files uploaded');
});

// Test custom file filter
const customFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    cb(new Error('Only PNG images are allowed'));
  } else {
    cb(null, true);
  }
}
const customUpload = multer({ dest: 'uploads/', fileFilter: customFilter });
app.post('/custom', customUpload.single('file'), (req, res) => {
  console.log(req.file);
  res.send('Custom file uploaded');
});

// Test custom storage engine
const customStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const customStorageUpload = multer({ storage: customStorage });
app.post('/storage', customStorageUpload.single('file'), (req, res) => {
  console.log(req.file);
  res.send('Custom storage file uploaded');
});

// Start the server
app.listen(4000, () => {
  console.log('Server started on port 4000');
});
