<?php

namespace Wolfie\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = ['id'];

    protected $casts = [
        'price' => 'array',
        'meta' => 'array'
    ];
}
