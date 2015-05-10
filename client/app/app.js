'use strict';

angular.module('stackrApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'angular-circles'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    // $locationProvider.html5Mode(true);
  })
  .run(function (LoginService, $rootScope, $state) {

    LoginService.setup();

    $rootScope.navigateToEditStack = function (pStackId) {
      $state.go('stack', {id: pStackId});
    };

    $rootScope.navigateToQuizStack = function (pStackId) {
      $state.go('quiz', {id: pStackId});
    };

  });
