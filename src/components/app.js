angular.module('video-player')

.component('app', {
  bindings: {

  },

  controller: function() {
    
    this.video = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
  },

  templateUrl: './src/templates/app.html'
});
