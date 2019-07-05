angular.module("Hackaton",[])
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "index.html"
    })
    .when("/catalogos", {
      templateUrl : "catalogos.html"
    })
    .when("/green", {
      templateUrl : "green.htm"
    })
    .when("/blue", {
      templateUrl : "blue.htm"
    });
  })
.controller("HomeController",function(){



})