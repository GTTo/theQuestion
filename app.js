var app = angular.module('questionApp', []);

app.controller('mainController', mainController);

mainController.$inyect = ['$scope'];
function mainController($scope) {
    $scope.company = "Sistel";
}