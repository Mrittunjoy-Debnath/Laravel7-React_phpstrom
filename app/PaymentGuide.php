<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentGuide extends Model
{
    protected $fillable = [
        'des', 'price', 'banner',
    ];
}
