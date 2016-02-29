(function (module, angular, undefined) {
    
    module.controller('questionController', questionController);

    questionController.$inject = ['$scope', 'questionService'];
    function questionController($scope, questionService) {
        $scope.check = check;
        $scope.answer = answer;
        $scope.questionNumber = 0;
        $scope.notification = '';
        $scope.pollEnded = false;

        $scope.answers = [];
        $scope.questions = questionService.getData();

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
                $scope.pollEnded = true;
                $scope.notification = 'At last question...';
            }
        }
    };

})(window.angular.module('questionApp'), window.angular)