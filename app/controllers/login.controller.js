/**
 * Created by eduardo on 27/02/16.
 */
angular.module('app').controller('loginController', function($scope,$rootScope,$location){
    $scope.login = {};
    $scope.login.inputUsuario = "Eduardo";
    $scope.login.inputPassword = "123";

    $scope.logar = function(login){
        if(login.inputUsuario == 'Eduardo' && login.inputPassword == '123'){
            $rootScope.loggedUser ='Eduardo Cortes Lima';
            $location.path( '/menu');
        }else{
            $scope.login.error = true;
        }
    }
});