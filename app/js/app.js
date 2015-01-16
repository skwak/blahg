var blahgApp = angular.module('blahgApp', [
  'ui.router',
  'homeControllerModule'
]);

blahgApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html',
  });
  $urlRouterProvider.otherwise('/');
});