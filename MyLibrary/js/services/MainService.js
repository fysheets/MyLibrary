'use strict';
// Service for Profiles
libraryApp.factory('MainService', ['$routeParams', '$http', function($routeParams, $http) {
	var mainService = {};
	mainService.data = {};
	mainService.data.showProfileLink = true
	mainService.data.allUsers = null
	mainService.data.allBooks = null
	mainService.data.currentUser = $routeParams.user != null && $routeParams.user != undefined ? $routeParams.user : null

	mainService.reset = function() {
		mainService.data.allUsers = null;
		mainService.data.currentUser = $routeParams.user != null && $routeParams.user != undefined ? $routeParams.user : null;
		mainService.data.bookDetails = null;
    }

	mainService.setCurrentUser = function(userName) {
		mainService.data.currentUser = userName
	}

	mainService.getUsers = function() {
		if (mainService.data.allUsers == null){
			$http.get('static/Users.json')
				.success(function(data) {
					mainService.data.allUsers = data.users
				}).error(function(data) {
					console.log("Unable to fetch users");
					mainService.reset();
				});
		}
	}

	mainService.getBooks = function() {
		if (mainService.data.allBooks == null) {
			$http.get('static/Books.json')
				.success(function(data) {
					mainService.data.allBooks = data.books
				}).error(function(data) {
					console.log("Unable to fetch users");
					mainService.reset();
				});
		}
	}

	return mainService;
}]);