// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(process.cwd() + '/public'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

// Routes
// =============================================================

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/cv', function(req, res) {
    res.sendFile(path.join(__dirname, 'cv.html'));
})
app.get('/resume', function(req, res) {
    res.sendFile(path.join(__dirname, 'resume.html'));
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function() {
    console.log('find me at port: ' + PORT);
})

