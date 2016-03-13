'use strict';

/* Controllers */
define(['app','angular'], function (app,angular) {
	app.controller('MainController',['$scope', '$http', '$route', '$routeParams', '$location', function($scope, $http, $route, $routeParams, $location) {
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;
	}]);
	return app;
});