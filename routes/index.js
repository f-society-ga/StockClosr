var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Stock = require('../models/stock');
var http = require('http');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/watchlist', function(req, res, next){
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({data:'content'}));
})

router.post('/api/watchlist', function(req, res, next){
  console.log(req.body.symbol);


  http.get({host:'dev.markitondemand.com', path:'/MODApis/Api/v2/Lookup/json?input=' + req.body.symbol}, function(response){
    var str = '';
    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      console.log(str)
      var myResponse = JSON.parse(str)
      if (myResponse.length > 0 && myResponse[0].Symbol == req.body.symbol){
        var firstResult = myResponse[0];

        User.find({'email': 'aaa@aaa.com'}, function(err, users){
          if (err) return console.log(err)

          var user = users[0]
          var stock = req.body
          user.stocks.push(stock)
          user.save(function(err, user) {
            if (err) return console.log(err)
            res.send(JSON.stringify(user.stocks))
          })
        })

      }
      else {
        res.send(JSON.stringify({'error': 'the symbol is not valid'}))
      }
    });
  });
});

router.get('/api/watchlist/:stockid', function(req, res, next){
  res.send('Getting stock with id of: ' + req.params.stockid)
})

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
