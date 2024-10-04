<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Intern extends Model
{
    use HasFactory;

    protected $fillable=[
        'name','last_name',
        'mail','phone',
        'grade','degree',
        'etablissement',
    ];

    public function InternShip(){
        return $this->belongsTo(InternShip::class , 'intern_id');
    }
}
