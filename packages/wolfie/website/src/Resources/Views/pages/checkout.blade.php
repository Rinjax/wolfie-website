@extends('wolfiewebsite::layouts.master')

@section('content')

    <div id="vue"></div>

@endsection

@push('scripts')

    <script src="{!! asset(mix('js/checkout.js', 'website')) !!}"></script>

@endpush
