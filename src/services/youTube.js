angular.module('video-player')
.service('youTube', function($http) {
  this.search = (query, callback) => {
    var data = {
      key: window.YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      maxResults: 10,
      type: 'video',
      videoEmbeddable: 'true'
    };

    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: data
      // params: data
    }).then(function success(data) {
      console.log(data.data.items[0]);
      console.log('success');
      callback(data.data.items);
    }, function error(data) {
      console.log('error');
    });
  };

  this.getDetails = (video, callback) => {
    var data = {
      key: window.YOUTUBE_API_KEY,
      id: video.id.videoId,
      part: 'statistics'
    };

    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/videos',
      params: data
    }).then(function success(data) {
      console.log(data);
      console.log('success');
      callback(data.data.items[0].statistics);
    }, function error(data) {
      console.log('error');
    });
  };    

});
