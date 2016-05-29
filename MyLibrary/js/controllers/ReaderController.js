'use strict';
// Controller
libraryApp.controller('ReaderController', ['$scope', '$routeParams', 'ReaderService', '$timeout', function($scope, $routeParams, ReaderService, $timeout) {
	$scope.service = ReaderService.data;
  	$scope.data = {}

	$scope.initReaders = function() {
		$scope.getUsers()
	}

	$scope.getUsers = function() {
		ReaderService.getUsers()
		$timeout(function() { 
			if(ReaderService.data.allUsers != null) {
				console.log("Users Found")
				console.log(ReaderService.data.allUsers)
			}
			else {
				console.log("Error finding users")
			}
		}, 100)
		
	}

}]);
