
angular.module('stackr')
    .controller('UsersController', [
        '$scope',
        'UsersService',
        function (
        $scope,
        UsersService
        ) {
            'use strict';

            $scope.user = {};

            UsersService.getUsers()
                .success(function (pData) {
                    $scope.users = pData;
                });

            /*
            UsersService.getUser()
                .success(function (pData) {
                    // Not used in generated templates
                    angular.noop();
                });
            */

            $scope.createUser = function () {
                UsersService.createUser($scope.user)
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.deleteUser = function (pUser) {
                var yes = confirm("Are you sure you want to delete this user?");
                if (!yes) {
                    return;
                }

                UsersService.deleteUser(pUser.id)
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.updateUser = function (pUser) {
                UsersService.updateUser(pUser)
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.edit = function (pUser) {
                pUser.isEditMode = true;
            };
        }]);
