<?php

namespace App\Http\Controllers;

use App\Models\OrganizacaoEvento;
use Illuminate\Http\Request;

class OrganizacaoEventoController extends Controller
{
    private $organizacaoEvento;

    public function __construct(OrganizacaoEvento $organizacaoEvento)
    {
        $this->organizacaoEvento = $organizacaoEvento;
    }

    public function index()
    {
        try {
            return OrganizacaoEvento::all();
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function find($id)
    {
        try {
            return OrganizacaoEvento::find($id);
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $organizacaoEvento = OrganizacaoEvento::create($request->all());
            return $organizacaoEvento;
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $organizacaoEvento = OrganizacaoEvento::find($id);
            $organizacaoEvento->update($request->all());
            return $organizacaoEvento;
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    public function delete($id)
    {
        try {
            $organizacaoEvento = OrganizacaoEvento::find($id);
            $organizacaoEvento->delete();
            return "OK";
        } catch (\Exception $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }
}
