<?php

namespace App\Http\Controllers;

use App\Http\Requests\FilterRequest;
use App\Models\Post;
use Illuminate\Http\Request;

class FilterController extends Controller
{
    public function filtersItem(FilterRequest $req)
    {
        $data = $req->validated();
        $tags = $req["tags"];
        for ($i = 0; i < sizeof($tags); $i++) {
        }
        $Items = Post::where("price", $data["price"] ? $data["price"] : "")->where("location", $data["location"] ? $data["location"] : "");
        if ($Items) {
            return response()->json(["filter_response" => $Items]);
        } else {
            return response()->json(['message' => 'No items were found.']);
        }
    }
}
