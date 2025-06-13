const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.verifyToken = (req,  res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'Không có token' });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token không hợp lệ' });
    }
};

exports.isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 1) {
        next();
    }else {
        return res.status(403).json({ message: 'Chỉ Admin mới truy cập được' });
    }
};