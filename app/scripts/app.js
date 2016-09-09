'use strict';

/**
 * @ngdoc overview
 * @name jsuApp
 * @description
 * # jsuApp
 *
 * Main module of the application.
 */
angular
  .module('jsuApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/jsumain', {
        templateUrl: 'views/jsumain.html',
        controller: 'JSUMainCtrl',
        controllerAs: 'jsumain'
      })
      .when('/JSURoute', {
        templateUrl: 'views/jsuroute.html',
        controller: 'JsurouteCtrl',
        controllerAs: 'JSURoute'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
