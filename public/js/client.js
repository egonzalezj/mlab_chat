//Server info
var hostname = 'webrtctest2.zapto.org';
var port = 80;
var socket = io(hostname + ':' + port);

var audio = document.querySelector('audio');
var id = document.getElementById('id');

/*socket.on('s', function(s) {
  audio.src = window.URL.createObjectURL(s);
});*/

socket.on('id', function(id) {
  id.value = id;
});
