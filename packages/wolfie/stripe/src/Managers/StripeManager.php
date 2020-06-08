<?php

namespace Wolfie\Stripe\Managers;

use Stripe\Stripe;

class StripeManager
{
    protected $stripe;

    public function __construct()
    {
        $this->stripe = new Stripe();

        $this->stripe::setApiKey(config('services.stripe.key'));
    }

    public function createSession(array $items)
    {
        return \Stripe\Checkout\Session::create([
            'payment_method_types' => ['card'],
            'line_items' => $items,
            'mode' => 'payment',
            'success_url' => env('STRIPE_SUCCESS_URL'),
            'cancel_url' => env('STRIPE_CANCEL_URL')
        ]);
    }
}