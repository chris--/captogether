var app = angular.module('workshop-app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'js/root.html',
        constroller: function(){}
    });
});

console.log('Angular module initialized!');
