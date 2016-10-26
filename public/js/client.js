//Server info
var hostname = 'webrtctest.zapto.org';
var port = 8080;
var socket = io(hostname + ':' + port);

var audio = document.querySelector('audio');

socket.on('stream', function(stream) {
  audio.src = window.URL.createObjectURL(stream);
})
