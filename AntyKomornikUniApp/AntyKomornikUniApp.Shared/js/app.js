/// <reference path="../scripts/angular.js" />

var app = angular.module('antyKomornik', []);

app.controller('raportCtrl', ['$scope', function ($scope) {
    $scope.greeting = 'Hello World';

    $scope.redirectRaport = function () {
        WinJS.Navigation.navigate("/pages/raport/raport.html");
    }
}]);