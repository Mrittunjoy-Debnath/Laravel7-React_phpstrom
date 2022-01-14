<?php

namespace App\Http\Controllers;
use App\CoursePlan;
use App\PaymentGuide;
use Illuminate\Http\Request;

use App\CourseFeature;
class HomeController extends Controller
{
    function getCourseFeatures()
    {
        $result = CourseFeature::all();
        return $result;
    }
    function getCoursePlan()
    {
        $result = CoursePlan::all();
        return $result;
    }
    function getPaymentGuide()
    {
        $result = PaymentGuide::all();
        return $result;
    }
}
