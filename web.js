// web.js

// set up
var express     = require('express');
var http        = require('http');
var fs          = require('fs');
var jade        = require('jade');
var flash       = require('connect-flash');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var methodOverride = require('method-override');
var session     = require('express-session');
var env         = require('node-env-file');

// load env vars
env(__dirname + '/.env');

// create and configure express app
var app = express();

app.use(cookieParser(process.env.SECRETAUTH));
app.use(bodyParser());
//app.use(session({secret: process.env.SESSIONKEY, cookie: {maxAge: 60000 }}));
app.use(methodOverride());

app.use("/css" , express.static(__dirname + '/dist/css'));
app.use("/js" , express.static(__dirname + '/dist/js'));
app.use("/img", express.static(__dirname + '/dist/img'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.set('port', process.env.PORT || 80);

app.use(flash());

// application routes
app.get('/', function(req, res) {
  res.contentType('text/html');
  res.sendfile(__dirname + '/dist/index.html');
});

// For seeing changes without stoping, starting the server, install nodemon globally npm install -g nodemon. Start your server with nodemon server.js
http.createServer(app).listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});
