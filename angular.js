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

$scope.goToSelect=function(){
  window.location="/select.html";
}
$scope.goToResumen=function(){
  window.location="/resumen.html";
}


}).controller("SelectController",function($scope,$http){

var regalos = [];
class regalo  {
  nombre="";
  edad=0;
  sexo="";
  categoria="";
  productos=[];
}

$scope.addClient=function addClient(){
  regalos.push(new regalo);

  $scope.regalos=regalos;

}
$scope.addClient();


$scope.goToResumen=function(){
    window.location="/resumen.html";
}

$scope.addOffers=function(index){
  var xas=3;
  var xes=12;
  if(index==1){
    xas=15;
    xes =25;
  }

  if(index==2){
    xas=28;
    xes =38;
  }
  $scope.regalos[index].productos= $scope.products.slice(xas,xes);
}

$http.get("products.json").then(function(data){
  data.data.forEach(element => {
    element.imagenx="https://s3.amazonaws.com/catalogodigitalbelcorp/PE/201818/"+ element.codigo_marca+"/productos/" + element.imagen; 
  });
  $scope.products=data.data;

 
});


}).controller("ResumenController",function($scope){

  $scope.hola="hola mundo";
   
   $scope.goToCatalogs=function(){
     window.location="/catalogos.html";
   }
 
 }).controller("CatalogController",function($scope){
 
 
   $scope.goToCatalogConsult=function(){
     window.location="/catalogsConsult.html";
   }
 
 }).controller("CatalogSeller",function($scope,$http){
 
   $scope.goToSelection=function(){
     window.location="/selection.html";
   }

   $http.get("products.json").then(function(data){
    data.data.forEach(element => {
      element.imagenx="https://s3.amazonaws.com/catalogodigitalbelcorp/PE/201818/"+ element.codigo_marca+"/productos/" + element.imagen; 
    });
    $scope.products=data.data.slice(0,3);
  
   
  });
  
   
 
 })