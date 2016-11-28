var Stock = require('../models/stock');
var User = require('../models/user');
var stockHelper = require('../helpers/stockHelper');
var mongoose = require('mongoose');
var session = require('express-session');

module.exports = {
  index:   index,
  search: search
};

//renders watchlist
function index(req, res, next) {
  res.render('pages/watchlist.ejs', {user: req.user});
}

//function to search for stocks
function search(req, res) {
  stockHelper.search(req.body.searchTerm, req.user);
  res.redirect('/watchlist')
}
