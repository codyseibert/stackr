'use strict';

angular.module('stackrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('quiz', {
        url: '/stacks/:id/quiz',
        templateUrl: 'app/quiz/quiz.html',
        controller: 'QuizController'
      });
  });
