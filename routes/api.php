<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RestaurantController;
use App\Http\Requests\AddPostRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, "logout"]);
    Route::post('/AddingInfo', [RestaurantController::class, "AddingInfo"]);
    Route::get('/getRes', [RestaurantController::class, "getRes"]);
    Route::post('/Addprod', [PostController::class, "Addprod"]);
    Route::get('/getItems', [PostController::class, "getItems"]);


    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
Route::post('/signup', [AuthController::class, "signup"]);
Route::post('/login', [AuthController::class, "login"]);
Route::get('/AllRestaurants', [RestaurantController::class, "AllRestaurants"]);
Route::get('/AllPosts', [PostController::class, "AllPosts"]);
Route::get('/SingleRestaurantItem/{restaurant_name}', [PostController::class, "SingleRestaurantItem"]);