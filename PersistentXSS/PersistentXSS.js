var app = require('express')();
var fs = require('fs');

var posts = [{'content': 'first post', 'author' : 'Bob'}, {'content': 'second post', 'author' : 'Jack'}, {'content':'third post', 'author' : 'John'}];

app.get('/', function (req, res) {
    var html = '<html><body>';
    html += '<h1>Posts</h1><br/>';
    for (var post in posts) {
        html += '<hr><h2>' + posts[post]['author'] + ':</h2>';
        html += '<h3 id=\"content-' + posts[post]['author'] + '\">' + posts[post]['content'] + '</h3><br/><br/>';
    }
    html += '<hr>';
    html += '<form action=\'post\' type=\'GET\'>';
    html += '<input type=\'text\' placeholder=\'Name...\' name=\'author\'>';
    html += '<input type=\'text\' placeholder=\'What are you thinking...\' name=\'post_content\'/>';
    html += '<input type=\'submit\'>';
    html += '</form>';
    html += '</body></html>';
    res.send(html);
});

app.get('/post', function (req, res) {
    posts.push({ 'content' : req.query.post_content, 'author' : req.query.author});
    res.redirect('/');
});

app.listen(2000);