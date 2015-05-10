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
  .run(function (LoginService) {

    LoginService.setup();
    
  });
