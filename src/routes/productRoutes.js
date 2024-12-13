const express = require('express');
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Solo el administrador puede manejar productos
router.post('/', authMiddleware, roleMiddleware('admin'), productController.createProduct);
router.get('/', authMiddleware, productController.getAllProducts);
router.put('/:id', authMiddleware, roleMiddleware('admin'), productController.updateProduct);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), productController.deleteProduct);

module.exports = router;
