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
            return redirect()->route('waiting.page');
        }

        return $next($request);
    }

}



