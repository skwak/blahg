var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller('newPostController', ['$scope', '$http', function($scope, $http) {
    
  $http.get('http://localhost:3000/posts').success(function(data) {
    $scope.posts = data;
  });
  
  $http.get('http://localhost:3000/tags').success(function(data) {
    $scope.tags = data;
  });
  
  $scope.newPost = {"title": '', "content": '', "tag_ids": []};
  
  $scope.submitNewPost = function() {
    $http.post('http://localhost:3000/posts', 
  {
    post: {
      title: $scope.newPost.title,
      content: $scope.newPost.content,
      tag: $scope.newPost.tag,
      // date: $scope.newPost.date
      // eventually will want to add dates
    }
  });

};

  $http.get('http://localhost:3000/tags').success(function(data) {
    $scope.tags = data;
  });
  
}]);  


postsControllerModule.controller('postController', ['$scope', '$http', '$stateParams',
function($scope, $http, $stateParams) {
  $scope.post = {};
  $scope.id = $stateParams.id;
  
  $http.get('http://localhost:3000/posts/' + $scope.id).success(function(data) {
    $scope.post = data;
  });
}]);