'use strict';

angular.module('smoothflowwebsite', [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'vAccordion',
    'ngAnimate'

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
            controller: 'blogController'
        }).when('/blog/:post', {
            templateUrl: 'pages/blogpost.html',
            controller: 'blogController'
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
            controller: 'contactController'
        }).when('/details/:DisplayName', {
            templateUrl: 'pages/activitydetails.html',
            controller: 'activityController'
        }).otherwise({ redirectTo: '/pagenotfound' });


    }])

    .controller('mainController', ['$scope', '$rootScope', '$location', '$mdDialog', '$http', function ($scope, $rootScope, $location, $mdDialog, $http) {
        //console.log("application stated");



        //28-03-2017 add by lakmini==============

        $scope.getplan = function () {

            $http({
                method: 'GET',
                url: './json/priceplan.json',
                dataType: "json",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, X-Requested-With",
                    "Content-Type": "text/json"
                },

            })
                .success(function (data) {
                    // console.log("Ok : " + data);
                    $scope.palndetails = data;
                })
                .error(function (data) {
                    //console.log("Error : " + data);
                });
        };

        $scope.getplan();
        //============================================
    }])
    .controller('activityController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
        //console.log("activity controller hits");

        $scope.SearchKeyword = "";


        //load activity details
        $scope.detailsName = $routeParams.DisplayName;
        //======
        // console.log($scope.detailsName);
        $scope.$watch('SearchKeyword', function (keyword) {
            var _activities;
            $scope.actlist = false;
            $scope.activitiescat = [];
            if (!keyword.length) _activities = $scope._categories;
            else {
                keyword = keyword.toLowerCase();
                _activities = SearchActivitiesByName(keyword);
            }


            $scope.activitiescat = _activities;

        });

        $scope.toggleCategory = function (category) {

            $scope.activities = SearchActivitiesByCategory(category.class);
            // console.log($scope.activities);
            $scope.actlist = false;
            $scope.SetCatIcon($scope.activities, false);


        }

        var SearchActivitiesByName = function (name) {
            $scope.actlist = false;
            return $scope._categories.filter(function (activity) {
                var activity_name = activity.Category.toLowerCase();
                return (activity_name.search(name) !== -1);
            });
        }

        var SearchActivitiesByCategory = function (category) {
            if (category === 'all')
                return angular.copy(activityList);
            else {
                return $scope.categorieslist.filter(function (activity) {
                    return (activity.class === category)
                });
            }
        }
        $scope.getAllCategory = function () {
            // $scope.activities = $scope.categorieslist;
            $scope.SetCatIcon($scope.categorieslist, true);
        }
        //use for set icons and remove duplicates ----- 02-05-2017 add by lakmini
        $scope.SetCatIcon = function (activities, _type) {
            $scope.indexedCat = [];
            $scope.activitiescat = [];
            activities.forEach(function (element) {
                var teamIsNew = $scope.indexedCat.indexOf(element.Category) == -1;
                if (teamIsNew) {
                    if (element.class == 'Tools') {
                        if (element.Category == 'Flow Controls') {
                            { element.icon = '/protractor.png'; }
                        } else if (element.Category == 'Collections') {
                            { element.icon = '/archives.png'; }
                        } else if (element.Category == 'Switch Controls') {
                            { element.icon = '/hierarchy-structure.png'; }
                        } else if (element.Category == 'Common') {
                            { element.icon = '/cogwheel.png'; }
                        } else if (element.Category == 'Calculations') {
                            { element.icon = '/calculator (1).png'; }
                        }
                    } else if (element.class == 'Payments') {
                        if (element.Category == 'Payments') {
                            { element.icon = '/light-bulb.png'; }
                        } else if (element.Category == 'CloudCharge') {
                            { element.icon = '/protractor.png'; }
                        } else if (element.Category == 'CloudCharge Azure') {
                            { element.icon = '/protractor.png'; }
                        }
                    } else if (element.class == 'Communication') {
                        if (element.Category == 'Email') {
                            { element.icon = '/mail.png'; }
                        } else if (element.Category == 'SMS') {
                            { element.icon = '/smartphone.png'; }
                        } else if (element.Category == 'HTTP') {
                            { element.icon = '/browser.png'; }
                        }
                    } else if (element.class == 'Storage') {
                        if (element.Category == 'File') {
                            { element.icon = '/browser (1).png'; }
                        } else if (element.Category == 'Redis') {
                            { element.icon = '/archives.png'; }
                        } else if (element.Category == 'Cloud Data Store') {
                            { element.icon = '/cloud-computing.png'; }
                        }
                    } else if (element.class == 'Social') {
                        if (element.Category == 'Twitter') {
                            { element.icon = '/twitter.png'; }
                        } else if (element.Category == 'Facebook') {
                            { element.icon = '/facebook.png'; }
                        }
                    } else {
                        { element.icon = '/satelite.png'; }
                    }


                    $scope.indexedCat.push(element.Category);
                    $scope.activitiescat.push(element);
                }
            }, this);
            if (_type) {
                $scope._categories = $scope.activitiescat;
            }


        }
        var init = function () {
            var _categories = [];

            activityList.forEach(function (activity) {
                // if(_categories.indexOf() )
            });
        }



        //02-05-2017 add by lakmini==============

        $scope.categories = function () {
            // debugger;
            $http({
                method: 'GET',
                url: './json/controldata.json',
                dataType: "json",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, X-Requested-With",
                    "Content-Type": "text/json"

                },

            })
                .success(function (data) {
                    //  console.log(data);
                    $scope.categorieslist = data.Controls;
                    $scope.ClassToFilter();
                    $scope.getAllCategory();
                })
                .error(function (data) {

                    //console.log("Error : " + data);
                });




        };

        $scope.categories();



        var indexedClass = [];


        $scope.ClassToFilter = function () {
            indexedClass = [];
            return $scope.categorieslist;
        }

        $scope.filterClass = function (Class) {
            var teamIsNew = indexedClass.indexOf(Class.class) == -1;
            if (teamIsNew) {
                indexedClass.push(Class.class);
            }
            return teamIsNew;
        }
        // $scope.getclass = function () {}

        //============================================
        // add by lakmini 22-05-2017  
        $scope.getAtivityDetails = function (category, catImage) {

            $scope.actlist = true;
            // alert(category);
            $scope.selectCategory = category;
            $scope.selectcatImage = catImage;

        };

        $scope.changeLocationdetails = function (details) {

            $rootScope.ActivityDetailsObj = details;
            // console.log($rootScope.ActivityDetailsObj);
            $location.path("/details/" + $rootScope.ActivityDetailsObj.DisplayName);
        };
        //=========================================

    }]).controller('blogController', ['$scope', '$route', '$routeParams', function ($scope, $route, $routeParams) {
        // console.log("activity controller hits");

        if ($routeParams.post != null) {
            // console.log("parameter: " + $routeParams.post);
            $scope.post = $routeParams.post;
            $scope.postURL = "./blogposts/" + $scope.post + ".html"
        }

        $scope.getPostURL = function () {
            return $scope.postURL;
        }

        //comment

        $scope.blogposts = [
            {
                title: "Getting Started with Smoothflow",
                filename: "getting_started_with_smoothflow"
            },
            {
                title: "Using Configurations in Smoothflow Activities",
                filename: "using_configurations_in_smoothflow"
            }
        ]

    }]).controller('contactController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
        debugger;
        $scope.sendMailContact = function (emailDetails) {
            console.log(emailDetails)
            // $http.post('php/sendemail.php').success(function (data) {
            //     $scope.details = data;
            // })

            $http({
                url: "php/sendemail.php",
                method: "POST",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: {
                    data: emailDetails
                }
            }).success(function (data, status, headers, config) {
                console.log(data);
            }).error(function (data, status, headers, config) {
                console.log(data);
            });
        }

    }]);
