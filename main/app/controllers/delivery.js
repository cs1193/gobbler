'use strict';

/* LiDelivery Controllers */
define(['app','angular','angularMap'], function (app,angular,angularMap) {
	app.controller('DeliveryController',['$scope', '$http', '$route', '$routeParams', '$location', function($scope, $http, $route, $routeParams, $location) {
		console.info("Delivery");
		$scope.map = {
			center: {
				latitude: 45,
				longitude: -73
			},
			zoom: 8
		};

		// $scope.markers = {};
		// $scope.shapes = {};
	}]);
	return app;
});