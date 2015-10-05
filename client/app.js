var app = angular.module('myApp', []);

app.controller("MyController", ['$scope', function ($scope, $http) {

    // I setup testValue when I was having trouble getting Angular to work at all...
    // now I don't have the heart to remove it. :D
    $scope.testValue = "Derpy Derp Derp Derp.";

    // Some sample placeholder tasks
    $scope.todos = [
        {text: 'Something really important...', category: 'RedAlerts', done: false},
        {text: 'Something less important...', category: 'Errands', done: false},
        {text: 'Something completely trivial...', category: 'General', done: false},
        {text: 'Something around the house...', category: 'Chores', done: true}
    ];

    // Initializing all my ng-show properties to false.
    $scope.showChores = true;
    $scope.showErrands = true;
    $scope.showMiscs = true;
    $scope.showAddRedAlert = false;
    $scope.showAddErrands = false;
    $scope.showAddChores = false;
    $scope.showAddMiscs = false;

    // Function to close all Add fields and then re-open desired field
    $scope.showAdd = function (category) {
        $scope.showAddRedAlert = false;
        $scope.showAddErrands = false;
        $scope.showAddChores = false;
        $scope.showAddMiscs = false;
        $scope[category] = true;
    };

    // My function to add tasks. It's passing the category based on which section you add the task from.
    // Also clears out the formAddText fields
    $scope.addToDo = function (todoCat) {
        $scope.todos.push({text: $scope.formAddText, category: todoCat, done: false});
        $scope.formAddText = '';
    };

    // Uses UNDERSCORE to filter out finished tasks and returns a new array that contains only the
    // uncompleted tasks
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        });
    };

}]);