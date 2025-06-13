const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM btl_cart', (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(results);
    });
});

// Add to cart
router.post('/', (req, res) => {
    const data = req.body;
    db.query('INSERT INTO btl_cart SET ?', data, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Thêm sản phẩm vào giỏ hàng thành công', id: result.insertId });
    });
});

// Delete cart item
router.post('/', (req, res) => {
    const data = req.body;
    db.query('DELETE FROM btl_cart WHERE cart_id = ?', [req.params.id], (err) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Xóa sản phẩm khỏi giỏ hàng thành công' });
    });
});

module.exports = router;