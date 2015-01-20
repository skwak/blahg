var homeControllerModule = angular.module('homeControllerModule', []);

homeControllerModule.controller('homeController', ['$scope', '$http', function($scope, $http) {
  $scope.hello = "Hi";
  
  $scope.posts = [
{
  "content": "tech tech tech tech tech tech wired geekwire techcrunch gizmodo boingboing nonstop all the time you can't stop it",
  "date": "2015-01-07T00:00:00.000Z",
  "id": "123abc",
  "tag_ids": ["1a", "2b"],
  "title": "so much tech"
},
{
  "content": "art is weird art is weird art is weird lalalalalalla",
  "date": "2015-01-07T00:00:00.000Z",
  "id": "woEvm3",
  "tag_ids": [],
  "title": "art is weird"
},
{
  "content": "pizza mushroom cake on a hotdog with banana spread over an apple pretzel almond burrito with a marmalade hummus stew on the side",
  "date": "2015-01-07T00:00:00.000Z",
  "id": "bo2jwi",
  "tag_ids": ["2b", "doop5"],
  "title": "food"
}
]

$scope.tags =
[ 
{ "id": "1a", "name": "tech" },
{ "id": "2b", "name": "art" },
{ "id": "doop5", "name": "etc" }
]

$scope.getTagName = function(id) {
  var ret = "";
  // loops through all of the tags in $scope.tags
  for (i = 0; i < $scope.tags.length; i++){
    // checks to see if the param we passed is equal to the tag id
    if(id == $scope.tags[i].id) {
      ret = $scope.tags[i].name
    }
  }
  return ret;
}

$scope.newPost = {"title": '', "content": '', "tag_ids": []}

$scope.submitNewPost = function(){
  var postToPush = {};
  postToPush.title = $scope.newPost.title;
  postToPush.content = $scope.newPost.content;
  postToPush.tag_ids = $scope.newPost.tag_ids;
  $scope.posts.push(postToPush);
}

$scope.toggleId = function(id) {
  var i = $scope.newPost.tag_ids.indexOf(id);
  
  if(i == -1) {
    $scope.newPost.tag_ids.push(id);
  } else {
    $scope.newPost.tag_ids.splice(i, 1);
  }
}

$scope.tagArray = [];

$scope.addTag = function(id) {
  var i = $scope.tagArray.indexOf(id);
  if(i == -1) {
    $scope.tagArray.push(id);
  } else {
    $scope.tagArray.splice(i, 1);
  }
}
}]);

homeControllerModule.filter('selectedTags', function() {
  return function(posts, tagArray) {
    return posts.filter(function(post) {
      for (var i in posts) {
        if(tagArray.length == 0) {
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
