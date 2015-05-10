'use strict';

angular.module('stackrApp')
  .controller('QuizController', function ($scope, StacksService, CardsService, $stateParams) {

    var stackId = $stateParams.id;
    var currentCardIndex = 0;
    $scope.cards = [];

    StacksService.getStack(stackId)
      .success(function (ret) {

      });

    CardsService.getCards(stackId)
      .success(function (ret) {
          $scope.cards = ret;

          $scope.cards.sort(function(a, b) {
            return a.correct - b.correct;
          });

          $scope.card = $scope.cards[currentCardIndex];
      });

    $scope.nextCard = function () {
      currentCardIndex = (currentCardIndex + 1) % $scope.cards.length;
      $scope.card = $scope.cards[currentCardIndex];
    };

    $scope.markAsCorrect = function () {
      CardsService.markAsCorrect($scope.card.id)
        .success(function() {
          $scope.nextCard();
        });
    };

  });
