<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CriarTabelaEventos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eventos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('descricao');

            $table->integer('endereco_id')->unsigned();
            $table->foreign('endereco_id')->references('id')->on("enderecos");

            $table->date('data_inicio');
            $table->date('data_fim');
            $table->string('hora_inicio');
            $table->string('hora_fim');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
