<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        "restaurant_id",
        'price',
        'title',
        "description",
        "posted_at",
        "category",
        "tags",
        "image"


    ];
    use HasFactory;
    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class, 'restaurant_id');
    }
}
