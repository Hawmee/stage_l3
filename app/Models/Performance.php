<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Performance extends Model
{
    use HasFactory;

    protected $fillable=[
        'communication','problem_solving','Integrity',
        'time_respect','respect','autonomy','attendance'
    ];



    public function internShip(){
        return $this->belongsTo(InternShip::class , 'performance_id');
    }
}
