angular.module('video-player')

.component('app', {
  bindings: {

  },

  controller: function(youTube) {
    this.video = null;
    this.videos;
    
    this.getVideoDetails = (video) => {
      youTube.getDetails(video, (data) => {
        this.videoData = data;
      });
    };

    this.onEntryClick = (video) => {
      this.video = video;
      this.getVideoDetails(this.video);
    };

    this.searchVideos = (query) => {
      youTube.search(query, (data) => {
        this.video = data[0];
        this.getVideoDetails(this.video);
        this.videos = data;
      });
    };
    this.searchVideos = _.debounce(this.searchVideos, 500); 
    this.searchVideos('');


    // this.getVideoDetails(this.video);

    // setTimeout(() => {
    //   this.getVideoDetails(this.video);
    // }, 200);

    // this.initialize = (callback) => {
    //   this.searchVideos('');
    //   callback(this.videos);
    // };
    // this.intialize(this.getVideoDetails);

  },

  templateUrl: './src/templates/app.html'
});
