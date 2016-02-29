(function (module, undefined) {

    module.service('questionService', service);

    function service() {
        this.getData = function () {
            return [
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
        }
    }

})(window.angular.module('questionApp'))