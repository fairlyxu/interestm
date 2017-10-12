var express = require('express');
var router = express.Router();
var request = require('request');
const MOCKURL = "http://127.0.0.1:3333/"

var projectListURL = MOCKURL+'get_project_list';
var projectItems ;
router.get('/', function(req, res, next) {
  res.render('index', { title: 'interestm'});

});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'interestm',projectItems:projectItems });
});


router.get('/project', function(req, res, next) {
  res.render('project', { title: 'project of Mogan Mountain'});
});

router.get('/demo1', function(req, res, next) {
  res.render('demo1', { title: '观景台建筑结构展示' });
});

router.get('/demo2', function(req, res, next) {
  res.render('test', { title: '观景台建筑结构展示' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { mainTitle:'登录',secondTitle: '欢迎来到interestm' });
});


/*three level */
router.get('/detail', function(req, res, next) {
  res.render('detail',{ title: 'webGL' });
});

router.get('/webgl', function(req, res, next) {
  res.render('webgl',{ title: 'webGL' });
});

router.get('/loop', function(req, res, next) {
  res.render('loop');
});

router.get('/pano', function(req, res, next) {
  res.render('pano');
});

router.get('/project1/pano', function(req, res, next) {
  res.render('pano/pano');
});

router.get('/default', function(req, res, next) {
  res.render('default');
});


module.exports = router;
