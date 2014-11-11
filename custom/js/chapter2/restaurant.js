/**
 * Created by Administrator on 2014/11/11.
 */
var restaurantModule = angular.module('restaurantModule', []);

restaurantModule.controller('RestaurantController', function($scope) {
    $scope.directory = [
        {name : 'The Handsome Heifer', cuisine : 'BBQ'},
        {name : 'Green\'s Green Greens', cuisine : 'Salads'},
        {name : 'House of Fine Fish', cuisine : 'Seafood'}
    ];

    $scope.selectRestaurant = function(row) {
        $scope.selectedRow = row;
    }
});

restaurantModule.controller('HeadController', function($scope) {
    $scope.isError = false;
    $scope.isWarning = false;

    $scope.showError = function() {
        $scope.messageText = 'This is an error!';
        $scope.isError = true;
        $scope.isWarning = false;
    };

    $scope.showWarning = function() {
        $scope.messageText = 'Just a warning.Please carry on.';
        $scope.isError = false;
        $scope.isWarning = true;
    }
});