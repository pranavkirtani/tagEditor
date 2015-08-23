var myAppModule = angular.module('myApp', ['ngRoute']).run(
function($rootScope) {
     $rootScope.statuses={
            OPEN:'Open',
            NEW:'New',
            ASSIGNED:'Assigned',
            ClOSED:'Closed'

        }
      $rootScope.areas=['IT','Non-Technical','BPO'];

             
}

);
myAppModule.config(function($routeProvider, $locationProvider) {
    
   
  $routeProvider
   .when('/', {
    templateUrl: 'views/list.html',
    controller: 'tabsController',
    }
    )





});