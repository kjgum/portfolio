

// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');
var path = require('path');

// var nodemailer = require('nodemailer');
// var sgTransport = require('nodemailer-sendgrid-transport');
var app = express();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(process.cwd() + '/public'));
app.use(express.static(__dirname + '/public'));

// pp.use(express.static(__dirname + '/client'));
 


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/cv', function(req, res) {
    res.sendFile(path.join(__dirname, 'cv.html'));
})
app.get('/resume', function(req, res) {
    res.sendFile(path.join(__dirname, 'resume.html'));
})

app.listen(PORT, function() {
    console.log('find me at port: ' + PORT);
})

 
// app.use(express.static(__dirname + '/client'));
 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
 
// // Sendmail route
// app.post('/sendmail', function(req, res){
//     var options = {
//         auth: {
//             api_key: 'YOUR_SENDGRID_API_KEY'
//         }
//     }
//     var mailer = nodemailer.createTransport(sgTransport(options));
//     mailer.sendMail(req.body, function(error, info){
//         if(error){
//             res.status('401').json({err: info});
//         }else{
//             res.status('200').json({success: true});
//         }
//     });
// });
 
// Start server

// app.listen(port, ip, function() {
//   console.log('Express server listening on %d', port);
// });