/**
 * Created by gfrethem on 10/2/15.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var mongoURI = "mongodb://localhost:27017/tasksDB";
var MongoDB = mongoose.connect(mongoURI).connection;
var Task = require('./models/tasksModel');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


MongoDB.on('error', function(err) {
    console.log('MongoDB connection error: ', err);
});

MongoDB.once('open', function() {
    console.log('MongoDB connection open!');
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/public/assets/views/index.html");
});

app.post('/add', function(request, response, next) {
    console.log(request.body);
    var newTask = new Task(request.body);
    newTask.save();
    response.send("ok");
});

app.post('/addRemoveCheck', function(request, response, next) {
    console.log(request.body);
    var receivedData = request.body;
    Task.findById(receivedData._id, function(err, task) {
        if (err) throw err;
        task.done = receivedData.done;
        task.save(function(err) {
            if (err) throw err;
            response.sendStatus(200);
        })
    })
});

app.get('/get', function(request, response, next) {
    Task.find({}, function(err, tasks) {
        response.json(tasks);
    })
});

app.get('/getDone', function(request, response, next) {
    Task.remove({"done" : true}, function(err, tasks) {
        response.sendStatus(200);
    })
});

app.set("port", (process.env.PORT || 5000));

var server = app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;