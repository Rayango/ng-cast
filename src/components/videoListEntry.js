angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    videoData: '<'  
  },

  templateUrl: './src/templates/videoListEntry.html'
});
