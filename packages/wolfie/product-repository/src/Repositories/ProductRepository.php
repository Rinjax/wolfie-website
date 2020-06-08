<?php

namespace Wolfie\ProductRepository\Repositories;

use Wolfie\Models\Product;

class ProductRepository
{
    /**
     * Get all of the products
     * @return Product[]
     */
    public function getAll(): iterable
    {
        return Product::where('discontinued', false)->get();
    }
}