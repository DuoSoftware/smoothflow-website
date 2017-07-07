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

    .controller('mainController', ['$scope', '$rootScope', '$location', '$mdDialog', '$http', '$timeout', function ($scope, $rootScope, $location, $mdDialog, $http, $timeout) {
        //console.log("application stated");


        // var footerElem = angular.element('#footerBanner');
        // if(footerElem)footerElem.css('visibility','invisible');

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

        // Kasun_Wijeratne_6_21_2017
        $scope.tutePDFUrls = [{
            name: 'Configurations',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/Configurations.pdf'
        }, {
            name: 'Creating',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/CreatingActivities.pdf'
        }, {
            name: 'Creating workflow',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/CreatingaWorkflow.pdf'
        }, {
            name: 'Download a workflow as executable',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/DownloadingaWorkflowasExecutable.pdf'
        }, {
            name: 'Editing an workflow',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/EditingaWorkflow.pdf'
        }, {
            name: 'First time login &#8211; Customer boarding',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/FirstTimeLogin-CustomerBoarding.pdf'
        }, {
            name: 'Inviting users',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/InvitingUsers.pdf'
        }, {
            name: 'Left pane',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/LeftPane.pdf'
        }, {
            name: 'List of available nodes',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/ListofavailableNodes.pdf'
        }, {
            name: 'Logging in and Logging out',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/LogginginandLoggingout.pdf'
        }, {
            name: 'Opening a workflow',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/OpeningaWorkflow.pdf'
        }, {
            name: 'Saving a workflow',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/SavingaWorkflow.pdf'
        }, {
            name: 'Signing up with SmoothFlow',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/SigningUpwithSmoothflow.pdf'
        }, {
            name: 'SmoothFlow settings',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/SmoothFlowSettings.pdf'
        }, {
            name: 'The main user interface',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/TheMainUserInterface.pdf'
        }, {
            name: 'Toolbar controls',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/ToolbarControls.pdf'
        }, {
            name: 'Using arguments in workflow',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/UsingArgumentsinWorkflows.pdf'
        }, {
            name: 'Working with conditional statements',
            url: 'http://www.smoothflow.io/wp-content/uploads/2016/11/WorkingwithConditionalStatements.pdf'
        }];
        $scope.setUrlForTutePDF = function (tute) {
            $scope.pdfLoading = true;
            $scope.selectedTute = tute.name;
            $timeout(function () {
                $scope.activeTutePDFUrl = tute.url;
                $scope.false = false;
            });
        };
        // Animate footer
        $scope.footerIsOn = false;
        angular.element(window).scroll(function () {
            var elem = angular.element('#footerBanner');
            var elem2 = angular.element('#overview-image');
            var elem3 = angular.element('.path1');
            var elem4 = angular.element('.path2');
            var elem5 = angular.element('.path3');
            var elem6 = angular.element('.screens .one');
            var elem7 = angular.element('.screens .two');
            var elem8 = angular.element('.screens .three');
            var elem9 = angular.element('.keyfeatures');
            var elem10 = angular.element('.title');
            var elem11 = angular.element('.circle1');
            var elem12 = angular.element('.circle2');
            var elem13 = angular.element('.circle3');
            var elem14 = angular.element('.circle4');
            if (elem != undefined) {
                var hT,
                    hH = elem.outerHeight(),
                    wH = $(window).height(),
                    wS = $(this).scrollTop();

                if (wS > (hH - wH)) {
                    elem.fadeIn('slow');
                } else {
                    elem.fadeOut('slow');
                }
            }

            if (elem2 != undefined) {
                var hT2,
                    hH2 = elem2.outerHeight(),
                    wH2 = $(window).height(),
                    wS2 = $(this).scrollTop();

                if (wS2 > (hH2 - wH2)) {
                    elem2.animate({
                        'left': '0px',
                        'opacity': '1'
                    }, 700);
                }
            }

            if (elem3 != undefined && elem4 != undefined && elem5 != undefined) {
                var hT3 = elem9.offset().top,
                    hH3 = elem9.outerHeight(),
                    wH3 = $(window).height(),
                    wS3 = $(this).scrollTop();

                if (wS3 > (hT3 + hH3 - wH3) - 400) {
                    elem3.animate({
                        'top': '267px',
                        'opacity': '1'
                    }, 400, function () {
                        elem6.fadeIn();
                        elem4.animate({
                            'top': '267px',
                            'opacity': '1'
                        }, 400, function () {
                            elem7.fadeIn();
                            elem5.animate({
                                'top': '267px',
                                'opacity': '1'
                            }, 400, function () {
                                elem8.fadeIn();
                            });
                        });
                    });
                }
            }

            if (elem11 != undefined && elem12 != undefined && elem13 != undefined && elem14 != undefined) {
                var hT4 = elem10.offset().top,
                    hH4 = elem10.outerHeight(),
                    wH4 = $(window).height(),
                    wS4 = $(this).scrollTop();

                if (wS4 > (hT4 + hH4 - wH4)) {
                    elem11.animate({
                        'top': '118px',
                        'left': '211px',
                        'opacity': '1'
                    }, 300, function () {
                        elem12.animate({
                            'top': '302px',
                            'left': '395px',
                            'opacity': '1'
                        }, 300, function () {
                            elem13.animate({
                                'top': '298px',
                                'right': '405px',
                                'opacity': '1'
                            }, 300, function () {
                                elem14.animate({
                                    'top': '107px',
                                    'right': '199px',
                                    'opacity': '1'
                                }, 300);
                            });
                        });
                    });
                }
            }
        });
        // Animate footer
        // Kasun_Wijeratne_6_21_2017 - END
        //============================================
    }])
    .controller('activityController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', '$filter', function ($scope, $http, $location, $rootScope, $routeParams, $filter) {
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
            $scope.selectedActivityCat = category;
            $scope.SearchKeyword = "";
            if (category == "all") {
                $scope.actlist = false;
                $scope.categories();
            }
            else {
                $scope.activities = SearchActivitiesByCategory(category.class);
                $scope.actlist = false;
                SetDisplayOut($scope.activities);
            }


        }

        var SearchActivitiesByName = function (name) {
            $scope.actlist = false;
            return $scope.catList.filter(function (activity) {
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
            $scope.activities = $scope.categorieslist;
            $scope.catList = SetDisplayOut($scope.categorieslist);



        }

        function SetDisplayOut(categorieslist) {

            $scope.indexedCat = [];
            $scope.activitiescat = [];
            categorieslist.forEach(function (element) {
                var teamIsNew = $scope.indexedCat.indexOf(element.Category) == -1;
                if (teamIsNew) {
                    $scope.indexedCat.push(element.Category);
                    $scope.activitiescat.push(element);
                }
            }, this)

            return $scope.activitiescat;
        };
        //use for set icons and remove duplicates ----- 02-05-2017 add by lakmini comment
        // $scope.SetCatIcon = function (activities, _type) {
        //     $scope.indexedCat = [];
        //     $scope.activitiescat = [];
        //     activities.forEach(function (element) {
        //         var teamIsNew = $scope.indexedCat.indexOf(element.Category) == -1;
        //         if (teamIsNew) {
        //             if (element.class == 'Tools') {
        //                 if (element.Category == 'Flow Controls') {
        //                     { element.icon = '/protractor.png'; }
        //                 } else if (element.Category == 'Collections') {
        //                     { element.icon = '/archives.png'; }
        //                 } else if (element.Category == 'Switch Controls') {
        //                     { element.icon = '/hierarchy-structure.png'; }
        //                 } else if (element.Category == 'Common') {
        //                     { element.icon = '/cogwheel.png'; }
        //                 } else if (element.Category == 'Calculations') {
        //                     { element.icon = '/calculator (1).png'; }
        //                 }
        //             } else if (element.class == 'Payments') {
        //                 if (element.Category == 'Payments') {
        //                     { element.icon = '/light-bulb.png'; }
        //                 } else if (element.Category == 'CloudCharge') {
        //                     { element.icon = '/protractor.png'; }
        //                 } else if (element.Category == 'CloudCharge Azure') {
        //                     { element.icon = '/protractor.png'; }
        //                 }
        //             } else if (element.class == 'Communication') {
        //                 if (element.Category == 'Email') {
        //                     { element.icon = '/mail.png'; }
        //                 } else if (element.Category == 'SMS') {
        //                     { element.icon = '/smartphone.png'; }
        //                 } else if (element.Category == 'HTTP') {
        //                     { element.icon = '/browser.png'; }
        //                 }
        //             } else if (element.class == 'Storage') {
        //                 if (element.Category == 'File') {
        //                     { element.icon = '/browser (1).png'; }
        //                 } else if (element.Category == 'Redis') {
        //                     { element.icon = '/archives.png'; }
        //                 } else if (element.Category == 'Cloud Data Store') {
        //                     { element.icon = '/cloud-computing.png'; }
        //                 }
        //             } else if (element.class == 'Social') {
        //                 if (element.Category == 'Twitter') {
        //                     { element.icon = '/twitter.png'; }
        //                 } else if (element.Category == 'Facebook') {
        //                     { element.icon = '/facebook.png'; }
        //                 }
        //             } else {
        //                 { element.icon = '/satelite.png'; }
        //             }


        //             $scope.indexedCat.push(element.Category);
        //             $scope.activitiescat.push(element);
        //         }
        //     }, this);
        //     if (_type) {
        //         $scope._categories = $scope.activitiescat;
        //     }


        // }
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
            var tempList = $filter('filter')($scope.categorieslist, { Category: category })[0];
            $rootScope.ActivityDetailsObj = tempList;
            $scope.selectedComp = tempList.DisplayName;
        };

        $scope.changeLocationdetails = function (details) {
            $scope.selectedComp = details.DisplayName;

            $rootScope.ActivityDetailsObj = details;
            // console.log($rootScope.ActivityDetailsObj);
            // $location.path("/details/" + $rootScope.ActivityDetailsObj.DisplayName);
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

    }]).controller('contactController', ['$scope', '$rootScope', '$http', '$mdToast', function ($scope, $rootScope, $http, $mdToast) {
      //  debugger;

        $scope.isSend = false;
        $scope.sendMailContact = function (emailDetails) {
            console.log(emailDetails)
            // $http.post('php/sendemail.php').success(function (data) {
            //     $scope.details = data;
            // })
            $scope.isSend = true;
            $http({
                url: "php/sendemail.php",
                method: "POST",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: {
                    data: emailDetails
                }
            }).success(function (data, status, headers, config) {
                console.log(data);
                $scope.message = "Email sent successfully";
                $scope.showMessage($scope.message);
                console.log($scope.message);
            }).error(function (data, status, headers, config) {
                console.log(data);
                $scope.message = "";
                $scope.isSend = false;
            });


            // $scope.showMessage();
        }


        $scope.showMessage = function (msg) {
            $mdToast.show($mdToast.simple().content(msg).position('bottom right').hideDelay(3000));
        }

    }]);
