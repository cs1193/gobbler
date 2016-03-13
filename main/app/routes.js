define([
	'app'
], function(app) {

	app.run(['$rootScope', '$http' ,'$location',  function ($rootScope,$http,$location) {

	}]);

	app.config(['$routeProvider','$locationProvider','$httpProvider', function($routeProvider,$locationProvider,$httpProvider) {


		$routeProvider.when('/', {
			templateUrl: '/assets/main/app/partials/home.html',
			controller: 'HomeController'
		});

		$routeProvider.when('/menu', {
			templateUrl: '/assets/main/app/partials/menu.html',
			controller: 'MenuController'
		});

		$routeProvider.when('/menu/:level1', {
			templateUrl: '/assets/main/app/partials/menu.html',
			controller: 'MenuController'
		});

		$routeProvider.when('/menu/:level1/:level2', {
			templateUrl: '/assets/main/app/partials/menu.html',
			controller: 'MenuController'
		});

		$routeProvider.when('/menu/:level1/:level2/:level3', {
			templateUrl: '/assets/main/app/partials/menu.html',
			controller: 'MenuController'
		});

		$routeProvider.when('/offers', {
			templateUrl: '/assets/main/app/partials/offers.html',
			controller: 'OffersController'
		});

		$routeProvider.when('/promotions', {
			templateUrl: '/assets/main/app/partials/promotions.html',
			controller: 'PromotionsController'
		});

		$routeProvider.when('/restaurant', {
			templateUrl: '/assets/main/app/partials/restaurant.html',
			controller: 'RestaurantController'
		});

		$routeProvider.when('/delivery', {
			templateUrl: '/assets/main/app/partials/delivery.html',
			controller: 'DeliveryController'
		});

		$routeProvider.when('/cart', {
			templateUrl: '/assets/main/app/partials/cart.html',
			controller: 'CartController'
		});

		$locationProvider.html5Mode(true);

		$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
	}]);

	return app;

});