<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\CourseFeature;
class HomeController extends Controller
{
    function getCourseFeatures()
    {
        $result = CourseFeature::all();
        return $result;
    }
}
