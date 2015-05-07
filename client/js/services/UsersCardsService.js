
angular.module('stackr')
    .factory('UsersCardsService', ['$http', function ($http) {
        'use strict';

        return {
            getUsersCards: function () {
                return $http({
                    method: "GET",
                    url: "api/users_cards"
                });
            },
            getUsersCard: function (pUsers CardId) {
                return $http({
                    method: "GET",
                    url: "api/users_cards/" + pUsersCardId
                });
            },
            createUsersCard: function (pUsers Card) {
                return $http({
                    method: "POST",
                    url: "api/users_cards",
                    data: pUsersCard
                });
            },
            updateUsersCard: function (pUsers Card) {
                return $http({
                    method: "POST",
                    url: "api/users_cards",
                    data: pUsersCard
                });
            },
            deleteUsersCard: function (pUsers CardId) {
                return $http({
                    method: "DELETE",
                    url: "api/users_cards/" + pUsersCardId
                });
            }
        };
    }]);
