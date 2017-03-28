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
            controller: 'activityController'
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

    .controller('mainController', ['$scope', '$rootScope', '$location', '$mdDialog', '$http', function ($scope, $rootScope, $location, $mdDialog, $http) {
        console.log("application stated");



        $scope.getplan = function () {
            debugger;
            $http({
                method: 'GET',
                url: '././apis/plan/priceplan.json',
                dataType: "json",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, X-Requested-With",
                    "Content-Type": "text/json"
                },

            })
                .success(function (data) {
                    console.log("Ok : " + data);
                    $scope.palndetails=data;

                })
                .error(function (data) {

                    console.log("Error : " + data);
                });

            // var url = "http://dev.smoothflow.io/apis/plan/priceplan.json"
            // // $sce.trustAsResourceUrl(url);

            // $http.jsonp(url)
            //     .success(function (data, status, headers, config) {
            //         console.log("Ok : "+data);
            //     }).error(function (data, status, headers, config) {
            //         console.log("Error : "+data);
            //     });
        };

        $scope.getplan();
    }])
    .controller('activityController', ['$scope', function ($scope) {
        console.log("activity controller hits");

        $scope.SearchKeyword = "";

        var activityList = [{
            name: 'Act-On',
            description: 'Act-On',
            category: 'Payment',
            icon: '/satelite.png'
        }, {
            name: 'Active Col',
            description: 'Active Collabe description',
            category: 'Database',
            icon: '/cocktails.png'
        }, {
            name: 'Backpack',
            description: 'Backpack description',
            category: 'Payment',
            icon: '/polaroid.png'
        }, {
            name: 'Bamboo',
            description: 'Bamboo description',
            category: 'Dataflow',
            icon: '/recycling.png'
        }, {
            name: 'Coinbase',
            description: 'Coinbase description',
            category: 'Database',
            icon: '/wine.png'
        }];

        $scope.$watch('SearchKeyword', function (keyword) {
            var _activities;

            if (!keyword.length) _activities = SearchActivitiesByCategory('all');
            else {
                keyword = keyword.toLowerCase();
                _activities = SearchActivitiesByName(keyword);
            }

            $scope.activities = _activities;
            console.log($scope.activities);
        });

        $scope.toggleCategory = function (category) {
            $scope.activities = SearchActivitiesByCategory(category);
        }

        var SearchActivitiesByName = function (name) {
            return activityList.filter(function (activity) {
                var activity_name = activity.name.toLowerCase();
                return (activity_name.search(name) !== -1);
            });
        }

        var SearchActivitiesByCategory = function (category) {
            if (category === 'all')
                return angular.copy(activityList);
            else {
                return activityList.filter(function (activity) {
                    return (activity.category === category)
                });
            }
        }

        var init = function () {
            var _categories = [];

            activityList.forEach(function (activity) {
                // if(_categories.indexOf() )
            });
        }



    }]);
