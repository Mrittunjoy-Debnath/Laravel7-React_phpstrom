<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CoursePlan extends Model
{
    protected $fillable = [
        'title', 'short_desc', 'key_points','video',
    ];
}
