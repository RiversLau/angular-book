/**
 * Created by Rivers on 2014/11/10.
 */
var studentModule = angular.module('StudentModule', []);

studentModule.controller('studentController', function($scope) {
   $scope.students = [
       {id : 1, name : 'Mary Contrary'},
       {id : 2, name : 'Jack Sprat'},
       {id : 3, name : 'Jill HIll'}
   ];

    $scope.insertTom = function() {
        $scope.students.splice(1, 0, {id : 4, name : 'Tom Thumb'});
    }
});