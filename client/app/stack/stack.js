'use strict';

angular.module('stackrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stack', {
        url: '/stacks/:id',
        templateUrl: 'app/stack/stack.html',
        controller: 'StackController'
      });
  });
