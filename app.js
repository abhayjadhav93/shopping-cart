
var express = require('express');
const bodyParser = require("body-parser");
var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

//index Route
var indexRouter = require('./routes/index');
app.use('/api', indexRouter);




module.exports = app;