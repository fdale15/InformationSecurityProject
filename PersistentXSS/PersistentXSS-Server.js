var app = require('express')();
var fs = require('fs');

var posts = [{
                'content': 'Hey guys, how do you like my new restaurant?',
                'author' : 'Bob',
                'id'     : '1'
            }, 
            {
                'content': 'I enjoyed it very much.',
                'author' : 'Alice',
                'id'     : '2'
            }, 
            {
                'content': 'The food was excellent.',
                'author' : 'John',
                'id'     : '3'
            }];

app.get('/', function (req, res) {
    var html = '<html id=\'htmlId\'><body id=\'bodyId\'>';
    html += '<h1>Posts</h1><br/>';
    for (var post in posts) {
        html += '<hr/><h2>' + posts[post]['author'] + ':</h2>';
        html += '<h3 id=\"content-' + posts[post]['id'] + '\">' + posts[post]['content'] + '</h3><br/><br/>';
    }
    html += '<hr/>';
    html += '<div id=\'divId\'><form action=\'post\' type=\'GET\'>';
    html += '<input type=\'text\' placeholder=\'Name...\' name=\'author\'/>';
    html += '<input type=\'text\' placeholder=\'What are you thinking...\' name=\'post_content\'/>';
    html += '<input type=\'submit\'/>';
    html += '</form></div>';
    html += '</body></html>';
    res.send(html);
});

app.get('/post', function (req, res) {
    posts.push({ 'content' : req.query.post_content, 'author' : req.query.author});
    res.redirect('/');
});

console.log('Server started on 2000');
app.listen(2000);