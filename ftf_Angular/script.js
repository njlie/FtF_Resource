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
    			controler   : 'contactController'
    		});
    });

    // create the controller and inject Angular's $scope
    ftfApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    ftfApp.controller('aboutController', function($scope) {
    	$scope.message = 'Look! I am an about page.';
    });

    ftfApp.controller('contactController', function($scope) {
    	$scope.message = 'This is an example contact page.';
    });
