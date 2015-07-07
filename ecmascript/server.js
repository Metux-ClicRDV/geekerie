var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());

var PORT = process.env.PORT || 1337;

app.use(express.static(__dirname + '/public/'));


var name = 'Metux';
var loginMiddleware = require('./app/middlewares/vanilla/login');
// view engine setup
app.set('views', './views');
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
   loginMiddleware,
   function(req, res){
      res.render('home', {name:name, req:req})
   }
);

app.get('/ressources', function(req, res){
   res.send('Ok / ressources');
})


app.listen(PORT);
console.log('server started on port %s', PORT);




