angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    onEntryClick: '<'  
  },

  templateUrl: './src/templates/videoListEntry.html'
});
