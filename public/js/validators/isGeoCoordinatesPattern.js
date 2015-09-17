/**
 * Determines whether a string matches geo coordinates pattern
 */
angular
    .module('validators', [])
    .directive('isGeoCoordinatesPattern', function ($log) {
        return {
            require: 'ngModel',
            link: function (scope, elem, attr, ctrl) {

                var geoCoordinatesRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
                // add a parser that will process each time the value is 
                // parsed into the model when the user updates it.
                var validator = function (value) {
                    ctrl.$setValidity('isGeoCoordinatesPattern', geoCoordinatesRegex.test(value));
                    return value;
                };
                ctrl.$parsers.unshift(validator);
            }
        };
});
