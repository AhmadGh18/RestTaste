<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddPostRequest;
use App\Models\Post;
use App\Models\Restaurant;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    // public function Addprod(AddPostRequest $req)
    // {
    //     $data = $req->validated();

    //     $data["posted_at"] = now()->format('Y-m-d-H-i'); // Use now() instead of date() for Laravel

    //     $data["price"] = $data['price'] . $data['currency'];
    //     $price = $data['price'];
    //     $cur = $data['currency'];

    //     if ($req->hasFile('image')) {
    //         $file = $req->file('image');
    //         $filename = $file->getClientOriginalName();
    //         $fileName = now()->format('His') . $filename;

    //         $path = $file->storeAs('images', $fileName, 'public');

    //         $data['pic_url'] = $path;
    //     }
    //     $user = Auth::user();


    //     Post::create($data);

    //     return response()->json(['message' => 'Item added successfully'], 200);
    // }
    public function Addprod(AddPostRequest $req)
    {
        $data = $req->validated();

        $data["posted_at"] = now()->format('Y-m-d');

        // Concatenate price and currency
        $data["price"] = $data['price'] . $data['currency'];

        if ($req->hasFile('image')) {
            $file = $req->file('image');
            $fileName = now()->format('His') . $file->getClientOriginalName();

            // Store the file and get the path
            $path = $file->store('images', 'public');

            // Assign the path to the 'image' field
            $data['image'] = $path;
        }

        // Get the authenticated user
        $user = Auth::user();

        // Create a new Post instance with the data and save it
        $post = Post::create($data);

        return response()->json(['message' => 'Item added successfully'], 200);
    }

    public function getItems()
    {
        $user = Auth::user();
        $restaurant = Restaurant::where('user_id', $user->id)->first();

        if ($restaurant) {
            $items = Post::where('restaurant_id', $restaurant->id)->get();

            return $items->isNotEmpty()
                ? response()->json(['items' => $items], 200)
                : response()->json(['message' => 'No Items'], 404);
        }

        return response()->json(['message' => 'User does not have a restaurant'], 404);
    }
    // public function AllPosts()
    // {
    //     $Allresturants = Post::inRandomOrder()->get();
    //     if (!$Allresturants) {
    //         return response()->json(['message' => 'No Post'], 404);
    //     } else {
    //         return response()->json($Allresturants);
    //     }
    // }
    public function AllPosts()
    {
        $AllPosts = Post::inRandomOrder()->with('restaurant')->get();

        if ($AllPosts->isEmpty()) {
            return response()->json(['message' => 'No Posts'], 404);
        } else {
            return response()->json($AllPosts);
        }
    }
    public function SingleRestaurantItem($restaurant_name)
    {
        $restaurant_name = trim($restaurant_name);

        // Find the restaurant by name
        $restaurant = Restaurant::where('restaurant_name', $restaurant_name)->first();

        if (!$restaurant) {
            return response()->json(['message' => 'Restaurant not found'], 404);
        }

        $posts = Post::where('restaurant_id', $restaurant->id)->get();

        if ($posts->isEmpty()) {
            return response()->json(['message' => 'No Posts for this restaurant'], 404);
        } else {
            // Combine restaurant details with posts and return
            $result = [
                'restaurant' => $restaurant,
                'posts' => $posts
            ];

            return response()->json($result);
        }
    }
}