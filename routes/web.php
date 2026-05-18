<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StaffController;
use App\Models\MedicineBatch;
use App\Http\Controllers\MedicineBatchController;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/login');
});

Route::middleware(['auth'])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->middleware('admin');

    Route::get('/admin/create-staff', function () {
        return Inertia::render('Admin/CreateStaff');
    })->middleware('admin');

    Route::post('/admin/create-staff', [StaffController::class, 'store'])
        ->middleware('admin');

    /*
    |--------------------------------------------------------------------------
    | Batch Tracking Page
    |--------------------------------------------------------------------------
    */

    Route::get('/batch-tracking', function () {
        return Inertia::render('BatchTracking');
    });

    /*
    |--------------------------------------------------------------------------
    | Medicine Batches Page
    |--------------------------------------------------------------------------
    */

    Route::get('/medicine-batches-page', function () {
        return Inertia::render('MedicineBatches');
    });

    /*
    |--------------------------------------------------------------------------
    | Test Routes
    |--------------------------------------------------------------------------
    */

    Route::get('/test-batches', function () {

        $batches = MedicineBatch::all();

        return $batches;
    });

    Route::get('/add-batch', function () {

        MedicineBatch::create([
            'medicine_id' => 1,
            'batch_number' => 'BATCH-001',
            'date_received' => now(),
            'expiration_date' => '2026-12-31',
            'quantity_received' => 100,
            'quantity_remaining' => 100,
        ]);

        return 'Batch Added Successfully';
    });

    /*
    |--------------------------------------------------------------------------
    | Medicine Batch API
    |--------------------------------------------------------------------------
    */

    Route::get('/batches', [MedicineBatchController::class, 'index']);

    Route::post('/batches', [MedicineBatchController::class, 'store']);

    Route::delete('/batches/{id}', [MedicineBatchController::class, 'destroy']);

    Route::put('/batches/{id}', [MedicineBatchController::class, 'update']);
});

require __DIR__.'/auth.php';