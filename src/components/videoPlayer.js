angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<',
    videoData: '<'
  },

  controller: function() {

  },
  templateUrl: './src/templates/videoPlayer.html'
});
