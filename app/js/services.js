var servicesModule = angular.modular('servicesModule', []);

servicesModule.factory('apiService', [$http, function($http) {
  var url = 'http://localhost:3000';
  
  return {
    getPosts: function() {
      return $http.get('http://localhost:3000/posts');
    }
  };
}]);