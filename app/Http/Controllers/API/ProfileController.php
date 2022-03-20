<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;

use App\Models\Profile;

class ProfileController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Profile::all();
        if (empty($data)) return $this->isEmpty();
        return $this->sendResponse(true, $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $hasOnly = $request->has(['nama_sekolah', 'visi', 'misi', 'alamat', 'email', 'website', 'no_tlp']);

        if ($hasOnly) {
            $data = [
                'nama_sekolah' => $request->nama_sekolah,
                'visi' => $request->visi,
                'misi' => $request->misi,
                'alamat' => $request->alamat,
                'email' => $request->email,
                'website' => $request->website,
                'no_tlp' => $request->no_tlp,
            ];

            Profile::create($data);

            return $this->sendResponse(true, $data);
        } else {
            return $this->wasWrong();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Profile::where('id', $id)->first();
        if (empty($data)) return $this->isEmpty();

        return $this->sendResponse(true, $data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $check = Profile::where('id', $id)->first();
        $hasAny = $request->hasAny(['nama_sekolah', 'visi', 'misi', 'alamat', 'email', 'website', 'no_tlp']);

        if (!empty($check) && $hasAny) {
            $data = [
                'nama_sekolah' => $request->nama_sekolah ?: $check->nama_sekolah,
                'visi' => $request->visi ?: $check->visi,
                'misi' => $request->misi ?: $check->misi,
                'alamat' => $request->alamat ?: $check->alamat,
                'email' => $request->email ?: $check->email,
                'website' => $request->website ?: $check->website,
                'no_tlp' => $request->no_tlp ?: $check->no_tlp,
            ];

            Profile::where('id', $id)->update($data);

            return $this->sendResponse(true, $data);
        } else {
            return $this->wasWrong();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Profile::where('id', $id)->delete();
        return response()->json(['message' => 'data has been deleted.']);
    }
}
