angular.module('video-player')

.component('search', {
  bindings: {
    searchVideos: '<'
  },

  controller: function() {
    // this.test = (text) => alert(text);
  },

  templateUrl: './src/templates/search.html'
});
