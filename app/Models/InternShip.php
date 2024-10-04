<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InternShip extends Model
{
    use HasFactory;


    protected $fillable = [
        'intern_id','unit_id','theme','book_link',
        'performance_id','status',
        'start_date','end_date'
    ];


    public function intern(){
        return $this->hasOne(Intern::class , 'intern_id');
    }

    public function unit(){
        return $this->belongsTo(Unit::class , 'unit_id');
    }

    public function performance(){
        return $this->hasOne(Performance::class , 'performance_id');
    }

    public function task(){
        return $this->hasMany(Task::class , 'internship_id');
    }

    public function attestation(){
        return $this->hasOne(Attestation::class , 'internships_id');
    }
}
