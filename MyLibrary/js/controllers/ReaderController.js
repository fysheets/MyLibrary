'use strict';
// Controller
libraryApp.controller('ReaderController', ['$scope', '$routeParams', 'ReaderService', '$timeout', 'MainService', function($scope, $routeParams, ReaderService, $timeout, MainService) {
	$scope.main = MainService.data;
	$scope.service = ReaderService.data;
  	$scope.data = {}

  	$scope.init = function() {
  		MainService.getUsers()
  	}

}]);
