'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

app.use('/bower_components',  express.static(__dirname + '/dist/bower_components'));
app.use('/dist/src',  express.static(__dirname + '/dist/src'));
app.use('/build',  express.static(__dirname + '/dist/build'));

app.get('/', function(req, res) {
    res.sendfile('dist/index.html');
});

app.listen(5000);