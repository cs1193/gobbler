'use strict';

/* Home Controllers */
define(['app','angular'], function (app,angular) {
	app.controller('CartController',['$scope', '$http', '$route', '$routeParams', '$location', '$timeout', 'ngProgress', function($scope, $http, $route, $routeParams, $location, $timeout, ngProgress) {
		ngProgress.start();
		console.info("Cart");
		
		ngProgress.complete();
	}]);
	return app;
});