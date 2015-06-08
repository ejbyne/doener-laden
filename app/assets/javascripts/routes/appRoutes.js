angular.module('appRoutes', ['templates', 'ngRoute'])

.config(function($routeProvider, $locationProvider) {

  $routeProvider

  .when('/menu_items', {
    templateUrl:  'menu_items.html',
    controller:   'menuItemsController',
    controllerAs: 'menu'
  })

  .when('/', {
    templateUrl: 'index.html',
    redirectTo: function(current, path, search){
      if(search.goto){
        return '/' + search.goto
      }
      else{
        return '/'
      }
    }
  })

  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);

});
