<?php

namespace App\Http\Controllers;

use App\Models\Inscricao;
use Log;
use App\Models\Evento;
use Illuminate\Http\Request;

class EventoController extends Controller
{
    private $evento;

    public function __construct(Evento $evento)
    {
        $this->evento = $evento;
    }

    public function index()
    {
        try {
            return Evento::all();
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function listarEventos($id)
    {
        try
        {
            return Inscricao::where("user_id", "=", $id)->get();
        }
        catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function find($id)
    {
        try {
            return Evento::find($id);
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        try
        {
            $evento = Evento::create($request->all());
            return $evento;
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $evento = Evento::find($id);
            $evento->update($request->all());
            return $evento;
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function delete($id)
    {
        try {
            $evento = Evento::find($id);
            $evento->delete();
            return "OK";
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }
}
