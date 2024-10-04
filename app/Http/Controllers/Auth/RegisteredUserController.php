<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Unit;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{

    public function create(): Response{
        $units = Unit::all();
        return Inertia::render('Auth/Register' , [
            'units'=>$units,
        ]);
    }

    // /**
    //  * Handle an incoming registration request.
    //  *
    //  * @throws \Illuminate\Validation\ValidationException
    //  */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'matricule' => 'required|string|lowercase|max:15|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'user_type'=>'required|in:isChefSRB,isChefUnit,isPersCellule,isPersSecretariat',
            'unit_id'=>'required_if:isChefSRB,true|required_if:isChefSRB,true|required_if:isChefSRB,true|nullable|integer'
        ]);


        $user_data=[
            'name'=>$request->name,
            'last_name'=>$request->last_name,
            'email'=>$request->email,
            'matricule'=>$request->matricule,
            'password'=>Hash::make($request->password),
            'isChefSRB' => false,
            'isChefUnit' => false,
            'isPersCellule' => false,
            'isPersSecretariat' => false,
            'unit_id'=>$request->unit_id,
        ];


        if ($request->user_type === 'isChefSRB') {
            $user_data['isChefSRB'] = true;
        } elseif ($request->user_type === 'isChefUnit') {
            $user_data['isChefUnit'] = true;
        } elseif ($request->user_type === 'isPersCellule') {
            $user_data['isPersCellule'] = true;
        } elseif ($request->user_type === 'isPersSecretariat') {
            $user_data['isPersSecretariat'] = true;
        }

        $user = User::create($user_data);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
