// server.js
// load the things we need
var express = require('express');
var app = express();
var fs = require('fs');
var config = require('./config');

// set the view engine to ejs
app.set('view engine', 'ejs');



// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
   
    var file = fs.readFileSync('./text.txt', 'utf-8');
    res.render('pages/index', {
       file: file
    });
});


app.listen(config.port, config.host, function () {
  console.log('Example app listening on port 3000!');
});