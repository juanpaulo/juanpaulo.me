var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'juanpaulo.me'});
});

router.post('/flickrapi', function(req, res) {
  var Flickr = require('flickrapi'),
  flickrOptions = {
    api_key: process.env.API_KEY,
    secret: process.env.SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  };
  Flickr.authenticate(flickrOptions, function(error, flickr) {
    flickr.photosets.getPhotos({
      photoset_id: '72157622849227887' // Interestingness Album
    }, function(err, result) {
      if(err) {
        throw new Error(err);
        // TODO res.render('502');
      }
      res.send({photos: result.photoset.photo});
    });
  });
});

router.get('/projects', function(req, res) {
  res.render('under-construction', { title: 'Projects' });
});

router.get('/blog', function(req, res) {
  res.render('under-construction', { title: 'Blog' });
});

router.get('/resume', function(req, res) {
  res.render('resume', { title: 'Resume' });
});

module.exports = router;
