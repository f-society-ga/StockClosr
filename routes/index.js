var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Watchlist = require('../models/watchlist');
var http = require('http');


var watchListController = require('../controllers/watchlist')





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*              */


//Watchlist
router.get('/api/watchlist', watchListController.index)
router.post('/api/watchlist', watchListController.create)

router.get('/api/watchlist/:stockid', function(req, res, next){
  res.send('Getting stock with id of: ' + req.params.stockid)
})
router.put('/api/watchlist/:symbol', watchListController.update)

router.delete('/api/watchlist/:symbol', watchListController.destroy)

router.post('/api/users', function(req, res, next){
  var user = new User({'email': 'aaa@aaa.com', 'name': 'aaa'})
  user.save(function(err, user){
    if (err) console.log(err);

    console.log('user created!')

  })
})

router.get('/api/users', function(req, res, next){
  var users = User.find({}, function(err, users){
    if (err) console.log(err)
  res.send(JSON.stringify(users))


  })
})




module.exports = router;
