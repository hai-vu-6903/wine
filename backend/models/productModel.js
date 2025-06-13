const db = require('../config/db');

exports.getAllProducts = (callback) => {
    db.query('SELECT * FROM btl_product', callback);
};

exports.getProductById = (id, callback) => {
    db.query('SELECT * FROM btl_product WHERE product_id = ?', [id], callback);
};

exports.createProduct = (data, callback) => {
    const sql = `INSERT INTO btl_product SET ?`;
    db.query(sql, data, callback);
}