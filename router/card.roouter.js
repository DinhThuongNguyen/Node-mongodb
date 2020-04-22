var express = require('express')
var router_card = express.Router()

var controller_card = require('../controller/card.controller.js')

router_card.get('/add/:productId', controller_card.card_controller);


module.exports = router_card;