const express = require('express');
const router = express.Router();

const book_controller = require('../controllers/book.controller');

const jwtHelper = require('../config/jwtHelper');

router.get('/',jwtHelper.verifyJwtToken,book_controller.list); // Get all products
router.get('/:id',jwtHelper.verifyJwtToken,book_controller.show); // Get single product by id
router.post('/',jwtHelper.verifyJwtToken,book_controller.save); // Save Product
router.put('/:id',jwtHelper.verifyJwtToken,book_controller.update); // Update Product
router.delete('/:id',jwtHelper.verifyJwtToken,book_controller.delete); // Delete Product

module.exports = router;
