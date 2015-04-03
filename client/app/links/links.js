angular.module('shortly.links', [])

.controller('LinksController', function ($http, $scope, Links) {
  $scope.data = {}; // Maybe links?
  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(data) {
      $scope.data.links = data;
    })
  };

  $scope.getLinks();
})
.directive('linkTemplate', function(){
  return {
    restrict: 'E',
    templateUrl: 'app/links/link_directive.html'
  };
});
