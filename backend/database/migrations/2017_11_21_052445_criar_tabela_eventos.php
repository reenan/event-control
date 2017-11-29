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
        Schema::create('eventos', function (Blueprint $table)
        {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->string('descricao');
            $table->string('endereco');
            $table->string('nome');
            $table->string('valor');
            $table->date('data_fim');
            $table->boolean('favorito')->default(false);
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
        Schema::dropIfExists('eventos');
    }
}
