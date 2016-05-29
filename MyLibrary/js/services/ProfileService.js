'use strict';
// Service for Profiles
libraryApp.factory('ProfileService', ['$routeParams', '$http', function($routeParams, $http) {
	var profileService = {};
	profileService.data = {};
	profileService.data.allUsers = null;
	profileService.data.currentUser = null;
	profileService.data.bookDetails = null;

	profileService.reset = function() {
		profileService.data.allUsers = null;
		profileService.data.currentUser = null;
		profileService.data.bookDetails = null;
    }

	profileService.getUsers = function() {
		$http.get('static/Users.json')
			.success(function(data) {
				profileService.data.allUsers = data.users
			}).error(function(data) {
				console.log("Unable to fetch users");
				profileService.reset();
			});
	}

	profileService.getCurrentUser = function() {
		if ($routeParams.user != null) {
			for (var i = 0; i < profileService.data.allUsers.length; i++) {
				var user = profileService.data.allUsers[i]
				if (user.username == $routeParams.user) {
					profileService.data.currentUser = user
				}
			}
		}
	}

	profileService.getBookDetails = function() {
		if (profileService.data.currentUser != null) {
			$http.get('static/Books.json')
				.success(function(data) {
					var allBooks = data.books
					var userBooks = profileService.data.currentUser.books
					var userBookDetails = []
					for (var i = 0; i < allBooks.length; i++) {
						for (var j = 0; j < userBooks.length; j++) {
							if (allBooks[i].id == userBooks[j].id) {
								userBookDetails.push(allBooks[i])
							}
						}
					}
					profileService.data.bookDetails = userBookDetails
				}).error(function(data) {
					console.log("Unable to fetch books");
					profileService.reset();
				});
		}
	}

	return profileService;
}]);