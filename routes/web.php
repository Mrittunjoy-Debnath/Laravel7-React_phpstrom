<?php

use Illuminate\Support\Facades\Route;






Route::get('/getCourseFeatures','HomeController@getCourseFeatures');

Route::get('/', function () {
    return view('index');
});

Route::get('{ReactRoutePath}', function () {
    return view('index');
})->where('ReactRoutePath','.*');
