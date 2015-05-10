'use strict';

angular.module('stackrApp')
  .controller('LoginController', function ($scope, $http, $cookies, LoginService) {

    if (LoginService.isLoggedIn()){
        console.log('already logged in');
    }

    $scope.creditials = {};

    $scope.login = function () {
      LoginService.login($scope.creditials)
        .success(function (ret) {
          var email,
              password,
              token;

          email = $scope.creditials.email;
          password = $scope.creditials.password;
          token = utf8_to_b64(email + ":" + password)
          $http.defaults.headers.common.Authorization = 'Basic ' + token;
          $cookies.token = token;
        })
        .error(function (ret) {
          console.log('invalid creditials');
        });
    };

    function utf8_to_b64( str ) {
      return btoa(unescape(encodeURIComponent( str )));
    };

  });
