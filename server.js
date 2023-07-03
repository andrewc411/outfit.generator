const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });


const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
