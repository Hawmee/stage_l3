<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Offer extends Model
{
    use HasFactory;

    protected $fillable = [
        'unit_id','name',
        'theme','req_competence',
        'duration','place'
    ];


    public function interview(){
        return $this->hasMany(Interview::class , 'offer_id');
    }

    public function unit(){
        return $this->belongsTo(Unit::class , 'unit_id');
    }
}
