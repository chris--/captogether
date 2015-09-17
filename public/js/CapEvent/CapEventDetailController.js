var capEventModule = angular.module('capEventModule');

capEventModule.controller('CapEventDetailController', function ($scope, $routeParams, $location) {
    $scope.capEvent = {
    	id: 1, 
		title: 'Ein CapEvent',
		date: '01.01.2001',
		category: 'Literatur',
		participants: 1,
		geolocation: '10.0001, 10.0001'
    };
    $scope.saveCapEvent = function() {
    	console.log('Saving', $scope.capEvent);
    }
});
