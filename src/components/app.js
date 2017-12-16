angular.module('video-player')

.component('app', {
  bindings: {

  },

  controller: function() {
    
    this.video = window.exampleVideoData[0];

  },

  templateUrl: './src/templates/app.html'
});
