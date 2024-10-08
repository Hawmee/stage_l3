<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class persCellule extends Controller
{
    public function dashborad(){
        return Inertia::render('PersCellule/Dasboard');
    }
}
