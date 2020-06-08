<?php

namespace Wolfie\Website\Providers;

use Illuminate\Support\ServiceProvider;

class WebsiteServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/../Resources/Views', 'wolfiewebsite');

    }

    public function register()
    {

    }
}
