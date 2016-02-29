/**
 * Created by eduardo on 27/02/16.
 */
angular.module('app').controller("monitoramentoHorasXProjeto", function($scope, $location){

    $scope.irParaMenu = function(){
        $location.path( '/menu');
    }
});