var capEventModule = angular.module('capEventModule');

capEventModule.controller('CapEventListController', function ($scope, $location, CapEventService) {
    $scope.capEvents = CapEventService.query();
    $scope.showDetail = function (id) {
        $location.path('/capevent/detail/' + id);
    };
    $scope.addParticipant = function (id) {
        CapEventService.get({id: id}, function(capEvent) {
            capEvent.participants++;
            capEvent.$update({id: id}, function() {
                $scope.capEvents = CapEventService.query();
            });
        });
    }; 
});
