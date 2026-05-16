<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StaffController;
use Inertia\Inertia;
 use App\Models\User;
 

Route::get('/', function () {
    return redirect('/login');
});

Route::middleware(['auth'])->group(function () {

Route::get('/dashboard', function () {

    return Inertia::render('Dashboard', [

        'totalResidents' => 0,

        'pendingImmunizations' => 0,

        'lowStockCount' => 0,

        'nearExpiry' => 0,

        'residents' => [],

        'dispensedMedicines' => [],

        'announcements' => [],

        'alerts' => [

            [
                'title' => 'Low Stock Alert',
                'message' => 'Paracetamol inventory is running low.',
                'type' => 'warning',
            ],

            [
                'title' => 'Immunization Schedule',
                'message' => 'Vaccination tomorrow at 8 AM.',
                'type' => 'info',
            ],

        ],

    ]);

})->name('dashboard');
    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->middleware('admin')
      ->name('admin.dashboard');

    Route::get('/admin/create-staff', function () {
        return Inertia::render('Admin/CreateStaff');
    })->middleware('admin')
      ->name('admin.create-staff');

    Route::post('/admin/create-staff', [StaffController::class, 'store'])
        ->middleware('admin')
        ->name('admin.store-staff');
});

require __DIR__.'/auth.php';