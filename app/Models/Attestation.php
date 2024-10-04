<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attestation extends Model
{
    use HasFactory;

    protected $fillable = ['internships_id','status'];


    public function intern_ship(){
        return $this->belongsTo(InternShip::class , 'internships_id');
    }

}
