var express = require('express');
var router = express.Router();
var mid = require('./middleware');
 
/* GET users profile. */

router.get('/profile', function(req, res, next) {
	var url = "/user_mgmt/user_info?userId=1";
	mid.find(req, url, function(data){  
		res.render('profile',{user:data.data} );
		//res.end();
  }) 
 
});

module.exports = router;
