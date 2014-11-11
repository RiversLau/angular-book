/**
 * Created by Rivers on 2014/11/11.
 */
var caseFilter = angular.module('caseFilter', []);

caseFilter.filter('titleCaseFilter', function() {
    var titleCaseFilter = function(input) {
        var words = input.split(" ");
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    };
    return titleCaseFilter;
});

caseFilter.controller('CaseController', function($scope) {
    $scope.pageHeading = 'behold the majesty of your page title';
});