var User = require('../models/user');
var session = require('express-session');
var request = require('request');

module.exports = {
  userShow: userShow,
  me: me,
  delete: del,
  markit: markit,
  predict: predict,
  stockInfo: stockInfo,
  destroyTicker: destroyTicker
}

//current user data
function me(req, res) {
  res.json(req.user)
}



//This function pushes predictions to the database
function predict(req, res) {
    console.log("updating prediction")
    console.log(req.user)
    console.log("prediction:", req.body)
    res.json({msg: "updated prediction"})
}

//Makes request to API from back-end then transfers data to front end for the watchlist page.
function markit(req, res){
    request('http://dev.markitondemand.com/Api/v2/quote/json?symbol='+req.params.stockTicker, function(err, response, body) {
        res.json(body)
    });

}

//Makes a request to API for data in order to render stock show page.  Data is then transfered to front end.
function stockInfo(req, res) {
  request('http://dev.markitondemand.com/Api/v2/quote/json?symbol='+req.params.stockTicker, function(err, response, body) {
    console.log(body)
      res.render('pages/stockInfo', {stockInfo: JSON.parse(body), user: req.user})
  });
}


//This function finds the current user and passes the information to the user show page
function userShow(req, res) {
  User.find({}, function(err, users) {
    if(err) return res.status(err.statusCode || 500).json(err)
    res.render('pages/userShow', {user: req.user})
  })
}

//destroys ticker from stock array in user schema
function destroyTicker(req, res){
  User.update(
    { "_id": req.user._id },
    { "$pull": { "stocks": { stockTicker: req.params.tickerSymbol } } },
    function(err, numAffected) {
        if(err){
            console.log(err);
        } else {
            res.json({message: 'success'})
        }
    }
);
}

//deletes user from site
function del(req, res) {
  if(req.user._id == req.params.id){
    User.remove({_id: req.user._id}, function(error){
      if(error) return res.status(error.statusCode || 500).json(error)
      res.redirect('/')
    })
  }
}
