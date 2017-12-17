angular.module('video-player')

.component('app', {
  bindings: {

  },

  controller: function(youTube) {
    this.video = null;
    this.videos;
    
    this.getVideoDetails = (video) => {
      youTube.getDetails(video, (data) => {
        this.videoData = data.statistics;
        this.isoTime = data.contentDetails.duration;
        this.minutes = +this.isoTime.slice(2, this.isoTime.indexOf('M'));
        this.seconds = +this.isoTime.slice(this.isoTime.indexOf('M') + 1, this.isoTime.indexOf('S'));
        this.duration = (this.minutes * 60 + this.seconds) * 1000;
        this.setUpAutoPlay(this.duration);
      });
    };

    this.onEntryClick = (video) => {
      this.video = video;
      this.getVideoDetails(this.video);
    };

    this.setUpAutoPlay = (videoLength) => {
      setTimeout(function() {
        this.onEntryClick(this.cachedVideos[Math.floor(Math.random() * this.cachedVideos.length)]);
      }, videoLength + 5000);
    };

    this.searchVideos = (query) => {
      youTube.search(query, (data) => {
        this.video = data[0];
        this.getVideoDetails(this.video);
        this.cachedVideos = data;
        this.videos = data.slice(0, 5);
      });
    };
    this.searchVideos = _.debounce(this.searchVideos, 500); 
    this.searchVideos('');

    this.onPageClick = (pageNumber) => {
      this.videos = this.cachedVideos.slice(pageNumber * 5, pageNumber * 5 + 5);
      this.video = this.videos[0];
    };


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
