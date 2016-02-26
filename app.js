var app = angular.module('questionApp', []);

app.controller('mainController', mainController);

mainController.$inyect = ['$scope'];
function mainController($scope) {
    $scope.company = "Sistel";
}

app.controller('questionController', questionController);

questionController.$inject = ['$scope'];
function questionController($scope) {
    $scope.check = check;

    $scope.question = {
        id: 1,
        pregunta: '¿Que tipo de Framework es AngularJS?',
        respuestas: [
            {
                id: 1,
                text: 'MVC',
                active: false
            },
            {
                id: 2,
                text: 'MVVM',
                active: false
            },
            {
                id: 3,
                text: 'MVR',
                active: false
            },
            {
                id: 4,
                text: 'MVW',
                active: false
            }
        ]
    };

    function check() {
        angular.forEach($scope.question.respuestas, function (value, key) {
            value.active = false;
        });
        this.respuesta.active = true;
    };


};