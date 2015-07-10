angular.module('metuxLearningStack.controllers', [])  //convention de nommage , //tableau de dépendance du projet
.controller('mainCtrl', ['$scope',function($scope){
   $scope.message="coucou mainCtrl du SPA";
}])
.controller('page1Ctrl', ['$scope', '$location', function($scope, $location){
   $scope.message1="coucou Page1 du SPA";
   $scope.goToPage2 = function(){
      $location.path('/page2');
   }
}])
.controller('page2Ctrl', ['$scope',function($scope){
   $scope.message2="coucou Page2 du SPA";
}]);