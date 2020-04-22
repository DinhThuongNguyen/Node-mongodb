var db = require('../db');
module.exports.product = function(req, res){
	var page = parseInt(req.query.page) || 1;
	var x_page = 8;
	var start = (page - 1)* x_page;
	var end = page *x_page;
	var all = db.get('products').value().length;
	var so_trang = [];
	so_trang.push(page);
	so_trang.push(page + 1);
	so_trang.push(page + 2);
	var page_cuoi;
	if(all % 8 == 0){
		page_cuoi = all / 8;
	}
	else{
		page_cuoi = Math.floor(all / 8) + 1;
	}
	if(page == page_cuoi || page == page_cuoi - 1 || page == page_cuoi - 2){
		so_trang = [];
		so_trang.push(page_cuoi - 2);
		so_trang.push(page_cuoi - 1);
		so_trang.push(page_cuoi - 0);
	}
	res.render('product',{
		sp: db.get("products").slice(start,end).value(),
		so_trang: so_trang,
		page_hientai:page,
		page_cuoi: page_cuoi
	})
};

module.exports.card = function(req, res, next){
	//var card = db.get("sessions").map('card').value();
	var x = db.get('sessions').find({id: req.signedCookies.sessionId}).value()
	
	var sl = 0
		if(x.id === req.signedCookies.sessionId){
			var sp = [];
			var sl_sp = new Array(sl)
			for (var [key, value] of Object.entries(x.card)) {
				var obj = {}
			  var ten = db.get('products').find({id: key}).value();
			  obj.ten = ten.name;
			  obj.sl = value;
			  sp.push(obj);
			}
			res.render('card',{
				sp: sp
			})
		}

}