<?php

namespace Wolfie\Models\Seeds;

use Illuminate\Database\Seeder;
use Wolfie\Models\Product;

class SeedProducts extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        product::create([
            'name' => \Str::random(10),
            'price' => ['digital' => 5.99],
            'meta' => ['categories' => ['dark', 'demons', 'gay']]
        ]);
    }
}
