<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Inscricao extends Model
{
    protected $fillable = [
        'user_id',
        'lote_ingresso_id',
        'evento_id',
        'pagamento_realizado',
        'presente',
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class);
    }

    public function loteIngresso()
    {
        return $this->belongsTo(LoteIngresso::class);
    }

    public function evento()
    {
        return $this->belongsTo(Evento::class);
    }
}
