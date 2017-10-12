var express = require('express');
var router = express.Router();

 
/* GET users profile. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: '用户' });
});

module.exports = router;
