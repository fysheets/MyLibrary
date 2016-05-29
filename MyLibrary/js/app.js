'use strict';
// app level module
var libraryApp = angular.module('myLibrary', ['ngRoute']);
libraryApp.config(function($routeProvider) {
		$routeProvider
		//.when('/'), {templateUrl: "partials/Home.html", controller:"MainController"})
		.when('/profile/:user?', {templateUrl: "partials/Profile.html", controller: "ProfileController"})
		.when('/readers/:user?', {templateUrl: "partials/Readers.html", controller:"ReaderController"})
		//.when('/books/:book?', {templateUrl: "partials/Books.html", controller:"BooksController"})
		.otherwise({redirectTo: '/books'});
	});