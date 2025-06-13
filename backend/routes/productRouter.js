const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const { verifyToken, isAdmin } = require('../middlewares/auth');

router.get('/', controller.getAll);
router.get('/search', controller.search); // Tìm kiếm
router.get('/:id', controller.getById);
router.post('/',verifyToken, isAdmin, controller.create); // Thêm (admin)
router.post('/:id',verifyToken, isAdmin, controller.update); // Sửa (admin)
router.post('/:id',verifyToken, isAdmin, controller.remove); // Xóa (admin)

module.exports = router;