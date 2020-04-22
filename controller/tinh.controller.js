var shortid = require('shortid');//Tạo id ngẫu nhiên

var db = require('../db')

module.exports.tinh = function(req, res){
	res.render('index', {
		tinh: db.get('arr').value()
	})
}
module.exports.tinh_post = function(req, res){
	var loi = [];
	req.body.id = shortid.generate();
	req.body.avatar = req.file.path.split('/').slice(1).join();
	if(req.body.ad.length > 0 && req.body.phone.length > 0){
		db.get('arr').push(req.body).write();
		res.redirect('.')
	}

	else{
		if(!req.body.ad){
			loi.push('loi nhap tinh')
		}
		if(!req.body.phone){
			loi.push('loi nhap phone')
		}
		res.render('post',{
			err: loi,
			error: req.body
		})
	}
}
module.exports.tinh_view = function(req, res){
	var id = req.params.id;
	var tinh_id = db.get('arr').find({ id: id }).value();
	res.render('view',{
		user: tinh_id
	})
}
module.exports.tinh_add = function(req, res){
	res.render('post')
}