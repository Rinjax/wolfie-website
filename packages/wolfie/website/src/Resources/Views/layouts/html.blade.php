<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title')</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    @stack('headcss')


</head>
<body>
    @yield('body')
    <script src="{!! asset(mix('js/app.js', 'website')) !!}"></script>
    @stack('scripts')
</body>
</html>
