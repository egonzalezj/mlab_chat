/*  Name: sp.js
*   Description: Simple peer definitions
*   Author: Elisabet González | eli.jvn@gmail.com
*   Creation date: October 26th, 2016
*   Version: 1.0.0
*   History:
*   v1.0.0  10/26/2016  App creation
*/

var Peer = require('simple-peer');

var peer = new Peer({initiator: location.hash === '#1', trickle: false, stream: stream});

peer.on('signal', function (data) {
  var id = JSON.stringify(data);
});

/*document.getElementById('connect').addEventListener('click', function () {
  var otherId = JSON.parse(document.getElementById('otherId').value)
  peer.signal(otherId)
})

document.getElementById('send').addEventListener('click', function () {
  var yourMessage = document.getElementById('yourMessage').value
  peer.send(yourMessage)
})

peer.on('data', function (data) {
  document.getElementById('messages').textContent += data + '\n'
})

peer.on('stream', function (stream) {
  var video = document.createElement('video')
  document.body.appendChild(video)

  video.src = window.URL.createObjectURL(stream)
  video.play()
})*/

exports.module = Peer;
