'use strict';

angular.module('stackrApp')
  .controller('StackController', function ($scope, StacksService, CardsService, $stateParams) {

    var stackId = $stateParams.id;
    console.log('stack id', stackId);
    $scope.card = {};

    StacksService.getStack(stackId)
      .success(function (ret) {
          console.log(ret.data);
      });

    CardsService.getCards(stackId)
      .success(function (ret) {
          $scope.cards = ret;
      });

    $scope.deleteStack = function () {
      var shouldDelete;

      shouldDelete = confirm("Are you sure you want to delete this stack?");
      if (!shouldDelete){
          return;
      }

      StacksService.deleteStack(stackId)
        .success(function (ret) {
            console.log(ret.data);
        })
        .error(function (ret) {
          console.log(ret);
        });
    };

    $scope.createCard = function () {
      var card = {
        front: $scope.card.front,
        back: $scope.card.back
      };

      CardsService.createCard(stackId, card)
        .success(function (ret) {
          card.id = ret.id;
          $scope.cards.push(card);
        });
    };

    $scope.deleteCard = function (pCard) {

      var shouldDelete;

      shouldDelete = confirm("Are you sure you want to delete this card?");
      if (!shouldDelete){
          return;
      }

      CardsService.deleteCard(pCard.id)
        .success(function (ret) {
          $scope.cards.splice($scope.cards.indexOf(pCard), 1);
        });

    };
  });
