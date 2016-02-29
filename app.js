/**
 * Created by eduardo on 27/02/16.
 */
var app = angular.module('app', ['ngRoute']);

var montarItemComboBox = function (id, nome) {
    item = {};
    item.id = id;
    item.nome = nome;
    return item;
};

var montarItemRelatorioHoras = function(data, tipo, hora){
    item = {};
    item.data = data;
    item.tipo = tipo;
    item.hora = hora;
    return item;
};

var montarItemRelatorioHorasColaborador = function(nome, id, hora){
    item = {};
    item.nome = nome;
    item.id = id;
    item.hora = hora;
    return item;
};

var montarItemRelatorioHorasColaboradorPendente = function(nome, id){
    item = {};
    item.nome = nome;
    item.id = id;
    return item;
};

var montarUsuarios = function(nome, usuario, senha){
    item = {};
    item.nome = nome;
    item.usuario = usuario;
    item.senha = senha;
    return item;
};

app.factory('ControleHorasService', function () {
    return {
        usuarios: function(){
            lista = [];
            lista.push(montarUsuarios("Eduardo Cortes","Eduardo","123"));
            lista.push(montarUsuarios("Guilherme Reis","Guilherme","123"));
            lista.push(montarUsuarios("Daniel Freitas","Daniel","321"));
            return lista;
        },

        contas: function () {
            lista = [];
            lista.push(montarItemComboBox(1, "Projetos"));
            lista.push(montarItemComboBox(2, "Férias"));
            lista.push(montarItemComboBox(3, "Ausência"));
            lista.push(montarItemComboBox(4, "Administrativa"));
            lista.push(montarItemComboBox(5, "Sustentação"));
            return lista;
        },

        projetos: function () {
            lista = [];
            lista.push(montarItemComboBox(1, "Arrecadaçao"));
            lista.push(montarItemComboBox(2, "Garantia de Margem"));
            lista.push(montarItemComboBox(3, "Relatório de Margem"));
            return lista;
        },

        tiposLancamentos: function () {
            lista = [];
            lista.push(montarItemComboBox(1, "Normal"));
            lista.push(montarItemComboBox(2, "Adicional"));
            lista.push(montarItemComboBox(3, "Sobreaviso"));
            return lista;
        },
        colaboradores: function () {
            lista = [];
            lista.push(montarItemComboBox(1, "Eduardo Cortes"));
            lista.push(montarItemComboBox(2, "Guilherme Reis"));
            lista.push(montarItemComboBox(3, "Daniel Freitas"));
            return lista;
        },


        relatorioHoras : function (){
            lista = [];
            lista.push(montarItemRelatorioHoras(new Date(),"Normal", "06:00"));
            lista.push(montarItemRelatorioHoras(new Date(),"Normal", "06:00"));
            lista.push(montarItemRelatorioHoras(new Date(),"Normal", "06:00"));
            lista.push(montarItemRelatorioHoras(new Date(),"Adicional", "02:30"));
            lista.push(montarItemRelatorioHoras(new Date(),"Sobreaviso", "01:30"));
            return lista;
        },

        relatorioHorasColaborador : function (){
            lista = [];
            lista.push(montarItemRelatorioHorasColaborador("Eduardo","erd_lima", "20:00"));
            lista.push(montarItemRelatorioHorasColaborador("Guilherme","gui_reis", "06:00"));
            lista.push(montarItemRelatorioHorasColaborador("Daniel Freitas","da_freitas", "06:00"));
            return lista;
        },

        relatorioHorasColaboradorPendente : function (){
            lista = [];
            lista.push(montarItemRelatorioHorasColaboradorPendente("João","jr_silva"));
            lista.push(montarItemRelatorioHorasColaboradorPendente("Pedro","pd_pereira"));
            return lista;
        }


    };
});


