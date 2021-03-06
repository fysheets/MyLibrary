'use strict';
// app level module
var libraryApp = angular.module('myLibrary', ['ngRoute']);
libraryApp.config(function($routeProvider) {
		$routeProvider
		.when('/profile/:user?', {templateUrl: "partials/Profile.html", controller: "ProfileController"})
		.when('/readers/:user?', {templateUrl: "partials/Readers.html", controller:"ReaderController"})
		.when('/books', {templateUrl: "partials/Books.html", controller:"BookController"})
		.otherwise({redirectTo: '/books'});
	});