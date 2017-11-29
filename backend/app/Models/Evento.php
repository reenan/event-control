<?php

namespace App\Models;

use Carbon\Carbon;
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

    public function getDataInicioAttribute($value)
    {
        if (is_null($value)) {
            return $value;
        }

        return Carbon::parse($value)->format('d/m/Y');
    }

    public function setDataInicioAttribute($value)
    {
        if (!is_null($value)) {
            $value = Carbon::createFromFormat('d/m/Y', $value);
        }

        $this->attributes['data_inicio'] = $value;
    }

    public function getDataFimAttribute($value)
    {
        if (is_null($value)) {
            return $value;
        }

        return Carbon::parse($value)->format('d/m/Y');
    }

    public function setDataFimAttribute($value)
    {
        if (!is_null($value)) {
            $value = Carbon::createFromFormat('d/m/Y', $value);
        }

        $this->attributes['data_fim'] = $value;
    }
}
