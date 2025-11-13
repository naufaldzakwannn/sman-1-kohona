<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'nis',
        'name',
        'gender',
        'birth_place',
        'birth_date',
        'address',
        'phone',
        'email',
        'class_id',
        'parent_name',
        'parent_phone',
        'admission_year',
        'status'
    ];

    public function class()
    {
        return $this->belongsTo(Classes::class, 'class_id');
    }
}
