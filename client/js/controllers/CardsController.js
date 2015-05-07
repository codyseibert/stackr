
angular.module('stackr')
    .controller('CardsController', [
        '$scope',
        'CardsService',
        function (
        $scope,
        CardsService
        ) {
            'use strict';

            $scope.card = {};

            CardsService.getCards()
                .success(function (pData) {
                    $scope.cards = pData;
                });

            /*
            CardsService.getCard()
                .success(function (pData) {
                    // Not used in generated templates
                    angular.noop();
                });
            */

            $scope.createCard = function () {
                CardsService.createCard($scope.card)
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.deleteCard = function (pCard) {
                var yes = confirm("Are you sure you want to delete this card?");
                if (!yes) {
                    return;
                }

                CardsService.deleteCard(pCard.id)
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.updateCard = function (pCard) {
                CardsService.updateCard(pCard)
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.edit = function (pCard) {
                pCard.isEditMode = true;
            };
        }]);
