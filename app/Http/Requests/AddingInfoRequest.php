<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddingInfoRequest extends FormRequest
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
            "user_id" => "required",
            "last_name" => "required|string",
            "first_name" => "required|string",
            "Personal_Phone" => "required|string",
            "restaurant_name" => "required|string",
            "location" => "required|string",
            "restaurant_phone" => "required|string",
            "specielity" => "required",
            "profile_pic_url" => "file|required",


        ];
    }
}
