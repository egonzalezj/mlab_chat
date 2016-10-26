/*  Name: server.js
*   Description: Chat application with NodeJS and WebRTC
*   Author: Elisabet González | eli.jvn@gmail.com
*   Creation date: October 25th, 2016
*   Version: 2.0.0
*   History:
*   v2.0.0  10/25/2016  App creation
*/

//Required dependencies
var express = require('express');
var gum = require('./modules/gum');
//Start express module
var app = express();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);
//Server info
var hostname = 'webrtctest.zapto.org';
var port = 8080;

app.use('/', express.static('public'));

//Set jade to render views
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

//Set hostname and port
http.listen(port, hostname, function() {
  //Sends a message when connection is done.
  console.log('Connected to ' + hostname + ':' + port);
});
