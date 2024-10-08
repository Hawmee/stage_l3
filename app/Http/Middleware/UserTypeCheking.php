<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserTypeCheking
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next , $userType): Response{

        $user=Auth::user();


        if(!$user){
            return redirect()->route('login');
        }

        if(!$this->isUserType($user , $userType )){
            return redirect()->route('unauthorized');
        }


        return $next($request);
    }



    public function isUserType($user , $userType){
        $personal = $user->personal;
        switch ($userType) {
            case 'chefSRB':
                return $user->isChefSRB;
            case 'chefUnit':
                return $user->isChefUnite;
            case 'persCellule':
                return $personal->isPersCellule;
            case 'persSecretariat':
                return $personal->isPersSecretariat;
        }
    }
}
