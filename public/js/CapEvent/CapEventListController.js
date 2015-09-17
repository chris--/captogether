var capEventModule = angular.module('capEventModule');

capEventModule.controller('CapEventListController', function ($scope, $location, CapEventService) {
    $scope.capEvents = CapEventService.query(); 
});
