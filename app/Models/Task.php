<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable=[
        'internship_id','name',
        'status','start_date',
        'end_date',
    ];


    public function internship(){
        return $this->belongsTo(InternShip::class , 'internship_id');
    }
}
