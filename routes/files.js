const express = require('express');
const router = express.Router();
const fs = require('fs');

const filesDir = process.env.FILES_DIR;

router.get('/videos', (req, res) => {
  res.sendFile(`${filesDir}/videos.zip`, err => {
    if (err) {
      console.log('failed to send the videos.zip', err);
      res.status(500).send('Failed on sending the file!');
    } else {
      console.log('files sent to the client');
    }
  });
});

router.get('/pdfs', (req, res) => {
  res.sendFile(`${filesDir}/pdfs.zip`, err => {
    if (err) {
      console.log('failed to send the pdfs.zip', err);
      res.status(500).send('Failed on sending the file!');
    } else {
      console.log('files sent to the client');
    }
  });
});

module.exports = router;
