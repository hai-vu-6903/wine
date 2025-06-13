// đăng ký/ đăng nhập (bảng user_table)
const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = (req, res) => {
    const { user_userName, user_pass, user_email, user_name } = req.body;
    const hashedPass = bcrypt.hashSync(user_pass, 8);

    db.query('INSERT INTO user_table SET ?', {
        user_userName,
        user_pass: hashedPass,
        user_email,
        user_name,
        role: 0,
        user_gender: 'Nam',
        user_phone: ''
    }, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Đăng ký thành công' });
    });
};

exports.login = (req, res) => {
    const { user_userName, user_pass } = req.body;
    db.query('SELECT * FROM user_table WHERE user_userName = ?', [user_userName], (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (!results.length) {
            return res.status(404).json({massage: 'Sai tài khoản' });
        }

        const user = results[0];
        const checkPass = bcrypt.compareSync(user_pass, user.user_pass);
        if (!checkPass) {
            return res.status(401).josn({ message: 'Sai mật khẩu' });
        }

        const token = jwt.sign({ id: user.user_id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user});
    });
};