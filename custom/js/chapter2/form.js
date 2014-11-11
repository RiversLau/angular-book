/**
 * Rivers
 * 2014-11-10
 */
var myForm = angular.module('myForm', []);

myForm.controller('formController', function($scope) {
    $scope.funding = {type : true, startingEstimate : 0};

    $scope.computeNeeded = function() {
        $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };

    $scope.requestFunding = function() {
        window.alert("Sorry, please get more customers first.");
    };

    $scope.reset = function() {
        $scope.funding.startingEstimate = 0;
    }
});
