<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $fillable = [
        'name',
        'download_kbps',
        'upload_kbps',
        'price',
        'validity_days',
        'radius_group',
        'radius_attributes',
    ];

    protected $casts = [
        'radius_attributes' => 'array',
    ];
}
