'use strict';
// Service for Profiles
libraryApp.factory('ProfileService', ['$routeParams', function($routeParams) {
	var profileService = {};
	profileService.allUsers = [];
	profileService.currentUser = null;

	return profileService;
}]);