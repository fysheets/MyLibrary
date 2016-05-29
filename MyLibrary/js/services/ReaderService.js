'use strict';
// Service for Profiles
libraryApp.factory('ReaderService', ['$routeParams', '$http', function($routeParams, $http) {
	var readerService = {};
	readerService.data = {};
	readerService.data.allUsers = null;
	readerService.data.currentUser = $routeParams.user

	readerService.reset = function() {
		readerService.data.allUsers = null;
    }

	readerService.getUsers = function() {
		$http.get('static/Users.json')
			.success(function(data) {
				readerService.data.allUsers = data.users
				console.log(readerService.data.allUsers)
			}).error(function(data) {
				console.log("Unable to fetch users");
				readerService.reset();
			});
	}

	return readerService;
}]);