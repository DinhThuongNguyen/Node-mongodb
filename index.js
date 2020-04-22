require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');//nếu muốn đọc được cookie(req.cookies) thì phải cài đặt cookie-parser

app.use(cookieParser(process.env.COOKIES_SECRET));

var port = 1080;
var tinh_router = require('./router/tinh.routers.js');
var logIn_router = require('./router/logIn.router.js');
var check_LogIn = require('./middlewares/checkLogin.middlewares.js');
var sessionMiddleware = require('./middlewares/sessionId.middleware.js')
var product_router = require('./router/product.router.js')
var router_card = require('./router/card.roouter.js')
//var file_js = require('./data/JVscript.js')
//sử dụng cho post
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('uploads'))
app.use(sessionMiddleware);

app.engine('pug', require('pug').__express);
app.set('views','./data');
app.set('view engine', 'pug');



app.get('/', function(req, res){
	res.send('Bài method POST')
});
app.use('/tinh',check_LogIn.check_Login, tinh_router);
app.use('/login', logIn_router);
app.use('/product',product_router);
app.use('/card', router_card);
app.listen(port, function(){
	console.log('port da tao la: '+port)
});