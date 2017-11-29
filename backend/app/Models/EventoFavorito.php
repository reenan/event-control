<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class EventoFavorito extends Model
{
    protected $fillable = [
        'user_id',
        'evento_id'
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class);
    }

    public function evento()
    {
        return $this->belongsTo(Evento::class);
    }
}
