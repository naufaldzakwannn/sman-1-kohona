<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Teacher;
use Illuminate\Validation\Rule;

class TeacherController extends Controller
{
    // Menampilkan semua teacher
    public function index()
    {
        $teachers = Teacher::all();
        return response()->json($teachers);
    }

    // Menambahkan teacher baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nip' => 'required|unique:teachers,nip',
            'name' => 'required|string|max:255',
            'gender' => 'required|in:L,P',
            'birth_place' => 'required|string|max:255',
            'birth_date' => 'required|date',
            'address' => 'required|string',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|unique:teachers,email',
            'subject' => 'required|string|max:255',
            'hire_date' => 'required|date',
            'status' => 'required|in:aktif,Nonaktif,Cuti',
        ]);

        $teacher = Teacher::create($validated);

        return response()->json($teacher, 201);
    }

    // Menampilkan teacher berdasarkan ID
    public function show($id)
    {
        $teacher = Teacher::findOrFail($id);
        return response()->json($teacher);
    }

    // Mengupdate teacher berdasarkan ID
    public function update(Request $request, $id)
    {
        $teacher = Teacher::findOrFail($id);

        $validated = $request->validate([
            'nip' => ['required', Rule::unique('teachers')->ignore($teacher->id)],
            'name' => 'required|string|max:255',
            'gender' => 'required|in:L,P',
            'birth_place' => 'required|string|max:255',
            'birth_date' => 'required|date',
            'address' => 'required|string',
            'phone' => 'required|string|max:20',
            'email' => ['required', 'email', Rule::unique('teachers')->ignore($teacher->id)],
            'subject' => 'required|string|max:255',
            'hire_date' => 'required|date',
            'status' => 'required|in:aktif,Nonaktif,Cuti',
        ]);

        $teacher->update($validated);

        return response()->json($teacher);
    }

    // Menghapus teacher berdasarkan ID
    public function destroy($id)
    {
        $teacher = Teacher::findOrFail($id);
        $teacher->delete();

        return response()->json([
            'message' => 'Data Berhasil dihapus'
        ], 200);
    }
}
