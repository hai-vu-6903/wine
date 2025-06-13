const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all commment
router.get('/', (req, res) => {
    db.query('SELECT * FROM btl_comment', (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(results);
    });
});

// Add comment
router.post('/', (req, res) => {
    const data = req.body;
    db.query('INSERT INTO btl_comment SET ?', data, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Đã bình luận thành công', id: result.insertId });
    });
});

module.exports = router;