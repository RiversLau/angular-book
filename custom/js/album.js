/**
 * Created by Rivers on 2014/11/10.
 */
var albumModule = angular.module('albumModule', []);

albumModule.controller('albumController', function($scope) {
    $scope.albums = [
        {name : 'Southwest Serenade', duration : '2:34'},
        {name : 'Northern Light Waltz', duration : '3:21'},
        {name : 'Eastern Tango', duration : '17:45'}
    ];
});