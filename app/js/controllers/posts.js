var postsControllerModule = angular.module('postsControllerModule', []);

// postsControllerModule('postsController', ['$scope', '$http', function($scope, $http) {
//   $scope.name = 'posts controller awelrkja;rlekwjr;awerjwakl;jyaya';
// }]);

postsControllerModule.controller('newPostsController', ['$scope', '$http', function() {
  $scope.newName = 'new controller';
  // $scope.name = 'posts controller awelrkja;rlekwjr;awerjwakl;jyaya';
  $scope.newPost = {"title": '', "content": '', "tag_ids": []};
}]);



// postsControllerModule.controller('postController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
//   $scope.postName = "this is the post/show view";
//   $scope.id = $stateParams.id;
// }]);
