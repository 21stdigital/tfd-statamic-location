<?php

namespace TFD\Location;
use Statamic\Providers\AddonServiceProvider;


class ServiceProvider extends AddonServiceProvider
{

    protected $scripts = [
        __DIR__ . '/../public/js/cp.js',
    ];

    protected $fieldtypes = [
        \TFD\Location\Location::class,
    ];
}
