angular.module("Hackaton",[])
.controller("HomeController",function($scope){

 $scope.hola="hola mundo";
  
  $scope.goToCatalogs=function(){
    window.location="/catalogos.html";
  }

}).controller("CatalogController",function($scope){


  $scope.goToCatalogs=function(){
    window.location="/catalogos.html";
  }

})