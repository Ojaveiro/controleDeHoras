/**
 * Created by eduardo on 27/02/16.
 */
angular.module('app').controller("horasController", function($scope,$location){
    $scope.contas =[];
    conta = {};
    conta.id=1;
    conta.nome="Projetos";
    $scope.contas.push(conta);

    conta = {};
    conta.id=2;
    conta.nome="Férias";
    $scope.contas.push(conta);

    conta = {};
    conta.id=3;
    conta.nome="Ausência";
    $scope.contas.push(conta);

    conta = {};
    conta.id=4;
    conta.nome="Administrativa";
    $scope.contas.push(conta);

    conta = {};
    conta.id=5;
    conta.nome="Sustentação";
    $scope.contas.push(conta);

    $scope.irParaMenu = function(){
        $location.path( '/menu');
    }

});