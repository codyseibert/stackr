'use strict';

angular.module('stackrApp')
  .controller('StacksController', function ($scope, StacksService) {

    StacksService.getStacks()
      .then(function(data) {
          console.log(data);
      });

    var stack = {
        user_id: 1,
        title: 'testing',
        description: 'description'
    };
    StacksService.createStack(stack);

  });
