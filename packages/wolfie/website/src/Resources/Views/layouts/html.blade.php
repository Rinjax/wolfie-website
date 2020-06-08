<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css">
    @stack('headcss')

    <script src="https://js.stripe.com/v3/"></script>

</head>
<body>
    @yield('body')
    <script src="{!! asset(mix('js/app.js', 'website')) !!}"></script>
    @stack('scripts')
</body>
</html>
