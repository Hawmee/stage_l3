<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ChefSRB extends Controller
{
    public function accounts(){
        return Inertia::render('ChefSRB/Accounts');
    }

    public function attestations(){
        return Inertia::render('ChefSRB/Attestations');
    }

    public function dashboard(){
        return Inertia::render('ChefSRB/Dashboard');
    }


    public function interns(){
        return Inertia::render('ChefSRB/Interns');
    }

    public function internships(){
        return Inertia::render('ChefSRB/InternShip');
    }


    public function interview(){
        return Inertia::render('ChefSRB/Interview');
    }


    public function offers(){
        return Inertia::render('ChefSRB/Offers');
    }

    public function profile(){
        return Inertia::render('ChefSRB/Profile');
    }

    public function units(){
        return Inertia::render('ChefSRB/Units/Index');
    }
}
