var User = require('../models/user');

module.exports = {
  index: index,
  me: me
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
