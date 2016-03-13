'use strict';

/* Directives */

define([ 'app', 'jquery', 'slidesjs'], function (app, $, slidesjs) {

	app.directive('mySlides', function() {
		var directive = {
			restrict: 'A',
				link: function(scope, element, attrs, ctrl) {
					scope.$watch(attrs.mySlides, function(value) {
					setTimeout(function() {
						// only if we have images since .slidesjs() can't
						// be called more than once
						// console.log("attrs.start is:");
						// console.dir(attrs.start);
						if (value.length > 0) {
							$(element[0]).slidesjs({
								preload: true,
								// preloadImage: '/content/images/theme/loading.gif',
								play: {
									active: true,
									auto: true,
									interval: 8000,
									swap: true,
									pauseOnHover: true,
									restartDelay: 2500
								},
								pause: attrs.pause || 2500,
								start: attrs.start || 1,
								hoverPause: attrs.hoverPause || true,
								navigation: { active: false, effect: "slide" },
								pagination: false,
								generatePagination: false
							});
						}
					}, 1);
				});
			}
		};
		return directive;
	});

	return app;
});