const express = require('express');
const upload = require('../middlewares/upload');
const router = express.Router();

router.post('/', upload.single('file'), (req, res) => {
    res.json({ filename: req.file.filename });
});

module.exports = router;