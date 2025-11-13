<?php

namespace App\Http\Controllers;

use App\Models\Classes;
use Illuminate\Http\Request;

class ClassesController extends Controller
{
    // Menampilkan semua classes
    public function index()
    {
        $classes = Classes::all();
        return response()->json($classes);
    }

    // Menambahkan class baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'class_name' => 'required|string|max:255',
            'grade' => 'required|string|max:50',
            'major' => 'nullable|string|max:100',
            'teacher_id' => 'nullable|exists:teachers,id',
            'room' => 'nullable|string|max:50',
        ]);

        $class = Classes::create($validated);

        return response()->json($class, 201);
    }

    // Menampilkan class berdasarkan ID
    public function show($id)
    {
        $class = Classes::findOrFail($id);
        return response()->json($class);
    }

    // Mengupdate class berdasarkan ID
    public function update(Request $request, $id)
    {
        $class = Classes::findOrFail($id);

        $validated = $request->validate([
            'class_name' => 'required|string|max:255',
            'grade' => 'required|string|max:50',
            'major' => 'nullable|string|max:100',
            'teacher_id' => 'nullable|exists:teachers,id',
            'room' => 'nullable|string|max:50',
        ]);

        $class->update($validated);

        return response()->json($class);
    }

    // Menghapus class berdasarkan ID
    public function destroy($id)
    {
        $class = Classes::findOrFail($id);
        $class->delete();

        return response()->json(null, 204);
    }
}
