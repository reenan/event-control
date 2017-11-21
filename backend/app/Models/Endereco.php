<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
    protected $fillable = [
        'descricao',
        'logradouro',
        'numero',
        'cep',
        'bairro',
        'municipio',
        'estado',
        'pais',
    ];

    public function eventos()
    {
        return $this->hasMany(Evento::class);
    }
}
