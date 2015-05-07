angular.module('stackrApp')
    .factory('StacksService', ['$http', function ($http) {
        'use strict';

        return {
            getStacks: function () {
                return $http({
                    method: "GET",
                    url: "api/stacks"
                });
            },
            getStack: function (pStackId) {
                return $http({
                    method: "GET",
                    url: "api/stacks/" + pStackId
                });
            },
            createStack: function (pStack) {
                return $http({
                    method: "POST",
                    url: "api/stacks",
                    data: pStack
                });
            },
            updateStack: function (pStack) {
                return $http({
                    method: "POST",
                    url: "api/stacks",
                    data: pStack
                });
            },
            deleteStack: function (pStackId) {
                return $http({
                    method: "DELETE",
                    url: "api/stacks/" + pStackId
                });
            }
        };
    }]);
