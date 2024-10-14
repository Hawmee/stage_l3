<?php

namespace App\Http\Controllers;

use App\Models\InternShip;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChefUnit extends Controller
{
    public function dasboard(){
        return Inertia::render('ChefUnit/Dasboard/Index');
    }

    public function internship(){

        $internships = InternShip::all();

        return Inertia::render('ChefUnit/InternShips/Index' , [
            'internships'=>$internships ,
        ]);
    }

    public function task(){
        return Inertia::render('ChefUnit/tasks/Index');
    }

    public function offer() {
        return Inertia::render('ChefUnit/Offers/Index');
    }

}
