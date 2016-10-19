var express = require('express');
var router = express.Router();
var fs = require('fs')
var uuid = require('node-uuid');
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addpost', {
            title: 'Express'
          });
});

router.post('/', function (req, res,next) {

  var time = Date.now || function() {
    return +new Date;
  };

  var newPostJson = {'timestamp':time(),'user':'Jai','title':'Sample Post','postdata':req.body.postdata,'tags':req.body.tags};


  fs.writeFile('messages.json', JSON.stringify(allposts), function (err) {
      console.log(err);
  });

  res.render('index', {
            wallposts: allposts.sort(function(a, b) {
              return parseInt(b.timestamp) - parseInt(a.timestamp);
            })
          });
 });

module.exports = router;
