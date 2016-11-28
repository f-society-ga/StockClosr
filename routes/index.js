var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var usersCtrl = require('../controllers/users');
var Stock = require('../models/stock');
var http = require('http');
var watchListController = require('../controllers/watchlist');
var usersController = require('../controllers/users');


router.get('/users', usersCtrl.index)

//creates a route for current user
router.get('/api/me', usersCtrl.me)

//creates a route from the front end to the back end so that a request to the api can be made without using a secure connection
router.get('/markit/search/:stockTicker', usersCtrl.markit)

//creates a route for the stock show page
router.get('/stockinfo/:stockTicker', usersCtrl.stockInfo)

//renders the home page
router.get('/', function(req, res) {
  res.render('index', {user: req.user});
});

//Google oauth route
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


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// route to delete stock from table
router.delete('/api/users/stocks/:tickerSymbol', usersController.destroyTicker)


// User Show page route
router.get('/user', usersController.userShow)
router.get('/users/:id', usersController.delete)


router.patch('/api/me/prediction', usersController.predict)


//Watchlist
router.get('/watchlist', isLoggedIn, watchListController.index)

//If user is authenticated, redirect to root route
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/');
}

//router for the stock show page
router.get('/stockinfo', function(req, res, next) {
  res.render('../views/pages/stockinfo.ejs')
})


router.post('/search', watchListController.search)



module.exports = router;
