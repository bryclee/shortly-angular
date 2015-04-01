angular.module('shortly.links', [])

.controller('LinksController', function ($http, $scope, Links) {
  $scope.data = {}; // Maybe links?
  $scope.getLinks = function() {
    $http.get('/api/links').
      success(function(data, status, headers, config) {
        $scope.data.links = data;
      });
  };

  $scope.getLinks();
});
