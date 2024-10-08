<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ChefUnit extends Controller
{
    public function dasboard(){
        return Inertia::render('ChefUnit/Dasboard');
    }
}
