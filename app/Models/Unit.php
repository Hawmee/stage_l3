<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','isDivision',
        'isBureau','isDependant',
        'division_id'
    ];

    public function division(){
        return $this->belongsTo(Unit::class , 'division_id');
    }

    public function subdivision(){
        return $this->hasMany(Unit::class , 'division_id');
    }

    public function user(){
        return $this->hasMany(User::class , 'unit_id');
    }

    public function internsip(){
        return $this->hasMany(InternShip::class , 'unit_id');
    }

    public function offer(){
        return $this->hasMany(Offer::class , 'unit_id');
    }

    public function isDivision(){
        return $this->attributes['isDivision'];
    }


    public function isBureau(){
        return $this->attributes['isBureau'];
    }

    public function isDependant() {
        return $this->attributes['isDependant'];
    }
}
