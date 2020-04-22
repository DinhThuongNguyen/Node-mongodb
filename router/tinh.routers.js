var express = require('express')
var router = express.Router()
var multer = require('multer')

var upload = multer({ dest: './uploads/' })
var controller = require('../controller/tinh.controller.js')
var check_LogIn = require('../middlewares/checkLogin.middlewares.js')
var check_LogIn = require('../middlewares/checkLogin.middlewares.js');

router.get('/', controller.tinh);
router.get('/add', check_LogIn.check_Login, controller.tinh_add);
router.post('/add',upload.single('avatar'),controller.tinh_post);//('avatar') trùng với avatar ở file post.pug
router.get('/:id',controller.tinh_view);

module.exports = router;