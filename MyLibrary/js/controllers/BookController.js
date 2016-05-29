'use strict';
// Controller
libraryApp.controller('BookController', ['$scope', '$routeParams', 'BookService', '$timeout', 'MainService', function($scope, $routeParams, BookService, $timeout, MainService) {
	$scope.main = MainService.data
	$scope.service = BookService.data;
  	$scope.data = {}

  	$scope.init = function() {
  		MainService.getBooks()
  	}

}]);
