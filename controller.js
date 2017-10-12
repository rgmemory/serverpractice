angular.module('app').controller('controller', function($scope, service){
  $scope.test = "this is a test"

  $scope.sTest = service.test;

  $scope.getData = function(){
    $scope.users = service.getData();
  };

  $scope.getCards = function(){
    service.getCards().then(function(response){
      $scope.cards = response.data.cards;
    })
  }

  $scope.getNumbers = function(){
    service.getNumbers().then(function(response){
      $scope.numbers = response;
    })
  }






})
