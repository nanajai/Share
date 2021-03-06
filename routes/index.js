var express = require('express');
var router = express.Router();
var wp = require('../messages.json');
var dbConfig = require('../dbconfig.json');
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("In router function");
  var MongoClient = mongodb.MongoClient;
  // Pull database info from config file
  var url = 'mongodb://'+dbConfig.hostname+':'+dbConfig.port+'/share';

  MongoClient.connect(url,function(err,db){
    //If db doesent connect should redirect to 500
    if(err){
      res.send(err);
      console.log("Unable to connect to db",err);
    }
    else{
      console.log("DB connected");

      var posts = db.collection('posts');
      var arrayposts = posts.find({}).toArray(function(err, result){
        if(err){
          res.send(err);
          console.log("Cannot convert to array",err);
        }else{
          console.log("Successfully converted to array",result);
        }

      });
      console.log(posts);
      var postsArr = posts.find({}).toArray(function(err,result){
        if(err){
          res.send(err);
        }else{
            res.render('index', {
                      wallposts:result
          });
        }
      });

  }
});

});



module.exports = router;
