'use strict';

angular.module('stackrApp')
  .controller('StacksController', function ($scope, StacksService) {

    StacksService.getStacks()
      .then(function(ret) {
        $scope.stacks = ret.data;
      });

  });
