describe('questionController', function () {

    beforeEach(module('questionApp'));

    it('Las respuestas estan vacias de inicio', inject(function ($controller) {
        var scope = {};
        $controller('questionController', { $scope: scope });

        expect(scope.answers.length).toBe(0);
    }));

    it('Las preguntas deben estar cargadas de inicio', inject(function ($controller) {
        var scope = {};
        $controller('questionController', { $scope: scope });

        expect(scope.questions.length).toBe(2);
    }));

    it('Responder una pregunta, añade una respuesta a la lista', inject(function ($controller) {
        var scope = {};
        $controller('questionController', { $scope: scope });
        var q = scope.questions[0];
        q.respuestas[0].active = true;
        scope.answer(q);
        expect(scope.answers.length).toBe(1);
        expect(scope.answers[0].id).toEqual(1);
        expect(scope.answers[0].responseId).toEqual(1);
    }));

    it('Responder una pregunta sin respuesta registra un error', inject(function ($controller) {
        var scope = {};
        $controller('questionController', { $scope: scope });
        var q = scope.questions[0];
        scope.answer(q);
        expect(scope.notification).toBe('You have to answer the question!');
        expect(scope.answers.length).toBe(0);
    }));

});