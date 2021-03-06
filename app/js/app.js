var blahgApp = angular.module('blahgApp', [
  'ui.router',
  'homeControllerModule',
  'postsControllerModule'
]);

blahgApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html'
  })
  .state('posts', {
    url: '/posts',
    templateUrl: 'app/views/posts.html'
  })
  .state('new', {
    url: '/new',
    templateUrl: 'app/views/new.html'
  })
  .state('show', {
    url: '/posts/:id',
    templateUrl: 'app/views/show.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'app/views/about.html'
  });
  
  $urlRouterProvider.otherwise('/');
});