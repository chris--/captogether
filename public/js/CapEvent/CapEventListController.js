var capEventModule = angular.module('capEventModule');

capEventModule.controller('CapEventListController', function ($scope, $location) {
    // CapEventListController
    $scope.helloWorld = 'Hallo, List-View!'
    $scope.capEvents = [{
    	id: 1, 
		title: 'Ein CapEvent',
		date: '01.01.2001',
		category: 'Literatur',
		participants: 1
    }, {
    	id: 2,
    	title: 'Noch ein CapEvent',
    	date: '01.02.2010',
		category: 'Sport',
		participants: 2
    }];
});
