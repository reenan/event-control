<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CriarTabelaInscricao extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inscricaos', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on("users");

            $table->integer('lote_ingresso_id')->unsigned();
            $table->foreign('lote_ingresso_id')->references('id')->on("lote_ingressos");

            $table->integer('evento_id')->unsigned();
            $table->foreign('evento_id')->references('id')->on("eventos");

            $table->boolean('pagamento_realizado');
            $table->boolean('presente');

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
