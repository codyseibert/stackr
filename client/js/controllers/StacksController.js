
angular.module('stackr')
    .controller('StacksController', [
        '$scope',
        'StacksService',
        function (
        $scope,
        StacksService
        ) {
            'use strict';

            $scope.stack = {};

            StacksService.getStacks()
                .success(function (pData) {
                    $scope.stacks = pData;
                });

            /*
            StacksService.getStack()
                .success(function (pData) {
                    // Not used in generated templates
                    angular.noop();
                });
            */

            $scope.createStack = function () {
                StacksService.createStack($scope.stack)
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.deleteStack = function (pStack) {
                var yes = confirm("Are you sure you want to delete this stack?");
                if (!yes) {
                    return;
                }

                StacksService.deleteStack(pStack.id)
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.updateStack = function (pStack) {
                StacksService.updateStack(pStack)
                    .success(function (pData) {
                        angular.noop();
                    });
            };

            $scope.edit = function (pStack) {
                pStack.isEditMode = true;
            };
        }]);
