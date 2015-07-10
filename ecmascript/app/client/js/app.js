angular.module('metuxLearningStack', ['metuxLearningStack.controllers', 'ngRoute']) //tableau de dépendance du projet
.config(function($routeProvider){
   $routeProvider.
      when('/page1', {
        templateUrl: 'partials/page1.html',
        controller: 'page1Ctrl'
      }).
      when('/page2', {
        templateUrl: 'partials/page2.html',
        controller: 'page2Ctrl'
      }).
      otherwise({
        redirectTo: '/page1'
      });
})


