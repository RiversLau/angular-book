/**
 * Created by Rivers on 2014/11/10.
 */
var deathrayModule = angular.module('deathrayModule', []);

deathrayModule.controller('deathrayController', function($scope) {
    $scope.menuState = {show : false};
    $scope.isDisabled = false;

    $scope.toggleMenu = function() {
        $scope.menuState.show = !$scope.menuState.show;
    };

    $scope.stun = function() {
        if ($scope.isDisabled) {
            $scope.isDisabled = false;
        } else {
            $scope.isDisabled = true;
        }
    }
});
