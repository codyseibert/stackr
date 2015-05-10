angular.module('stackrApp')
    .factory('LoginService', function ($http, $cookies) {
        'use strict';

        var setup,
            isLoggedIn;

        isLoggedIn = false;

        setup = function () {
          if ($cookies.token) {
              $http.defaults.headers.common.Authorization = 'Basic ' + $cookies.token;
              isLoggedIn = true;
              console.log('token cookie found', $cookies.token);
          }
        };

        return {
            setup: setup,
            isLoggedIn: function () {
              return isLoggedIn
            },
            login: function (pCreditials) {
                return $http({
                    method: "POST",
                    url: "api/login",
                    data: pCreditials
                })
                  .success(function () {
                      isLoggedIn = true;
                  });
            }
        };
    });
