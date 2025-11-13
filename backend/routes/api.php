<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClassesController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;

Route::get('/test', function () {
    return response()->json([
        'message' => 'API Laravel 12 aktif 🚀',
        'status' => 'success'
    ]);
});

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('teachers', TeacherController::class);
    Route::apiResource('students', StudentController::class);
    Route::apiResource('classes', ClassesController::class);
    Route::post('/logout', [AuthController::class, 'logout']);
});
