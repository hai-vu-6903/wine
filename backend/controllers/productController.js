const db = require('../config/db');

exports.getAll = (req, res) => {
    db.query('SELECT * FROM btl_product', (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(results);
    });
};

// Search
exports.search = (req, res) => {
    const keyword = `%${req.query.q}%`;
    db.query('SELECT * FROM btl_product WHERE product_name LIKE ?', [keyword], (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(results);
    });
};

exports.getById = (req, res) => {
    db.query('SELECT * FROM btl_product WHERE product_id = ?', [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (!results.length) {
            return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
        }
        res.json(results[0]);
    });
};

exports.create = (req, res) => {
    const data = req.body;
    db.query('INSERT INTO btl_product SET ?', data, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Thêm sản phẩm thành công', id: result.insertId });
    });
};

exports.update = (req, res) => {
    const data = req.body;
    db.query('UPDATE btl_product SET ? WHERE product_id = ?', [data, req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Cập nhật sản phẩm thành công', id: result.insertId });
    });
};

exports.remove = (req, res) => {
    db.query('DELETE FROM btl_product WHERE product_id = ?', [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Xóa sản phẩm thành công', id: result.insertId });
    });
};
