'use strict';

angular.module('stackrApp')
  .controller('StackController', function ($scope, StacksService, CardsService, $stateParams) {

    var stackId = $stateParams.id;
    console.log('stack id', stackId);

    StacksService.getStack(stackId)
      .success(function (ret) {
          console.log(ret.data);
      });

    CardsService.getCards(stackId)
      .success(function (ret) {
          console.log(ret.data);
      });

    $scope.deleteStack = function () {
      StacksService.deleteStack(stackId)
        .success(function (ret) {
            console.log(ret.data);
        })
        .error(function (ret) {
          console.log(ret);
        });

    };
  });
