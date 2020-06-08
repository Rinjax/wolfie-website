<?php

namespace Wolfie\Website\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Wolfie\Stripe\Managers\StripeManager;

class CheckoutController extends Controller
{

    protected $manager;


    public function __construct(StripeManager $manager)
    {
        $this->manager = $manager;
    }

    public function createStripeSession(Request $request)
    {
        try{
            $session = $this->manager->createSession($request->input('cart'));
            return response()->json([
                'success' => true,
                'id' => $session->id
            ]);

        }catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ]);
        }
    }
}