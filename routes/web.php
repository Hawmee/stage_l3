<?php

use App\Http\Controllers\ChefSRB;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\RedirectIfNotAccepted;
use App\Http\Middleware\UserTypeCheking;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::redirect('/' , '/waiting')->name('home');

Route::middleware(['auth' ])->group(function(){
    Route::prefix('chef-SRB')->middleware([UserTypeCheking::class.":chefSRB"  , RedirectIfNotAccepted::class])
        ->group(function(){
            Route::get('/dashboard',[ChefSRB::class , 'dashboard'])->name('chefSRB.dashboard');

        });


    Route::prefix('chef-Unit')->middleware(UserTypeCheking::class.":chefUnit")->group(function(){
        Route::get('/dashboard',[ChefSRB::class , 'dasboard'])->name('chefUnit.dashboard');
    });


    Route::get('/waiting', function () {
        return Inertia::render('Waiting');
    })->name('waiting.page');

});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/unauthorized', function () {
    return Inertia::render('Unauthorized');
})->name('unauthorized');


require __DIR__.'/auth.php';
