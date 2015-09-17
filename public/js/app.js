var app = angular.module('workshop-app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'js/root.html',
        controller: function($scope) {
        	$scope.helloWorld = 'Hallo, Welt!';
        }
    });
});

console.log('Angular module initialized!');
