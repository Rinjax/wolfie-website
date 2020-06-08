let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('./public/website');

mix.setResourceRoot('/website/');

mix.js('packages/wolfie/website/src/Resources/Assets/js/app.js', 'js/app.js')
    .js('packages/wolfie/website/src/Resources/Assets/js/main.js', 'js/main.js')
    .sourceMaps();
    //.version();