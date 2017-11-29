<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api/v1'], function ($app) {
    $app->group(['prefix' => 'evento'], function ($rota) {
        $rota->get('', 'EventoController@index');
        $rota->get('{id}', 'EventoController@find');
        $rota->post('', 'EventoController@store');
        $rota->put('{id}', 'EventoController@update');
        $rota->delete('{id}', 'EventoController@delete');

        $rota->get('user/{id}', 'EventoController@listarEventos');
    });

    $app->group(['prefix' => 'endereco'], function ($rota) {
        $rota->get('', 'EnderecoController@index');
        $rota->get('{id}', 'EnderecoController@find');
        $rota->post('', 'EnderecoController@store');
        $rota->put('{id}', 'EnderecoController@update');
        $rota->delete('{id}', 'EnderecoController@delete');
    });

    $app->group(['prefix' => 'evento-favorito'], function ($rota) {
        $rota->get('', 'EventoFavoritoController@index');
        $rota->get('{id}', 'EventoFavoritoController@find');
        $rota->post('', 'EventoFavoritoController@store');
        $rota->put('{id}', 'EventoFavoritoController@update');
        $rota->delete('{id}', 'EventoFavoritoController@delete');
    });

    $app->group(['prefix' => 'inscricao'], function ($rota) {
        $rota->get('', 'InscricaoController@index');
        $rota->get('{id}', 'InscricaoController@find');
        $rota->post('', 'InscricaoController@store');
        $rota->put('{id}', 'InscricaoController@update');
        $rota->delete('{id}', 'InscricaoController@delete');
    });

    $app->group(['prefix' => 'lote-ingresso'], function ($rota) {
        $rota->get('', 'LoteIngressoController@index');
        $rota->get('{id}', 'LoteIngressoController@find');
        $rota->post('', 'LoteIngressoController@store');
        $rota->put('{id}', 'LoteIngressoController@update');
        $rota->delete('{id}', 'LoteIngressoController@delete');
    });

    $app->group(['prefix' => 'organizacao-evento'], function ($rota) {
        $rota->get('', 'OrganizacaoEventoController@index');
        $rota->get('{id}', 'OrganizacaoEventoController@find');
        $rota->post('', 'OrganizacaoEventoController@store');
        $rota->put('{id}', 'OrganizacaoEventoController@update');
        $rota->delete('{id}', 'OrganizacaoEventoController@delete');
    });

});