'use strict';

angular.module('stackrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stacks', {
        url: '/stacks',
        templateUrl: 'app/stacks/stacks.html',
        controller: 'StacksController'
      });
  });
