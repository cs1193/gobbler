'use strict';

/* Restaurant Controllers */
define(['app','angular'], function (app,angular) {
	app.controller('RestaurantController',['$scope', '$http', '$route', '$routeParams', '$location', function($scope, $http, $route, $routeParams, $location) {
		console.info("Restaurant");

		$scope.photos = [
			{src: '/assets/main/slides/1.png', desc: 'Image 01'},
			{src: '/assets/main/slides/1.png', desc: 'Image 02'},
			{src: '/assets/main/slides/1.png', desc: 'Image 03'},
			{src: '/assets/main/slides/1.png', desc: 'Image 04'},
			{src: '/assets/main/slides/1.png', desc: 'Image 05'},
			{src: '/assets/main/slides/1.png', desc: 'Image 06'}
		];

		// initial image index
		$scope._Index = 0;

		// if a current image is the same as requested image
		$scope.isActive = function (index) {
			return $scope._Index === index;
		};

		// show prev image
		$scope.showPrev = function () {
			$scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
		};

		// show next image
		$scope.showNext = function () {
			$scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
		};

		// show a certain image
		$scope.showPhoto = function (index) {
			$scope._Index = index;
		};
	}]);
	return app;
});