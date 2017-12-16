angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onEntryClick: '<'
  },
  controller: function() {

  },
  templateUrl: './src/templates/videoList.html'
});
