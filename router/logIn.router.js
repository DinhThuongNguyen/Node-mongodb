var express = require('express')
var router_logIn = express.Router()

var controller_logIn = require('../controller/logIn.controler.js')

router_logIn.get('/', controller_logIn.logIn);
router_logIn.post('/', controller_logIn.logIn_post);

module.exports = router_logIn;