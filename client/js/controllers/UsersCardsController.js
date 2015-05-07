
angular.module('stackr')
    .controller('UsersCardsController', [
        '$scope',
        'UsersCardsService',
        function (
        $scope,
        UsersCardsService
        ) {
            'use strict';

            $scope.users_card = {};

            UsersCardsService.getUsers Cards()
                .success(function (pData) {
                    $scope.users_cards = pData;
                });

            /*
            Users CardsService.getUsers Card()
                .success(function (pData) {
                    // Not used in generated templates
                    angular.noop();
                });
            */

            $scope.createUsers Card = function () {
                UsersCardsService.createUsers Card($scope.users_card)
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.deleteUsers Card = function (pUsersCard) {
                var yes = confirm("Are you sure you want to delete this users_card?");
                if (!yes) {
                    return;
                }

                UsersCardsService.deleteUsersCard(pUsersCard.id)
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.updateUsersCard = function (pUsersCard) {
                UsersCardsService.updateUsers Card(pUsersCard)
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.edit = function (pUsersCard) {
                pUsersCard.isEditMode = true;
            };
        }]);
