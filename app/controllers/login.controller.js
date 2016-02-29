/**
 * Created by eduardo on 27/02/16.
 */
angular.module('app').controller('loginController', function ($scope, $rootScope, $location, ControleHorasService) {
    $scope.login = {};

    $scope.logar = function (login) {

        var usuarios = ControleHorasService.usuarios();
        for(i=0; i< usuarios.length; i++){

            if (login.inputUsuario == usuarios[i].usuario) {

                if (login.inputPassword == usuarios[i].senha) {
                    $rootScope.loggedUser = usuarios[i].nome;
                    $location.path('/menu');
                }
            }
            $scope.login.error = true;

        }
    }
});