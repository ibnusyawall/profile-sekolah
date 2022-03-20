<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1'], function() {
    Route::post('auth/login', 'AuthController@login');
});


Route::group(['prefix' => 'v1'], function() {
    Route::get('public/profile/{id}', 'ProfileController@show');
    Route::group(['middleware' => 'auth:api'], function() {
        Route::resource('profile', 'ProfileController');
    });
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

