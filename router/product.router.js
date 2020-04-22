var express = require('express')
var router_product = express.Router()

var controller_product = require('../controller/product.controller.js')

router_product.get('/', controller_product.product);
router_product.get('/card', controller_product.card);

module.exports = router_product;