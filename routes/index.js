var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //res.sendFile("index.html");
});

/* GET table page. */
router.get('/table', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //res.sendFile("index.html");
});

module.exports = router;
