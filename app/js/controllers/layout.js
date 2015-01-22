var homeControllerModule = angular.module('homeControllerModule', []);

homeControllerModule.controller('homeController', ['$scope', '$http', function($scope, $http, apiService) {
  $scope.hello = "Hi";

$http.get('http://localhost:3000/posts').success(function(data) {
  $scope.posts = data;
});

$http.get('http://localhost:3000/tags').success(function(data) {
  $scope.tags = data;
});


// http://stackoverflow.com/questions/14250642/angularjs-how-to-remove-an-item-from-scope

// $scope.delete(post) = function(id) {
//   $http.delete('http://localhost:3000/posts/:id');
// };


$scope.getTagName = function(id) {
  var ret = "";
  // loops through all of the tags in $scope.tags
  for (i = 0; i < $scope.tags.length; i++){
    // checks to see if the param we passed is equal to the tag id
    if(id == $scope.tags[i].id) {
      ret = $scope.tags[i].name;
    }
  }
  return ret;
};


$scope.addTag = function(id) {
  var i = $scope.tagArray.indexOf(id);
  if(i == -1) {
    $scope.tagArray.push(id);
  } else {
    $scope.tagArray.splice(i, 1);
  }
};
}]);

$scope.toggleId = function(id) {
  var i = $scope.newPost.tag_ids.indexOf(id);
  
  if(i == -1) {
    $scope.newPost.tag_ids.push(id);
  } else {
    $scope.newPost.tag_ids.splice(i, 1);
  }
};

$scope.tagArray = [];

homeControllerModule.filter('selectedTags', function() {
  return function(posts, tagArray) {
    return posts.filter(function(post) {
      for (var i in posts) {
        if(tagArray.length === 0) {
          return true;
        } else {
          if(tagArray.indexOf(post.tag_ids[i]) != -1){
            return true;
          }
        }
      }
      return false;
    })
  }
})
