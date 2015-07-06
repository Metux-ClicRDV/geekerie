var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());

var PORT = process.env.PORT || 1337;

var name = 'Metux';
var loginMiddleware = require('./app/middlewares/login');
// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// serve an empty page that just loads the browserify bundle
app.get('/', function(req, res) {
   res.render('home', {name:name});
});

app.get('/login', function(req, res) {
      res.render('home', {name:name, login:true});
   });

app.post('/login',
   bodyParser.json(),
   loginMiddleware
);
app.listen(PORT);
console.log('server started on port %s', PORT);