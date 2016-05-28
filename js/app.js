'use strict';
// app level module
var libraryApp = angular.module('myLibrary', ['ngRoute']);
libraryApp.config(function($routeProvider) {
		$routeProvider
		.when('/myProfile', {templateUrl: "partials/Profile.html", controller: "ProfileController"})
		.otherwise({redirectTo: '/myProfile'});
	});