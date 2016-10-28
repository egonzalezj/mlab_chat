/*  Name: server.js
*   Description: Chat application with NodeJS and WebRTC
*   Author: Elisabet González | eli.jvn@gmail.com
*   Creation date: October 25th, 2016
*   Version: 2.0.0
*   History:
*   v2.0.0  10/25/2016  App creation
*/

//Required dependencies
var getUserMedia = require('getusermedia');
var Peer = require('simple-peer');
var wrtc = require('wrtc');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);
//var gum = require('./modules/gum');
//Server info
var hostname = 'webrtctest2.zapto.org';
var port = 80;

var id;

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

getUserMedia({video: false, audio: true}, function(stream, err) {
  if(err) {
    console.log('Rejected', err);
  } else {
      console.log('Accepted');
      var peer = new Peer({
        initiator: location.hash === '#1',
        trickle: false,
        stream: stream,
        wrtc: wrtc 
      });

      peer.on('signal', function (data) {
         id = JSON.stringify(data);
      });
  }
});

io.on('connection', function(socket) {
  console.log('Socket IO connection accepted');
  socket.emit('id', id);
});
