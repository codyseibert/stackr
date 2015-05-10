'use strict';

angular.module('stackrApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    // $locationProvider.html5Mode(true);
  })
  .run(function (LoginService, $rootScope, $state) {

    LoginService.setup();

    $rootScope.navigateToStack = function (pStackId) {
      $state.go('stack', {id: pStackId});
    };

  });
