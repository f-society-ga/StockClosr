var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('<h1>Hello World</h1>')
});

module.exports = router;
