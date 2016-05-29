'use strict';
// Controller
libraryApp.controller('BookController', ['$scope', '$routeParams', 'BookService', '$timeout', function($scope, $routeParams, BookService, $timeout) {
	$scope.service = BookService.data;
  	$scope.data = {}

	$scope.initBooks = function() {
		console.log("hii")
		$scope.getBooks()
	}

	$scope.getBooks = function() {
		BookService.getBooks()
		$timeout(function() { 
			if(BookService.data.allBooks != null) {
				console.log("Books Found")
				console.log(BookService.data.allBooks)
			}
			else {
				console.log("Error finding books")
			}
		}, 1000)
		
	}

}]);
