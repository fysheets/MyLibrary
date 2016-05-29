'use strict';
// Controller
libraryApp.controller('ProfileController', ['$scope', '$routeParams', 'ProfileService', '$timeout', 'MainService', function($scope, $routeParams, ProfileService, $timeout, MainService) {
	$scope.main = MainService.data;
	$scope.service = ProfileService.data;
  	$scope.data = {}

	$scope.init = function() {
		if ($routeParams.user != null) {
			MainService.getUsers()
			$timeout(function() {
				$scope.getCurrentUser()
				$timeout(function() {
					$scope.getBookDetails()
				}, 100)
			}, 100)
		} else {
			// need to prompt for username
			console.log("No username given")
		}
		
	}

	$scope.getCurrentUser = function() {
		if (MainService.data.allUsers != null) {
			ProfileService.getCurrentUser()
			$timeout(function() {
				if(ProfileService.data.currentUser != null) {
					console.log("Current user found")
				}
				else {
					console.log("Error finding user")
				}
			}, 100)
		}
	}

	$scope.getBookDetails = function() {
		ProfileService.getBookDetails()
		$timeout(function() { 
			if (ProfileService.data.bookDetails == null) {
				console.log("Error finding books")
			}
		}, 100)
		
	}

}]);
