'use strict';

angular.module('stackrApp')
  .controller('StacksController', function ($scope, StacksService) {

    $scope.stack = {};
    $scope.stacks = [];

    $scope.createStack = function () {
      StacksService.createStack($scope.stack)
        .then(function (ret) {
          console.log(ret);
        });
    };


    StacksService.getStacks()
      .then(function(ret) {
        $scope.stacks = ret.data;
      });

  });
