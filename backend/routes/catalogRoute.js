const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get
router.get('/', (req, res) => {
    db.query('SELECT * FROM btl_catalog', (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(results);
    });
});

module.exports = router;