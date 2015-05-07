
angular.module('stackr')
    .factory('UsersService', ['$http', function ($http) {
        'use strict';

        return {
            getUsers: function () {
                return $http({
                    method: "GET",
                    url: "api/users"
                });
            },
            getUser: function (pUserId) {
                return $http({
                    method: "GET",
                    url: "api/users/" + pUserId
                });
            },
            createUser: function (pUser) {
                return $http({
                    method: "POST",
                    url: "api/users",
                    data: pUser
                });
            },
            updateUser: function (pUser) {
                return $http({
                    method: "POST",
                    url: "api/users",
                    data: pUser
                });
            },
            deleteUser: function (pUserId) {
                return $http({
                    method: "DELETE",
                    url: "api/users/" + pUserId
                });
            }
        };
    }]);
