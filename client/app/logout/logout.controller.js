'use strict';

angular.module('stackrApp')
  .controller('LogoutController', function ($state, LoginService) {

    LoginService.logout();
    $state.go('login');

  });
