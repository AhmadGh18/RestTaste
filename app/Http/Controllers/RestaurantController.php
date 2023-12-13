<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddingInfoRequest;
use App\Models\Post;
use App\Models\Restaurant;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RestaurantController extends Controller
{

    public function AddingInfo(AddingInfoRequest $req)
    {
        $data = $req->validated();

        // Update the user information
        $user = User::find($data["user_id"]);
        if (!$user) {
            return response("No user found", 404);
        }

        $user->update([
            "first_name" => $data["first_name"],
            "last_name" => $data["last_name"],
            "Personal_Phone" => $data["Personal_Phone"]
        ]);

        // Create or update the restaurant information
        $restaurant = Restaurant::updateOrCreate(
            ['user_id' => $data["user_id"]],
            [
                "restaurant_name" => $data["restaurant_name"],
                "location" => $data["location"],
                "restaurant_phone" => $data["restaurant_phone"],
                "specielity" => $data["specielity"],
                "joining_date" => now()->format('Y-m-d H:i:s')
            ]
        );

        // Handle profile picture upload
        if ($req->hasFile('profile_pic_url')) {
            $file = $req->file('profile_pic_url');
            $fileName = now()->format('His') . $file->getClientOriginalName();

            $path = $file->storeAs('images', $fileName, 'public');

            $restaurant->update(['profile_pic_url' => $path]);
        }

        return response()->json(["restaurant" => $restaurant], 201);
    }
    public function getRes(Request $req)
    {
        $user = Auth::user(); // Get the current user

        if ($user) {
            $restaurant = Restaurant::where('user_id', $user->id)->first();

            if ($restaurant) {
                return response()->json(['restaurant' => $restaurant], 200);
            } else {
                return response()->json(['message' => 'Restaurant not found for the current user'], 404);
            }
        } else {
            return response()->json(['message' => 'No user is authenticated'], 401);
        }
    }
    public function AllRestaurants()
    {
        $Allresturants = Restaurant::all();
        if (!$Allresturants) {
            return response()->json(['message' => 'No restaurant'], 404);
        } else {
            return response()->json($Allresturants);
        }
    }
}
