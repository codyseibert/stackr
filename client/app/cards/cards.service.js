angular.module('stackrApp')
    .factory('CardsService', ['$http', function ($http) {
        'use strict';

        return {
            getCards: function (pStackId) {
                return $http({
                    method: "GET",
                    url: "api/stacks/" + pStackId + "/cards"
                });
            },
            getCard: function (pCardId) {
                return $http({
                    method: "GET",
                    url: "api/cards/" + pCardId
                });
            },
            markAsCorrect: function (pCardId) {
                return $http({
                    method: "GET",
                    url: "api/cards/" + pCardId + "/correct"
                });
            },
            createCard: function (pStackId, pCard) {
                return $http({
                    method: "POST",
                    url: "api/stacks/" + pStackId + "/cards",
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
