<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interview extends Model
{
    use HasFactory;

    protected $fillable = [
        'intern_id','offer_id','interviwe_date',
    ];

    public function intern(){
        return $this->hasOne(Intern::class , 'intern_id');
    }

    public function offer(){
        return $this->belongsTo(Offer::class , 'offer_id');
    }
}
