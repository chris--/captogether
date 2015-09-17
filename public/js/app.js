var app = angular.module('workshop-app', ['ngRoute', 'capEventModule']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'js/root.html',
        controller: function($scope) {
            $scope.helloWorld = 'Hallo, Welt!';
        }
    });
    $routeProvider.when('/capevent/detail/:id?', {
        templateUrl: '/js/CapEvent/capevent-detail.html',
        controller: 'CapEventDetailController'
    });
});

console.log('Angular module initialized!');
