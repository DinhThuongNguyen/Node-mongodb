var md5 = require('md5');
var db = require('../db');

module.exports.logIn = function(req, res){
	res.render('LogIn');
}
module.exports.logIn_post = function(req, res){
	var loi = [];
	if(req.body.email.length > 0 && req.body.password.length > 0){
		var email = db.get('arr').find({email: req.body.email}).value();
		var psw = db.get('arr').find({password : md5(req.body.password)}).value();
		//var mk_baomat = md5(req.body.password);
		if(email && psw){
			res.cookie('userID', email.id,{
				signed : true
			});
			res.redirect('/tinh');
		}
		else{
			if(!email){
				loi.push('Wrong email');
				res.render('LogIn',{
					err:loi,
					error: req.body
				})
				return;
			}
			if(!psw){
				loi.push('Wrong password');
				res.render('LogIn',{
					err:loi,
					error: req.body
				})
				return;
			}
		}
	}

	else{
		if(!req.body.email){
			loi.push('loi nhap email')
		}
		if(!req.body.password){
			loi.push('loi nhap password')
		}
		res.render('LogIn',{
			err: loi,
			error: req.body
		})
	}
}