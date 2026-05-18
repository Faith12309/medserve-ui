<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

// =============================================
// MAIN INVENTORY ROUTES (No forced login)
// =============================================
Route::get('/', function () {
    return view('inventory');
})->name('home');

Route::get('/inventory', function () {
    return view('inventory');
})->name('inventory');

Route::get('/dashboard', function () {
    return view('inventory');
})->name('dashboard');

// =============================================
// AUTHENTICATED ROUTES
// =============================================
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Inertia Dashboard (optional)
Route::middleware(['auth', 'verified'])->get('/inertia-dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('inertia.dashboard');

require __DIR__.'/auth.php';
