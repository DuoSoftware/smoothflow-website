'use strict';

angular.module('smoothflowwebsite', [
    'ngRoute',
    'ngMaterial',
    'ngMessages'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/homepage.html',
            controller: 'mainController'
        }).when('/pricing', {
            templateUrl: 'pages/pricing.html',
            controller: 'mainController'
        }).when('/features', {
            templateUrl: 'pages/features.html',
            controller: 'mainController'
        }).when('/howitworks', {
            templateUrl: 'pages/howitworks.html',
            controller: 'mainController'
        }).when('/client', {
            templateUrl: 'pages/client.html',
            controller: 'mainController'
        }).when('/activities', {
            templateUrl: 'pages/activities.html',
            controller: 'mainController'
        }).when('/blog', {
            templateUrl: 'pages/blog.html',
            controller: 'mainController'
        }).when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'mainController'
        }).when('/faq', {
            templateUrl: 'pages/faq.html',
            controller: 'mainController'
        }).when('/acceptable-use-policy', {
            templateUrl: 'pages/acceptable-use-policy.html',
            controller: 'mainController'
        }).when('/terms-and-conditions', {
            templateUrl: 'pages/terms-and-conditions.html',
            controller: 'mainController'
        }).when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'mainController'
        }).otherwise({ redirectTo: '/pagenotfound' });
    }])

    .controller('mainController', ['$scope', '$rootScope', '$location','$mdDialog', function ($scope, $rootScope, $location, $mdDialog) {
        console.log("application stated");
    }]);
