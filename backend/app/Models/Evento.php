<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $fillable = [
        'endereco_id',
        'descricao',
        'data_inicio',
        'data_fim',
        'hora_inicio',
        'hora_fim'
    ];

    public function endereco()
    {
        return $this->belongsTo(Endereco::class);
    }
}
