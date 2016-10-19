var express = require('express');
var router = express.Router();
var fs = require('fs')
var uuid = require('node-uuid');
var mongodb = require('mongodb');
var dbConfig = require('../dbconfig.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addpost', {
            title: 'Express'
          });
});

router.post('/', function (req, res,next) {

  var MongoClient = mongodb.MongoClient;
  var url = 'mongodb://'+dbConfig.hostname+':'+dbConfig.port+'/share';

  var time = Date.now || function() {
    return +new Date;
  };

  var mongoClient = mongodb.MongoClient;
  mongoClient.connect(url,function(err, db){
    var newPostJson = {timestamp:time(),user:'Jai',title:'Sample Post',
      postdata:req.body.postdata,tags:req.body.tags};

      var posts = db.collection('posts');

      posts.insert([newPostJson], function(err, result){
        if(err){
          console.log("error adding new post");
          res.send(err);
        }else{
          res.redirect("/");
        }
      });

  });


 });

module.exports = router;
