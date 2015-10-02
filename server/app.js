/**
 * Created by gfrethem on 10/2/15.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/public/assets/views/index.html");
});

var server = app.listen(3000, function() {
   var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;