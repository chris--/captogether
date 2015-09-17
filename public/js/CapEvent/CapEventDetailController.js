var capEventModule = angular.module('capEventModule');

capEventModule.controller('CapEventDetailController', function ($scope, $routeParams, $location, CapEventService) {
	if ($routeParams.id) {
        // retrieve event from routeParam.capEventId and store in scope
        $scope.capEvent = CapEventService.get({id: $routeParams.id});
        $scope.saveCapEvent = function () {
            $scope.capEvent.$update({id: $routeParams.id}, function () {
            	console.log('Successfully updated', $scope.capEvent);
                $location.path('/capevent/list/');
            }, function(err) {
                console.log('Error while updating', $scope.capEvent, ': ', err);
            });
        };
    } else {
        // no capEventId, create an empty CapEvent
        $scope.capEvent = {};
        $scope.saveCapEvent = function () {
            console.log('Creating', $scope.capEvent);
            $scope.capEvent = CapEventService.save($scope.capEvent, function () {
                $location.path('/capevent/list/');
            }, function(err) {
                console.log('Error while saving', $scope.capEvent, ': ', err);
            });
        };
    }
});
