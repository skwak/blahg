var homeControllerModule = angular.module('homeControllerModule', []);

homeControllerModule.controller('homeController', ['$scope', '$http', function($scope, $http) {
  $scope.hello = "Hi";
  
$http.get('http://localhost:3000/posts').success(function(data) {
  $scope.posts = data;
});


$http.get('http://localhost:3000/tags').success(function(data) {
  $scope.tags = data;
});

// $scope.tags =
// [ 
// { "id": "1a", "name": "tech" },
// { "id": "2b", "name": "art" },
// { "id": "doop5", "name": "etc" }
// ];

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

$scope.newPost = {"title": '', "content": '', "tag_ids": []};

$scope.submitNewPost = function(){
  $http.post('http://localhost:3000/posts', 
    {
      post: {
        title: $scope.newPost.title,
        content: $scope.newPost.content,
        tag: $scope.newPost.tag
        // eventually will want to add tags and dates
      }
    }
  );
  // var postToPush = {};
  // postToPush.title = $scope.newPost.title;
  // postToPush.content = $scope.newPost.content;
  // postToPush.tag_ids = $scope.newPost.tag_ids;
  // $scope.posts.push(postToPush);
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
