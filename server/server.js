var express = require('express');
var http = require('http');
var path = require('path');
var search = require('./routes/search');
var cors = require('cors');

var app = express();

app.configure(function () {
    app.set('port', 3000);
    app.use(cors())
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, '../client')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/country', search.findFlightsByCountry);
app.get('/city', search.findFlightsByCity);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
