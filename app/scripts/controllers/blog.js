'use strict';

angular.module('stoogeBloggerzApp')
  .controller('BlogCtrl', function ($scope, Blog, Authors) {
  	$scope.blogPosts = Blog.getPosts();
  	$scope.authors = Authors.getAuthors();
  	$scope.search = "";
  	$scope.selectedIndex = 0;
  	$scope.searchByAuthor = function(theAuthor){
  		if(theAuthor === "All"){
  			$scope.search = "";
  		} else {
  			$scope.search = theAuthor;
  		}
  	};
  	$scope.navigationClick = function($index, theAuthor){
  		$scope.selectedIndex = $index;
  		$scope.searchByAuthor(theAuthor);
  	};
  });
