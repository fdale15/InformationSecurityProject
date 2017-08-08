var app = require('express')();

app.get('/', function(req, res) {
    console.log('Cookie:[' + req.query.c + ']\tSite:[' + req.query.s + ']');
});
console.log('Started on port 8888');
app.listen(8888);