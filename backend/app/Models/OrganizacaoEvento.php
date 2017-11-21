<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class OrganizacaoEvento extends Model
{
    protected $fillable = [
        'user_id',
        'evento_id',
        'usuario_admin'
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
