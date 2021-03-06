var capEventModule = angular.module('capEventModule', ['ngResource']);

//var endpoint = 'http://captogether.cloudhub.io/api';
var endpoint = 'http://localhost:3000/api';

capEventModule.factory('CapEventService', function ($resource) {
    return $resource(endpoint + '/capevents/:id', null, {
        update: {
            method: 'PUT'
        }
    });
});
