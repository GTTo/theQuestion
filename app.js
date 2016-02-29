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
    $scope.answer = answer;

    $scope.answers = [];
    $scope.questions = [
        {
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
        }
    ];

    function check(question) {
        angular.forEach(question.respuestas, function (value, key) {
            value.active = false;
        });
        this.respuesta.active = true;
    };

    function answer(question) {
        angular.forEach(question.respuestas, function (value, key) {
            if (value.active) {
                $scope.answers.push({ id: question.id, responseId: value.id });
            }
        });
    }
};