// app.js
var app = angular.module('myApp',[]);
app.controller("MyController", ['$scope', '$http', function($scope, $http) {
        $scope.testValue = "Derpy Derp Derp Derp.";
        $scope.todos = [
            {text: 'Something really important...', category:'RedAlerts', done:false},
            {text: 'Something less important...', category:'Errands', done:false},
            {text: 'Something completely trivial...', category:'General',done:true},
            {text: 'Something completely trivial...', category:'General',done:true},
            {text: 'Something completely trivial...', category:'General',done:true},
            {text: 'Something around the house...', category:'Chores',done:true}
        ];
    $scope.showChores = true;
    $scope.showErrands = true;
    $scope.showMiscs = true;

    }]);