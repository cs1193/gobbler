'use strict';

/* Menu Controllers */
define(['app','angular'], function (app,angular) {
	app.controller('MenuController',['$scope', '$http', '$route', '$routeParams', '$location', '$timeout', 'ngProgress', function($scope, $http, $route, $routeParams, $location, $timeout, ngProgress) {
		ngProgress.start();

		console.info("Menu");

		console.group($routeParams.level1);
		console.group($routeParams.level2);
		console.group($routeParams.level3);
		console.groupEnd();
		console.groupEnd();
		console.groupEnd();


		$scope.categories = [];

		if($routeParams.level1 == undefined) {

			$scope.featured = true;
			
		} else if($routeParams.level1 == "breads") {

			$scope.featured = false;
			$timeout(function() {
				$scope.categories = [
					{ url: "/menu/juices/burgers", title: "Burgers" },
					{ url: "/menu/juices/sandwiches", title: "Sandwiches" },
					{ url: "/menu/juices/pizza", title: "Pizza" },
					{ url: "/menu/juices/bread", title: "Bread" }				
				]
			}, 2000);
			
		} else if($routeParams.level1 == "juices") {

			$scope.featured = false;
			$timeout(function() {
				$scope.categories = [
					{ url: "/menu/breads/freshjuices", title: "Fresh Juices" },
					{ url: "/menu/breads/faloodasdesserts", title: "Faloodas & Desserts" },
					{ url: "/menu/breads/mocktails", title: "Mocktails" },
					{ url: "/menu/breads/smoothiesseasonaldelights", title: "Smoothies" },
					{ url: "/menu/breads/seasonaldelights", title: "Seasonal Delights" },
					{ url: "/menu/breads/icecreamsfitfoodsoda", title: "Ice Creams" },
					{ url: "/menu/breads/fitfoodssoda", title: "Fit Foods & Soda" },
					{ url: "/menu/breads/milkshakes", title: "Milkshakes" },					
					{ url: "/menu/breads/chocolatefactory", title: "Chocolate Factory" }				
				]
			}, 2000);
			
		} else if($routeParams.level1 == "coffees") {
			
			$scope.featured = false;			
			$timeout(function() {
				$scope.categories = [
					{ url: "/menu/coffees/cappucino", title: "Cappucino" },
					{ url: "/menu/coffees/expresso", title: "Expresso" },
					{ url: "/menu/coffees/icedtea", title: "Iced Tea" }			
				]
			}, 2000);

		} else {
			

			
		}

		ngProgress.complete();
	}]);
	return app;
});