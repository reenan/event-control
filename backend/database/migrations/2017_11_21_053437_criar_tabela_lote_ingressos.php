<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CriarTabelaLoteIngressos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lote_ingressos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('descricao');

            $table->integer('evento_id')->unsigned();
            $table->foreign('evento_id')->references('id')->on("eventos");

            $table->double('valor');
            $table->boolean('ingresso_estudante');
            $table->integer('quantidade_maxima');
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
