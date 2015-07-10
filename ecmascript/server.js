var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());

var PORT = process.env.PORT || 1337;

app.use('/js',express.static(__dirname + '/app/server/public/js'));
app.use('/css',express.static(__dirname + '/app/server/public/css'));
app.use('/images',express.static(__dirname + '/app/server/public/images'));
app.use('/spa/js', express.static(__dirname + '/app/client/js'));
app.use('/partials',express.static(__dirname + '/app/client/partials'));
app.use('/spa/css', express.static(__dirname + '/app/client/css'));

var name = 'Metux';
var ecmascript = require('./app/server/middlewares/vanilla/esCode');
// view engine setup
app.set('views', './app/server/views');
app.set('view engine', 'ejs');

// serve an empty page that just loads the browserify bundle
app.get('/', function(req, res) {
   res.render('customBS', {name:name, es:true});
});

app.get('/es',
      ecmascript,
      function(req, res) {
         res.render('customBS', {res:res});
      });

app.get('/aboutme', function(req, res) {
   res.render('customBS', {aboutme:true});
});



app.listen(PORT);
console.log('server started on port %s', PORT);




