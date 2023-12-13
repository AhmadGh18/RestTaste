<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "restaurant_id" => "required",
            "title" => "required|string",
            "description" => "string",
            "price" => "required",
            "image" => "file|required",
            "currency" => "required",
            "tags" => "nullable",
            "category" => "nullable",


        ];
    }
}
