
angular.module('stackr')
    .factory('CardsService', ['$http', function ($http) {
        'use strict';

        return {
            getCards: function () {
                return $http({
                    method: "GET",
                    url: "api/cards"
                });
            },
            getCard: function (pCardId) {
                return $http({
                    method: "GET",
                    url: "api/cards/" + pCardId
                });
            },
            createCard: function (pCard) {
                return $http({
                    method: "POST",
                    url: "api/cards",
                    data: pCard
                });
            },
            updateCard: function (pCard) {
                return $http({
                    method: "POST",
                    url: "api/cards",
                    data: pCard
                });
            },
            deleteCard: function (pCardId) {
                return $http({
                    method: "DELETE",
                    url: "api/cards/" + pCardId
                });
            }
        };
    }]);
