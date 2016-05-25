angular.module('robin',['robin.controllers','ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
         .when("/", {
             controller: "MainController",
             templateUrl: "templates/main.html"
         })
  })
