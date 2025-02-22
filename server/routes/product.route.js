const express = require('express');
const productController = require('./../controllers/product.controller');
const routerProducts = express.Router();

routerProducts.get('/api/list', productController.allProducts);
routerProducts.post('/api/new', productController.createProduct);
routerProducts.delete('/api/delete/:id', productController.deleteProduct);


module.exports = routerProducts;