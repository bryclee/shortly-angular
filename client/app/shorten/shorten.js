angular.module('shortly.shorten', [])

.controller('ShortenController', function ($http, $scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(data) {
    $http.post('/api/links', data).
      success(function(data, status, headers, config) {
        $scope.link = data;
      });
  };
});
