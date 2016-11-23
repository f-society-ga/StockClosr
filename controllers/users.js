var User = require('../models/user');
var session = require('express-session')

module.exports = {
  index: index,
  userShow: userShow,
  me: me,
  delete: del
}

function me(req, res) {
  res.json(req.user)
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
