'use strict';
// app level module
angular.module('myLibrary', [
	'ProfileService',
	'ProfileController'
	]).config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/myProfile', controller: 'ProfileController'};
		$routeProvider.otherwise({redirectTo: '/myProfile'});
	}]);