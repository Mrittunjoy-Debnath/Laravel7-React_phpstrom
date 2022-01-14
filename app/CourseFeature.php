<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CourseFeature extends Model
{
    protected $fillable = [
        'img', 'title', 'des',
    ];
}
