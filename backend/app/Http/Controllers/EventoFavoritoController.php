<?php

namespace App\Http\Controllers;

use App\Models\EventoFavorito;
use Illuminate\Http\Request;

class EventoFavoritoController extends Controller
{
    private $eventoFavorito;

    public function __construct(EventoFavorito $eventoFavorito)
    {
        $this->eventoFavorito = $eventoFavorito;
    }

    public function index()
    {
        try {
            return EventoFavorito::all();
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function find($id)
    {
        try {
            return EventoFavorito::find($id);
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $eventoFavorito = EventoFavorito::create($request->all());
            return $eventoFavorito;
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $eventoFavorito = EventoFavorito::find($id);
            $eventoFavorito->update($request->all());
            return $eventoFavorito;
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function delete($id)
    {
        try {
            $eventoFavorito = EventoFavorito::find($id);
            $eventoFavorito->delete();
            return "OK";
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }
}
