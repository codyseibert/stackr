angular.module('stackr', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/users', {
                controller: 'UsersController',
                templateUrl: 'templates/UsersTemplate.tpl'
            })
            .when('/stacks', {
                controller: 'StacksController',
                templateUrl: 'templates/StacksTemplate.tpl'
            })
            .when('/cards', {
                controller: 'CardsController',
                templateUrl: 'templates/CardsTemplate.tpl'
            })
            .when('/users_cards', {
                controller: 'UsersCardsController',
                templateUrl: 'templates/UsersCardsTemplate.tpl'
            })
            .otherwise({
                redirectTo: '/'
            });

    }])
    .run([function () {
        'use strict';

    }]);
