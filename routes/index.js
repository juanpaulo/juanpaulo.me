var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Projects' });
});

module.exports = router;
