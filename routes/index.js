var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var usersCtrl = require('../controllers/users');
var Stock = require('../models/stock');
var http = require('http');

router.get('/users', usersCtrl.index)

router.get('/api/me', usersCtrl.me)



/* GET home page. */
// The root route renders our only view
router.get('/', function(req, res) {
  res.render('index', {user: req.user});
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'], session: true }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

var watchListController = require('../controllers/watchlist')

var usersController = require('../controllers/users')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*              */



// User Show page route

router.get('/user', usersController.userShow)
router.get('/users/:id', usersController.delete)



//Watchlist
router.get('/watchlist', isLoggedIn, watchListController.index)
router.post('/api/watchlist', watchListController.create)

router.get('/api/watchlist/:stockid', function(req, res, next){
  res.send('Getting stock with id of: ' + req.params.stockid)
})
router.put('/api/watchlist/:symbol', watchListController.update)

// router.delete('/api/watchlist/:symbol', watchListController.destroy)



//Users
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

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/');
}

router.get('/stockinfo', function(req, res, next) {
  res.render('../views/pages/stockinfo.ejs')
})
router.post('/search', watchListController.search)

//stock watchlist
// router.route('/api/users/stocks/stockTicker')
//   .delete(usersController.destroyTicker)


module.exports = router;
