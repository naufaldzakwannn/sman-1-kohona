<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    protected $fillable = [
        'nip',
        'name',
        'gender',
        'birth_place',
        'birth_date',
        'address',
        'phone',
        'email',
        'subject',
        'hire_date',
        'status',
    ];


    // Contoh relasi (opsional, bisa ditambahkan jika nanti teacher terkait dengan class)
    public function classes()
    {
        return $this->hasMany(Classes::class, 'teacher_id');
    }
}
