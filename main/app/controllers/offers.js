'use strict';

/* Offers Controllers */
define(['app','angular'], function (app,angular) {
	app.controller('OffersController',['$scope', '$http', '$route', '$routeParams', '$location', function($scope, $http, $route, $routeParams, $location) {
		console.info("Offers");
	}]);
	return app;
});