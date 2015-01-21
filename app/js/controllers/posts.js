var postsControllerModule = angular.module('postsControllerModule', []);

// postsControllerModule('postsController', ['$scope', '$http', function($scope, $http) {
//   $scope.name = 'posts controller awelrkja;rlekwjr;awerjwakl;jyaya';
// }]);

postsControllerModule.controller('newPostController', ['$scope', '$http', function($scope, $http) {
  $scope.newPost = {"title": '', "content": '', "tag_ids": []};
  
  $http.get('http://localhost:3000/tags').success(function(data) {
    $scope.tags = data;
  });
  
}]);



// postsControllerModule.controller('postController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
//   $scope.postName = "this is the post/show view";
//   $scope.id = $stateParams.id;
// }]);

