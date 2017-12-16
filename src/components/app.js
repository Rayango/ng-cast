angular.module('video-player')

.component('app', {
  bindings: {

  },

  controller: function(youTube) {
    this.video = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;

    this.searchVideos = (query) => {
      youTube.search(query, (data) => {
        this.video = data[0];
        this.videos = data;
      });
    }; 
  },

  templateUrl: './src/templates/app.html'
});
