<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DispensationController;
use App\Http\Controllers\MedicineController; // ✅ use the correct namespace

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public Routes
Route::post('/login', [AuthController::class, 'login']);

// ========================
// MEDICINE INVENTORY API ROUTES
// ========================
Route::get('/medicines', [MedicineController::class, 'index']);
Route::post('/medicines', [MedicineController::class, 'store']);
Route::post('/medicines/{medicine}/adjust-stock', [MedicineController::class, 'adjustStock']);

// Protected Routes
Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);

    // Dispensation (if needed later)
    Route::middleware('role:Admin|Health Worker')->group(function () {
        Route::post('/dispense', [DispensationController::class, 'store']);
    });
});
