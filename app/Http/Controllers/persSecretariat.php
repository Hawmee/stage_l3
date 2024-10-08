<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class persSecretariat extends Controller
{
    public  function dashboard(){
        return Inertia::render('PersSecretariat/Dasboard');
    }
}
