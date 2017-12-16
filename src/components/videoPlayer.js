angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<',
    test: '<'
  },

  controller: function() {

  },
  templateUrl: './src/templates/videoPlayer.html'
});
