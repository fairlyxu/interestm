var express = require('express');
var router = express.Router();
var request = require('request');
 
// project 
var mid = require('./middleware');
router.get('/', function(req, res, next) {
  var url = '/project_mgmt/project/get_project_list'
  mid.find(req, url, function(data){ 
    res.render('index',{datalist:data.data});
    res.end();
  }) 
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'interestm',projectItems:projectItems });
});

router.get('/project:id', function(req, res, next) {
  pid = (req.params.id).substring(1)
  var url = '/project_mgmt/content/get_content_list?projectId='+pid;
  mid.find(req, url, function(data){ 
    data1 = data.data
    for (tmp in data1 ){
      pLink = data1[tmp]['preLink'].split('/').pop().replace('_image','')
      nLink = data1[tmp]['nextLink'].split('/').pop().replace('_image','')
      data1[tmp]['link'] = data1[tmp]['link']+'?contentId='+data1[tmp]['resourceId']+'&'+pLink+'&'+nLink
    }
    res.render('project', { datalist: data1});
    res.end();
  }) 
});

router.get('/project', function(req, res, next) {
  pid = 1;//(req.params.id).substring(1)
  var url = '/project_mgmt/content/get_content_list?projectId='+pid;
  mid.find(req, url, function(data){
    res.render('project', { datalist: data.data});
    res.end();
  })
});


router.get('/demo1', function(req, res, next) {
  res.render('demo1', { title: '莫干山度假酒店' });
});

router.get('/demo2', function(req, res, next) {
  res.render('test', { title: '莫干山度假酒店' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { mainTitle:'登录',secondTitle: '欢迎来到interestm' });
});


/*three level */
router.get('/detail', function(req, res, next) {
  res.render('detail',{ title: '莫干山度假酒店' });
});

router.get('/webgl', function(req, res, next) {
  res.render('webgl',{ title: '莫干山度假酒店' });
});

router.get('/loop', function(req, res, next) {
  res.render('loop');
});

router.get('/pano', function(req, res, next) {
  res.render('pano',{ title: '莫干山度假酒店' });
});

router.get('/project1/pano', function(req, res, next) {
  res.render('pano/pano',{ title: '莫干山度假酒店' });
});

router.get('/default', function(req, res, next) {
  res.render('default');
});
router.get('/common', function(req, res, next) {
  res.render('default');
});

module.exports = router;
