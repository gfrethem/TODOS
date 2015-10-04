/**
 * Created by gfrethem on 10/2/15.
 */
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/public/assets/views/index.html");
});

app.set("port", (process.env.PORT || 5000));

var server = app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;