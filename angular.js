angular.module("Hackaton",[])
.controller("HomeController",function($scope){

 $scope.hola="hola mundo";
  
  $scope.goToCatalogs=function(){
    window.location="/catalogos.html";
  }

}).controller("CatalogController",function($scope){


  $scope.goToCatalogConsult=function(){
    window.location="/catalogsConsult.html";
  }

}).controller("CatalogSeller",function($scope){

  $scope.goToSelection=function(){
    window.location="/selection.html";
  }
  

}).controller("SelectionController",function($scope,$http){

$http.get("products.json").then(function(data){
  data.data.forEach(element => {
    element.imagenx="https://s3.amazonaws.com/catalogodigitalbelcorp/PE/201818/"+ element.codigo_marca+"/productos/" + element.imagen; 
  });
  $scope.products=data.data.slice(3,12);
});




})