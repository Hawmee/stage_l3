<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfNotAccepted
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response{

        $user=Auth::user();

        if(!$user){
            return redirect()->route('login');
        }

        if($user && !$user->status){
            return redirect()->route('WaitingPage');
        }

        if($user && $user->status){
            return  $this->redirectToSpecifiedLayout($user);
        }

        return $next($request);
    }


    public function redirectToSpecifiedLayout($user){
        if($user->isChefSRB){
            return redirect()->route('chefSRB.Dasboard');
        }
        elseif($user->isChefUnit){
            return redirect()->route('chefUnit.Dasboard');
        }
        elseif($user->isPersCellule){
            return redirect()->route('persCellule.Dasboard');
        }
        elseif($user->isPersSecretariat){
            return redirect()->route('persSecretariat.Dasboard');
        }
    }
}



