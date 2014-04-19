'use strict';

angular.module('stoogeBloggerzApp')
  .controller('BlogCtrl', function ($scope, $location, Blog, Authors) {
  	$scope.blogPosts = Blog.getPosts();
  	$scope.authors = Authors.getAuthors();
  	$scope.search = "";
  	$scope.selectedIndex = 0;
  	$scope.searchByAuthor = function(theAuthor){
  		$scope.search = theAuthor;
  	};
  	$scope.navigationClick = function(clickEvent, $index, theAuthor){
  		$scope.event = clickEvent;
  		$scope.selectedIndex = $index;
  		$scope.searchByAuthor(theAuthor);
  	};
  });
