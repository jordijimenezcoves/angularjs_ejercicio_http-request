(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
    $scope.profesores = {};

    $http.get('json/profesores.json').success(function(data){
        // Código cuando es correcta la petición
        $scope.profesores = data.profesores;
    });
  



}]);





})();
