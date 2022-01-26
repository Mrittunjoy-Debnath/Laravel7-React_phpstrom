<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/details','UserController@details');
//Route::middleware('auth:sanctum')->post('/login','UserController@index');
//Route::get('/details','UserController@details');
Route::post("/login",'UserController@index');
