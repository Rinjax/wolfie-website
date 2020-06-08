<?php

namespace Wolfie\Website\Http\Controllers;

use App\Http\Controllers\Controller;
use Wolfie\ProductRepository\Repositories\ProductRepository;

class ProductsController extends Controller
{
    protected $repo;

    public function __construct(ProductRepository $productRepository)
    {
        $this->repo = $productRepository;
    }
    public function getAll()
    {

        return response()->json($this->repo->getAll()->toArray());
    }
}