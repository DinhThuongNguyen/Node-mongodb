var db = require('../db');
module.exports.card_controller = function(req, res,next){
	var productid = req.params.productId;
	var sessionId = req.signedCookies.sessionId;
	if(!sessionId){
		res.redirect('/product');
		return;
	}
	var cout = db.get('sessions')
				  .find({id: sessionId})
				  .get('card.'+ productid, 0)
				  .value();
	db.get('sessions')
	  .find({id: sessionId})
	  .set('card.'+ productid, cout + 1)
	  .write();
	res.redirect('/product');  
}