/**
 * Created by Rivers on 2014/11/11.
 */
var emailService = angular.module('RiversMail', []);

function emailRouteConfig($routeProvider) {
    $routeProvider.when('/', {
        controller: ListController,
        templateUrl: 'list.html'
    }).when('/view/:id', {
        contoller: DetailController,
        templateUrl: 'detail.html'
    }).otherwise({
        redirectTo: '/'
    });
}

emailService.config(emailRouteConfig);

var messages = [
    {id:0, sender:'jean@rivers.com', subject:'Hi there, old friend', date:'Dec 7, 2013 12:32:00',
        recipients:['greg@rivers.com'], message:'Hey, we should get together for lunch sometime and catch up.' +
    'There are many things we should collaborate on this year.'},
    {id:1, sender:'maria@rivers.com', subject:'Where did you leave my laptop?', date:'Dec 7, 2013 12:32:00',
        recipients:['greg@rivers.com'], message:'Hey, we should get together for lunch sometime and catch up.' +
    'There are many things we should collaborate on this year.'},
    {id:2, sender:'bill@rivers.com', subject:'Lost python', date:'Dec 7, 2013 12:32:00',
        recipients:['greg@rivers.com'], message:'Hey, we should get together for lunch sometime and catch up.' +
    'There are many things we should collaborate on this year.'},
]

function ListController($scope) {
    $scope.messages = messages;
};

function DetailController($scope, $routeParams) {
    $scope.message = messages[$routeParams.id];
}