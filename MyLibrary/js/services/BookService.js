'use strict';
// Service for Profiles
libraryApp.factory('BookService', ['$routeParams', '$http', function($routeParams, $http) {
	var bookService = {};
	bookService.data = {};
	bookService.data.allBooks = null;
	bookService.data.currentBook = $routeParams.book

	bookService.reset = function() {
		bookService.data.allBooks = null;
    }

	bookService.getBooks = function() {
		$http.get('static/Books.json')
			.success(function(data) {
				bookService.data.allBooks = data.books
				console.log(bookService.data.allBooks)
			}).error(function(data) {
				console.log("Unable to fetch users");
				bookService.reset();
			});
	}

	return bookService;
}]);