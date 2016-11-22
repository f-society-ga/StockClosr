var User = require('../models/user');
var session = require('express-session')

module.exports = {
  index: index,
  userShow: userShow
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
