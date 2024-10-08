<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ChefSRB extends Controller
{
    public function dashboard(){
        return Inertia::render('ChefSRB/Dashboard');
    }
}
