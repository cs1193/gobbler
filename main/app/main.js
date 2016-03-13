"use strict";

require.config({
	baseUrl: 'assets/main/app/',
	waitSeconds: 200,
	paths: {
		jquery: 'libraries/jquery/jquery-2.1.0.min',
		angular: 'libraries/angular/angular.min',
		angularResource: 'libraries/angular/angular-resource.min',
		angularRoute: 'libraries/angular/angular-route.min',
		angularSanitize: 'libraries/angular/angular-sanitize.min',
		angularAnimate: 'libraries/angular/angular-animate.min',
		angularCookies: 'libraries/angular/angular-cookies.min',
		angularTouch: 'libraries/angular/angular-touch.min',
		bootstrap: 'libraries/vendor/bootstrap/bootstrap.min',
		slidesjs: 'libraries/vendor/slides/jquery.slides.min',
		ngprogress: 'libraries/vendor/ngprogress/ngProgress.min',
		googlemap: 'https://maps.google.com/maps/api/js?sensor=false',
		angularMap: 'libraries/vendor/angularmap/ng-map.min',
		angularLocalStorage: 'libraries/vendor/angularlocalstorage/angular-local-storage.min'
	},
	shim: {
		'jquery': {'exports' : '$'},
		'angular': {'exports' : 'angular'},
		'angularResource': {deps:['angular']},
		'angularRoute': {deps:['angular']},
		'angularCookies': {deps:['angular']},
		'angularSanitize': {deps:['angular']},
		'angularAnimate': {deps:['angular']},
		'angularTouch': {deps:['angular']},
		'bootstrap': {deps:['jquery']},
		'slidesjs': {deps:['jquery']},
		'ngprogress': {deps:['angular']},
		'angularMap': {deps:['angular','googlemap']},
		'angularLocalStorage': {deps:['angular']}
	},
	priority: [
		"angular"
	],
	urlArgs: 'v=0.1',
	catchError: {
		define: true
	}
});

requirejs.onError = function (err) {
	if (err.requireType === 'timeout') {
		console.warn("[ERROR] " + err);
	} else {
		throw err;
	}
};

require( [
	'../domReady!',
	'jquery',
	'angular',
	'app',
	'bootstrap',
	'directives/directives',
	'directives/slides',
	'services/services',
	'controllers/controllers',
	'controllers/home',
	'controllers/offers',
	'controllers/promotions',
	'controllers/menu',
	'controllers/restaurant',
	'controllers/delivery',
	'controllers/cart',
	'filters/filters',
	'routes'
], function(domReady, $, angular, app, bootstrap) {
	
	angular.element(document).ready(function () {
		angular.bootstrap(document, ['liquidzz']);
	});

	$(function(){
		$('#myCarousel').carousel({
			interval: 0
		})

		$('.carousel .item').each(function(){
			var next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));

			for (var i=0;i<2;i++) {
				next=next.next();
				if (!next.length) {
					next = $(this).siblings(':first');
				}

				next.children(':first-child').clone().appendTo($(this));
			}
		});
		
		
	});
	
	console.clear()
	console.time("[MESSAGE]");
	console.group("%c Tesark Technologies Pvt. Ltd.","color: blue; font-size: 20px;");
	console.group("Address for Communication");
	console.log("#49/60, 3A KG Prasad Apartments,");
	console.log("3rd Main Road, Gandhi Nagar, Adyar");
	console.log("Chennai - 600 020");
	console.groupEnd();
	console.group("Phone Number");
	console.log("+91 44 4554 2123");
	console.groupEnd();
	console.group("Email Address");
	console.log("info@tesark.com");
	console.groupEnd();
	console.group("Website");
	console.log("http://www.tesark.com");
	console.groupEnd();
	console.groupEnd();
	console.log(" ");
	console.group("%c Liquidzz™ Delivery ","background: yellow; color: black; font-size: 15px;");
	console.log("Delivery Platform for Liquidzz™");
	console.groupEnd();
	console.timeEnd("[MESSAGE]");

});