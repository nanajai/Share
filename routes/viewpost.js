var express = require('express');
var router = express.Router();
var wp = require('../messages.json');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.set(req.query.id);
});

module.exports = router;
