(function (module, angular, undefined) {
    
    module.controller('questionController', questionController);

    questionController.$inject = ['$scope'];
    function questionController($scope) {
        $scope.check = check;
        $scope.answer = answer;
        $scope.questionNumber = 0;
        $scope.notification = '';

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
            },
            {
                id: 2,
                pregunta: '¿JavaScript mola?',
                respuestas: [
                    {
                        id: 1,
                        text: 'Si, pero me vuelve loco',
                        active: false
                    },
                    {
                        id: 2,
                        text: 'Si, pero no tengo ni idea',
                        active: false
                    },
                    {
                        id: 3,
                        text: 'No, porque no tengo ni idea',
                        active: false
                    },
                    {
                        id: 4,
                        text: 'javaque??',
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
            var hasResponse = false;
            angular.forEach(question.respuestas, function (value, key) {
                if (value.active) {
                    $scope.answers.push({ id: question.id, responseId: value.id });
                    hasResponse = true;
                }
            });
            if (!hasResponse) {
                $scope.notification = 'You have to answer the question!';
                return;
            }
            //Next question
            if ($scope.questionNumber < $scope.questions.length - 1) {
                $scope.questionNumber++;
            } else {
                $scope.notification = 'At last question...';
            }
        }
    };

})(window.angular.module('questionApp'), window.angular)