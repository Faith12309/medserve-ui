<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StaffController;
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

    Route::post('/admin/create-staff', [StaffController::class, 'store'])->middleware('admin');
});

require __DIR__.'/auth.php';