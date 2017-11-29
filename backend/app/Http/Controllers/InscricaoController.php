<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use App\Models\Inscricao;
use Illuminate\Http\Request;

class InscricaoController extends Controller
{
    private $inscricao;

    public function __construct(Inscricao $inscricao)
    {
        $this->inscricao = $inscricao;
    }

    public function index()
    {
        try {
            return Inscricao::all();
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function find($id)
    {
        try {
            return Inscricao::find($id);
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $inscricao = Inscricao::create($request->all());
            return $inscricao;
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $inscricao = Evento::find($id);
            $inscricao->update($request->all());
            return $inscricao;
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function delete($id)
    {
        try {
            $inscricao = Evento::find($id);
            $inscricao->delete();
            return "OK";
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }
}
