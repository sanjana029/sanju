var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    console.log(req.query)
    // res.json({name:req.query.fname})
    res.render('table', { title: req.query.fname });
  });

  module.exports = router;
  