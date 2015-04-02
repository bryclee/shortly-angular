angular.module('shortly.shorten', [])

.controller('ShortenController', function ($http, $scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(data) {
    var link = {url: $scope.newLink}
    $http.post('/api/links', link).
      success(function(data, status, headers, config) {
        $scope.link = data;
        console.log(data);
      }).
      error(function(err) {
        console.log('Error!', err);
      });
  };
}); // add a factory later
