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
            Route::get('/accounts', [ChefSRB::class,'accounts'])->name('chefSRB.accounts');
            Route::get('/attestations' , [ChefSRB::class , 'atestations'] )->name('chefSRB.attestations');
            Route::get('/interns' , [ChefSRB::class , 'interns'])->name('chefSRB.interns');
            Route::get('/internships' , [ChefSRB::class , 'internships'])->name('chefSRB.internships');
            Route::get('/interview', [ChefSRB::class , 'interview'])->name('chefSRB.interview');
            Route::get('/offers' , [ChefSRB::class , 'offers'])->name('chefSRB.offers');
            Route::get('/profile' , [ChefSRB::class , 'profile'])->name('chefSRB.profile');
            Route::get('/units' , [ChefSRB::class , 'units'])->name('chefSRB.units');
        });


    Route::prefix('chef-Unit')->middleware(UserTypeCheking::class.":chefUnit")->group(function(){
        Route::get('/dashboard',[ChefSRB::class , 'dasboard'])->name('chefUnit.dashboard');
        Route::get('/internship',[ChefSRB::class , 'internship'])->name('chefUnit.internship');
        Route::get('/offers',[ChefSRB::class , 'offer'])->name('chefUnit.offer');

    });

    Route::prefix('staff-Cellule')->middleware(UserTypeCheking::class.":persCellule")->group (function(){
        Route::get('/dashboard',[ChefSRB::class , 'dasboard'])->name('chefUnit.dashboard');
        Route::get('/internship',[ChefSRB::class , 'internship'])->name('chefUnit.internship');
        Route::get('/offers',[ChefSRB::class , 'offer'])->name('chefUnit.offer');

    });


    Route::prefix('staff-Secretariat')->middleware(UserTypeCheking::class.":persSecretariat")->group(function(){
        Route::get('/dashboard',[ChefSRB::class , 'dasboard'])->name('chefUnit.dashboard');
        Route::get('/internship',[ChefSRB::class , 'internship'])->name('chefUnit.internship');
        Route::get('/offers',[ChefSRB::class , 'offer'])->name('chefUnit.offer');

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
