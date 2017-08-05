var app = require('express')();
var fs = require('fs');


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/search', function (req, res) {
    res.send(req.query.query);
});

app.listen(2000);