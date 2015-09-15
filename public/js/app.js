var app = angular.module('workshop-app', ['ngRoute']);

// Route configuration
var capEventTemplatePath = '/js/CapEvent';

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'js/root.html',
        constroller: function(){}
    });
});

// Global Error handler
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
});

app.factory('httpInterceptor', function ($q, $rootScope) {
    return {
        responseError: function (rejection) {
            console.log('HTTP ERROR:', rejection);
            $rootScope.HTTP_ERROR = $rootScope.HTTP_ERROR || [];
            $rootScope.HTTP_ERROR.push(Date() + ': ' + JSON.stringify(rejection.data));
            return $q.reject(rejection);
        }
    };
});

console.log('Angular module initialized!');
