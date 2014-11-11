/**
 * Created by Administrator on 2014/11/11.
 */
var focusModule = angular.module('focusModule', []);

focusModule.directive('ngbkFocus', function() {
    return {
        link: function(scope, element, attrs, controller) {
            element[0].focus();
        }
    }
});

focusModule.controller('FocusController', function($scope) {
    $scope.message = {text:'Nothing clicked yet'};

    $scope.clickUnfocused = function() {
        $scope.message.text = 'unfocused button clicked';
    };

    $scope.clickFocused = function() {
        $scope.message.text = 'focus button clicked';
    };
})