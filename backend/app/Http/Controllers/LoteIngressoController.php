<?php

namespace App\Http\Controllers;

use App\Models\LoteIngresso;
use Illuminate\Http\Request;

class LoteIngressoController extends Controller
{
    private $loteIngresso;

    public function __construct(LoteIngresso $loteIngresso)
    {
        $this->loteIngresso = $loteIngresso;
    }

    public function index()
    {
        try {
            return LoteIngresso::all();
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function find($id)
    {
        try {
            return LoteIngresso::find($id);
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $loteIngresso = LoteIngresso::create($request->all());
            return $loteIngresso;
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $loteIngresso = LoteIngresso::find($id);
            $loteIngresso->update($request->all());
            return $loteIngresso;
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function delete($id)
    {
        try {
            $loteIngresso = LoteIngresso::find($id);
            $loteIngresso->delete();
            return "OK";
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }
}
