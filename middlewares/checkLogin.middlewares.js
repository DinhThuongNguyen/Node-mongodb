var db = require('../db')
module.exports.check_Login = function(req, res, next){
	if(!req.signedCookies.userID){
		res.redirect('/login');
		return;
	}

	var user = db.get('arr').find({id: req.signedCookies.userID}).value();
	if(!user){
		res.redirect('/login');
		return;
	}
	next();
}