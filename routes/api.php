<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MedicineBatchController;

// MEDICINE BATCH ROUTES

Route::get('/batches', [MedicineBatchController::class, 'index']);

Route::post('/batches', [MedicineBatchController::class, 'store']);

Route::put('/batches/{id}', [MedicineBatchController::class, 'update']);

Route::delete('/batches/{id}', [MedicineBatchController::class, 'destroy']);