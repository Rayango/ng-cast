angular.module('video-player')
.component('videoList', {
  bindings: {
    videosData: '<'
  },

  templateUrl: './src/templates/videoList.html'
});
