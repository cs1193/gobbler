'use strict';

/* Directives */

define([ 'app', 'jquery'], function (app, $) {

	app.directive('appVersion', ['version', function factory (version) {
		return function (scope, elm, attrs) {
			elm.text(version);
		};
	}]);

	return app;
});