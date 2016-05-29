'use strict';
// Controller
libraryApp.controller('ProfileController', ['$scope', '$routeParams', 'ProfileService', '$timeout', function($scope, $routeParams, ProfileService, $timeout) {
	$scope.service = ProfileService.data;
  	$scope.data = {}

	$scope.init = function() {
		if ($routeParams.user != null) {

			$scope.getCurrentUser()
		} else {
			// need to prompt for username
			console.log("No username given")
		}
		
	}

	$scope.getCurrentUser = function() {
		ProfileService.getUsers()
		$timeout(function() { 
			if (ProfileService.data.allUsers != null) {
				ProfileService.getCurrentUser()
				$timeout(function() {
					if(ProfileService.data.currentUser != null) {
						console.log("Current user found")
					}
					else {
						console.log("Error finding user")
					}
				}, 1000)
			}
		}, 1000)
		
	}

}]);
