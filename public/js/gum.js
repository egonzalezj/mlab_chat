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
} else {
  console.log('getUserMedia() is not supported on your browser');
};

navigator.getUserMedia =  navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.mediaDevices.getUserMedia ||
                          navigator.msGetUserMedia;

var video = document.querySelector('video');

if(navigator.getUserMedia) {
  navigator.getUserMedia({video:true, audio:false}, function(stream) {
    video.src = window.URL.createObjectURL(stream);
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
