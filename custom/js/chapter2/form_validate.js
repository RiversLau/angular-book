/**
 * Created by Administrator on 2014/11/12.
 */
var formModule = angular.module('formValidate', []);

formModule.controller('AddUserController', function($scope) {
    $scope.message = '';

    $scope.addUser = function() {
        $scope.message = 'Thanks, ' + $scope.user.first + ', we added you!';
    }
})
