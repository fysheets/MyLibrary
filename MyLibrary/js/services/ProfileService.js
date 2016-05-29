'use strict';
// Service for Profiles
libraryApp.factory('ProfileService', ['$routeParams', '$http', function($routeParams, $http) {
	var profileService = {};
	profileService.data = {};
	profileService.data.allUsers = null;
	profileService.data.currentUser = null;
console.log($routeParams.user)
	profileService.reset = function() {
		profileService.data.allUsers = null;
		profileService.data.currentUser = null;
    }

	profileService.getUsers = function() {
		console.log("here")
		$http.get('static/Users.json')
			.success(function(data) {
				profileService.data.allUsers = data.users
				for (var i = 0; i < profileService.data.allUsers.length; i++) {
					var user = profileService.data.allUsers[i]
					if (user.username == $routeParams.user) {
						profileService.data.currentUser = user
					}
				}
			}).error(function(data) {
				console.log("Unable to fetch users");
				profileService.reset();
			});
	}

	return profileService;
}]);