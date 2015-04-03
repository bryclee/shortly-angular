angular.module('shortly.shorten', [])

.controller('ShortenController', function ($http, $scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    var link = {url: $scope.newLink}
    Links.postLink(link)
    .then(function(data) {
      $scope.link = data;
    })
    .catch(function(err) {
      console.log('Error!', err);
    });
  };
}); // add a factory later
