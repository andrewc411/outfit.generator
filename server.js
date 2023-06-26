const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  const upload = multer({ storage: storage });

  app.post('/upload', upload.single('photo'), (req, res) => {
    res.send('Photo uploaded successfully!');
  });

  app.get('/photos/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'uploads', filename));
  });

  const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
