var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var usersCtrl = require('../controllers/users');

router.get('/users', usersCtrl.index)



/* GET home page. */
// The root route renders our only view
router.get('/', function(req, res) {
  res.render('index', {user: req.user});
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
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

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/auth/google'); 
}



module.exports = router;
