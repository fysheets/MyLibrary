'use strict';
// Service for Profiles
libraryApp.factory('ReaderService', ['$routeParams', '$http', 'MainService', function($routeParams, $http, MainService) {
	var readerService = {};
	readerService.data = {};
	readerService.data.defaultImage = "static/images/default.png";

	return readerService;
}]);