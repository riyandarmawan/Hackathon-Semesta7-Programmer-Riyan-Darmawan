<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $props = [
            'title' => 'Complaint Form',
        ];

        return Inertia::render('home/index', $props);
    }
}
