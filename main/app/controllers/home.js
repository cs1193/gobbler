'use strict';

/* Home Controllers */
define(['app','angular'], function (app,angular) {
	app.controller('HomeController',['$scope', '$http', '$route', '$routeParams', '$location', '$timeout', 'ngProgress', function($scope, $http, $route, $routeParams, $location, $timeout, ngProgress) {
		ngProgress.start();
		console.info("Home");
		$scope.images = [];

		$timeout(function() {
			$scope.images = [
				{ url: "/assets/main/slides/1.png" },
				{ url: "http://slidesjs.com/img/example-slide-350-2.jpg" },
				{ url: "http://slidesjs.com/img/example-slide-350-3.jpg" },
				{ url: "http://slidesjs.com/img/example-slide-350-4.jpg" }
			]
		}, 2000);
		ngProgress.complete();
	}]);
	return app;
});