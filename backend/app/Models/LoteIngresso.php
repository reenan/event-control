<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LoteIngresso extends Model
{
    protected $fillable = [
        'evento_id',
        'descricao',
        'valor',
        'ingresso_estudante',
        'quantidade_maxima',
    ];

    public function evento()
    {
        return $this->belongsTo(Evento::class);
    }
}
