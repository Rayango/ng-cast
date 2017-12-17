angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onEntryClick: '<',
    onPageClick: '<'
  },
  controller: function() {

  },
  templateUrl: './src/templates/videoList.html'
});
