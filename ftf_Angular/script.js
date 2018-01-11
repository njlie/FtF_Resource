// script.js

    // create the module and name it scotchApp
    var ftfApp = angular.module('ftfApp', ['ngRoute']);

    ftfApp.config(function($routeProvider) {
    	$routeProvider

    		.when('/', {
    			templateUrl : 'pages/home.html',
    			controller  : 'mainController'
    		})

    		.when('/about', {
    			templateUrl : 'pages/about.html',
    			controller  : 'aboutController'
    		})

    		.when('/contact', {
    			templateUrl : 'pages/contact.html',
    			controller   : 'contactController'
    		});
    });

    ftfApp.factory('mainFactory', function ($http, $q) {
        var service = {};
        service.getBots = function () {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'bots.json',
                cache: false
            }).success(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        }

        return service;
    })

    // create the controller and inject Angular's $scope
    ftfApp.controller('mainController', function($scope, $http, mainFactory) {

        $http.defaults.cache = false;

        $scope.hover = function(state) {
            if(state) {
                element.addClass('change');
            }
        }

        // $http({
        //     method: 'GET',
        //     url: 'bots.json?random='+ new Date().getTime(),
        //     cache: false
        // }).then(function(res) {
        //     $scope.bots = res.data;
        //     console.log($scope.bots);
        // });

        // mainFactory.getBots().then(function (data) {
        //     $scope.bots = data;
        // });

        $http.get('bots.json?random=' + new Date().getTime()).success(function (response) {
            $scope.bots = response;
        })

        console.log($scope.bots);
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    ftfApp.controller('aboutController', function($scope) {
    	$scope.message = 'Look! I am an about page.';
    });

    ftfApp.controller('contactController', function($scope) {
    	$scope.message = 'This is an example contact page.';
    });
