'use strict';

define([
	'angular',
	'angularRoute',
	'angularResource',
	'angularAnimate',
	'angularCookies',
	'angularSanitize',
	'angularTouch',
	'ngprogress',
	'angularMap',
	'angularLocalStorage'
], function (angular) {
	return angular.module('liquidzz', ['ngRoute','ngResource','ngAnimate','ngCookies','ngSanitize','ngTouch','ngProgress','ngMap','LocalStorageModule']);
});