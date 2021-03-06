// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth, $rootScope) {
  $scope.user = {};

  $scope.signin = function (valid) {
    if (valid === true) {
    Auth.signin($scope.user)
      .then(function (token) {
        $rootScope.user = $scope.user;
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
    } else {
      alert('Must be between 3-10');
    }
  };

  $scope.signup = function (valid) {
    if (valid === true) {
      Auth.signup($scope.user)
        .then(function (token) {
          $rootScope.user = $scope.user;
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      alert('Must be between 3-10');
    }
  };
})
.directive('username', [function() {
  return {
    template: 'Welcome {{ user.username }}'
  }
}])