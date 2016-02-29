(function (module, undefined) {

    module.controller('mainController', mainController);

    mainController.$inyect = ['$scope'];
    function mainController($scope) {
        $scope.company = "Sistel";
    }
})(window.angular.module('questionApp'));