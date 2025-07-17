const express = require("express");
const router = express.Router();

const { body, params } = require('express-validator');
const productController = require("../controllers/product.controller");

// Validator
const validateProduct = [
    body('name').notEmpty().withMessage('Name is Required'),
    body('price').notEmpty().withMessage('Price is Required').isFloat({gt : 0}).withMessage('Price must be Positive'),
    body('stock').notEmpty().withMessage('Stock is Required').isInt({gt : 0}).withMessage('Stock must be Positive'),
]

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', validateProduct, productController.createProduct);
router.put('/:id', validateProduct, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;