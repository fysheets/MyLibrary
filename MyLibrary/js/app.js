'use strict';
// app level module
var libraryApp = angular.module('myLibrary', ['ngRoute']);
libraryApp.config(function($routeProvider) {
		$routeProvider
		//.when('/'), {templateUrl: "partials/Home.html", controller:"MainController"})
		.when('/myProfile/:user?', {templateUrl: "partials/Profile.html", controller: "ProfileController"})
		//.when('/readers'), {templateUrl: "partials/Readers.html", controller:"ReadersController"})
		//.when('/books'), {templateUrl: "partials/Books.html", controller:"BooksController"})
		.otherwise({redirectTo: '/myProfile'});
	});