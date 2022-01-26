<?php

namespace App\Http\Controllers;
use App\CoursePlan;
use App\MoreSeries;
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

    function getMoreSeries()
    {
        $result = MoreSeries::all();
        return $result;
    }

    public  function home()
    {
        return view('home');
    }
}
