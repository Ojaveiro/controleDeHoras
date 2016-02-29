/**
 * Created by eduardo on 27/02/16.
 */
angular.module('app').controller("horasColaboradorController", function ($scope, ControleHorasService) {
    $scope.contas = ControleHorasService.contas();
    $scope.projetos = ControleHorasService.projetos();
    $scope.tiposLancamentos = ControleHorasService.tiposLancamentos();
    $scope.colaboradores = ControleHorasService.colaboradores();
    $scope.relatorioHorasColaborador = ControleHorasService.relatorioHorasColaborador();

});