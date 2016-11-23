var User = require('../models/user');
var session = require('express-session');
var request = require('request');

module.exports = {
  index: index,
  userShow: userShow,
  me: me,
  delete: del,
  markit: markit
}

function me(req, res) {
  res.json(req.user)
}

function markit(req, res){
    request('http://dev.markitondemand.com/Api/v2/quote/json?symbol='+req.params.stockTicker, function(err, response, body) {
        res.json(body)
    });

}

function index(req, res) {
  User.find({}, function(err, users){
    if(err) return res.status(err.statusCode || 500).json(err)
    res.render(users)
  });
};

function userShow(req, res) {
  User.find({}, function(err, users) {
    if(err) return res.status(err.statusCode || 500).json(err)
    res.render('pages/userShow', {user: req.user})
  })
}

function destroyTicker(req, res){
  var ticker = req.user[0]
}

function del(req, res) {
  if(req.user._id == req.params.id){
    User.remove({_id: req.user._id}, function(error){
      if(error) return res.status(error.statusCode || 500).json(error)
      res.redirect('/')
    })
  }
}
