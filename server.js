/*  Name: server.js
*   Description: Chat application with NodeJS and WebRTC
*   Author: Elisabet González | eli.jvn@gmail.com
*   Creation date: October 25th, 2016
*   Version: 2.0.0
*   History:
*   v2.0.0  10/25/2016  App creation
*/

var express = require('express');
var app = express();
//Server info
var hostname = 'webrtctest2.zapto.org';
var port = 80;

app.use('/', express.static('public'));

//Set jade to render views
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

//Set hostname and port
app.listen(port, hostname, function() {
  //Sends a message when connection is done.
  console.log('Connection stablished to ' + hostname + ':' + port);
});
