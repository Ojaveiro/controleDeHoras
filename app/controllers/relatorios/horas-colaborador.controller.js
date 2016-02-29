/**
 * Created by eduardo on 27/02/16.
 */
angular.module('app').controller("horasColaboradorController", function($scope, $location){

    $scope.irParaMenu = function(){
        $location.path( '/menu');
    }
});