/*  Name: gum.js
*   Description: Chat application with NodeJS and WebRTC
*   Author: Elisabet González | eli.jvn@gmail.com
*   Creation date: October 25th, 2016
*   Version: 1.0.0
*   History:
*   v1.0.0  10/25/2016  App creation
*/

//Required dependencies
//var getUserMedia = require('getusermedia');

if(hasGetUserMedia()) {
  navigator.getUserMedia =  navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.mediaDevices.getUserMedia ||
                            navigator.msGetUserMedia;
} else {
  console.log('getUserMedia() is not supported on your browser');
};

var audio = document.querySelector('audio');

if(navigator.getUserMedia) {
  navigator.getUserMedia({video: false, audio: true}, function(stream) {
    audio.src = window.URL.createObjectURL(stream);
    console.log('Acepted');
  },
  function(err) {
    console.log('Rejected', err);
  });
}

function hasGetUserMedia() {
  return !!(navigator.getUserMedia||navigator.webkitGetUserMedia||
            navigator.mozGetUserMedia|| navigator.msGetUserMedia);
}
