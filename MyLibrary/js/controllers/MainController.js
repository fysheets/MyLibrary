'use strict';
// Controller
libraryApp.controller('MainController', ['$scope', '$routeParams', 'MainService', '$timeout', function($scope, $routeParams, MainService, $timeout) {
	$scope.service = MainService.data;
  	$scope.data = {}

	$scope.init = function() {
		$scope.showProfileLink()
	}

	$scope.hideProfileLink = function() {
		MainService.showProfileLink()
	}

}]);
