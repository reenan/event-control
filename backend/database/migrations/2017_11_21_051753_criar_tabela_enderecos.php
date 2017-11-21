<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaEnderecos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('enderecos', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('descricao')->nullable();
            $table->string('logradouro');
            $table->string('numero')->nullable();
            $table->string('cep');
            $table->string('bairro');
            $table->string('municipio');
            $table->string('estado');
            $table->string('pais');
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
