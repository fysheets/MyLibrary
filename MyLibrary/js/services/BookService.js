'use strict';
// Service for Profiles
libraryApp.factory('BookService', ['$routeParams', '$http', 'MainService', function($routeParams, $http, MainService) {
	var bookService = {};
	bookService.data = {};
	bookService.data.defaultImage = "static/images/default.png";

	return bookService;
}]);