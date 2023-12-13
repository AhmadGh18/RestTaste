<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    use HasFactory;
    protected $fillable = [
        "user_id",
        'restaurant_name',
        'restaurant_phone',
        "location",
        "joining_date",
        "profile_pic_url"

    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
