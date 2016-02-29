/**
 * Created by eduardo on 27/02/16.
 */
angular.module('app').controller("horasController", function($scope,$location, ControleHorasService){
    $scope.contas = ControleHorasService.contas();
    $scope.projetos = ControleHorasService.projetos();
    $scope.tiposLancamentos = ControleHorasService.tiposLancamentos();
    $scope.relatorioHoras= ControleHorasService.relatorioHoras();
});