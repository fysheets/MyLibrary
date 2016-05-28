'use strict';
// Service for Profiles
angular.module('ProfileService')

.factory('ProfileService', function($http) {
	var profileService = {};
	var profileService.user = null;

	return profileService;
}).run(function (ProfileService){})