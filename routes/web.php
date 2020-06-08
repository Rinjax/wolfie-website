<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('wolfiewebsite::pages.main');
});

Route::get('success', function () {
    dd('success');
});

Route::get('cancel', function(){
    dd('cancelled');
});

Route::get('dev', function(){
    $products = [
        [
            'price' => 'price_HMOelj7PuS6Sl9',
            'quantity' => 1
        ]
    ];

    $m = new \Wolfie\Stripe\Managers\StripeManager();

    dd($m->createSession($products));
});
