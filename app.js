// create sample node app to serve a web page
var express = require('express');
var app = express();
var port = process.env.PORT || 7000;

app.get('/', function (req, res) {
    res.send('Hello Kubernetes!');
});

app.listen(port, function () {
    console.log('Listening on port ' + port);
});



