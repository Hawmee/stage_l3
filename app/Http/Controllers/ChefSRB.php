<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;

class ChefSRB extends Controller
{
    public function accounts(){

        // $column = Schema::getColumnListing('users');

        // $column = array_diff($column , [''])

        $accounts = User::where('isChefSRB' , false)->get();

        return Inertia::render('ChefSRB/Accounts/Index');
    }

    public function attestations(){
        return Inertia::render('ChefSRB/Attestations/Index');
    }

    public function dashboard(){
        return Inertia::render('ChefSRB/Dashboard/Index');
    }

    public function interns(){
        return Inertia::render('ChefSRB/Interns/Index');
    }

    public function internships(){
        return Inertia::render('ChefSRB/InternShip/Index');
    }

    public function interview(){
        return Inertia::render('ChefSRB/Interview/Index');
    }

    public function offers(){
        return Inertia::render('ChefSRB/Offers/Index');
    }

    public function profile(){
        return Inertia::render('ChefSRB/Profile/Index');
    }

    public function units(){
        return Inertia::render('ChefSRB/Units/Index');
    }
}
