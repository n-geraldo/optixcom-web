<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PppoeClient extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'username',
        'password',
        'phone',
        'address',
        'package_id',
        'expiry_date',
        'status',
        'comment',
    ];

    protected $casts = [
        'expiry_date' => 'date',
    ];

    public function package()
    {
        return $this->belongsTo(Package::class);
    }
}
