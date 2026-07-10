const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleWare');

router.get('/', authMiddleware, productController.getProducts);

router.get('/:id', authMiddleware, productController.getProduct);

router.post('/', authMiddleware, productController.createProduct);

router.put('/:id', authMiddleware, productController.updateProduct);

router.delete('/:id', authMiddleware, productController.deleteProduct);

module.exports = router;