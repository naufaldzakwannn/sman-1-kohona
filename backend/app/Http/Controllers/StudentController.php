<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class StudentController extends Controller
{
    // Menampilkan semua student
    public function index()
    {
        $students = Student::with('class')->get();
        return response()->json($students);
    }

    // Menambahkan student baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nis' => 'required|unique:students,nis',
            'name' => 'required|string|max:255',
            'gender' => 'required|in:L,P',
            'birth_place' => 'required|string|max:255',
            'birth_date' => 'required|date',
            'address' => 'required|string',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|unique:students,email',
            'class_id' => 'required|exists:classes,id',
            'parent_name' => 'required|string|max:255',
            'parent_phone' => 'required|string|max:20',
            'admission_year' => 'required|digits:4|integer',
            'status' => 'required|in:Aktif,Lulus,Nonaktif',
        ]);

        $student = Student::create($validated);

        return response()->json($student, 201);
    }

    // Menampilkan student berdasarkan ID
    public function show($id)
    {
        $student = Student::with('class')->findOrFail($id);
        return response()->json($student);
    }

    // Mengupdate student berdasarkan ID
    public function update(Request $request, $id)
    {
        $student = Student::findOrFail($id);

        $validated = $request->validate([
            'nis' => ['required', Rule::unique('students')->ignore($student->id)],
            'name' => 'required|string|max:255',
            'gender' => 'required|in:L,P',
            'birth_place' => 'required|string|max:255',
            'birth_date' => 'required|date',
            'address' => 'required|string',
            'phone' => 'required|string|max:20',
            'email' => ['required', 'email', Rule::unique('students')->ignore($student->id)],
            'class_id' => 'required|exists:classes,id',
            'parent_name' => 'required|string|max:255',
            'parent_phone' => 'required|string|max:20',
            'admission_year' => 'required|digits:4|integer',
            'status' => 'required|in:Aktif,Lulus,Nonaktif',
        ]);

        $student->update($validated);

        return response()->json($student);
    }

    // Menghapus student berdasarkan ID
    public function destroy($id)
    {
        $student = Student::findOrFail($id);
        $student->delete();

        return response()->json(null, 204);
    }
}
