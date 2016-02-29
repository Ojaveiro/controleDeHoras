/**
 * Created by eduardo on 27/02/16.
 */
angular.module('app')
    .config(function ($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'app/views/index.html',
            controller: 'indexController'
        })
        .when('/login',{
            templateUrl: 'app/views/login.html',
            controller: 'loginController'
        })

        .when('/relatoriohoras',{
            templateUrl: 'app/views/relatorios/horas.html',
            controller: 'horasController'
        })

        .when('/relatoriohorascolaborador',{
            templateUrl: 'app/views/relatorios/horas_colaborador.html',
            controller: 'horasColaboradorController'
        })

        .when('/relatoriomonitoramentoxhoras',{
            templateUrl: 'app/views/relatorios/monitoramento_colaborador_horas_nao_preenchidas.html',
            controller: 'monitoramentoHorasXProjeto'
        })
        .when('/menu',{
            templateUrl: 'app/views/menu.html',
            controller: 'menuController'
        })

        .when('/lancamento_horas',{
            templateUrl: 'app/views/cadastros/lancamento_horas.html',
            controller: 'lancamentoHorasController'
        })

        .when('/lancamento_horas_gerencial',{
            templateUrl: 'app/views/cadastros/lancamento_horas_gerencial.html',
            controller: 'lancamentoHorasGerancialController'
        })

       ;
})
    .run( function($rootScope, $location) {

        // register listener to watch route changes
        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
            if ( $rootScope.loggedUser == null ) {
                // no logged user, we should be going to #login
                if ( next.templateUrl == "app/views/login.html" ) {
                    // already going to #login, no redirect needed
                } else {
                    // not going to #login, we should redirect now
                    $location.path( "/" );
                }

            }
        });
    });