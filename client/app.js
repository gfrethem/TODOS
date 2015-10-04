var app = angular.module('myApp', []);

app.controller("MyController", ['$scope', function ($scope, $http) {

    $scope.testValue = "Derpy Derp Derp Derp.";
    $scope.todos = [
        {text: 'Something really important...', category: 'RedAlerts', done: false},
        {text: 'Something less important...', category: 'Errands', done: false},
        {text: 'Something completely trivial...', category: 'General', done: false},
        {text: 'Something around the house...', category: 'Chores', done: true}
    ];
    $scope.showChores = true;
    $scope.showErrands = true;
    $scope.showMiscs = true;
    $scope.showAddRedAlert = false;
    $scope.showAddErrands = false;
    $scope.showAddChores = false;
    $scope.showAddMiscs = false;

    $scope.addToDo = function (todoCat) {
        $scope.todos.push({text: $scope.formAddText, category: todoCat, done: false});
        $scope.formAddText = '';
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        });
    };

}]);