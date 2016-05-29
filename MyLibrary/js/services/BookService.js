'use strict';
// Service for Profiles
libraryApp.factory('BookService', ['$routeParams', '$http', 'MainService', function($routeParams, $http, MainService) {
	var bookService = {};
	bookService.data = {};

	return bookService;
}]);