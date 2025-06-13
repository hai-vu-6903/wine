const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get
router.get('/', (req, res) => {
    db.query('SELECT * FROM btl_order', (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(results);
    });
});

// Add
router.post('/', (req, res) => {
    const data = req.body;
    db.query('INSERT INTO btl_order SET ?', data, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Đặt hàng thành công', id: result.insertId });
    });
});

module.exports = router;