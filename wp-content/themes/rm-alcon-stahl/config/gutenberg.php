<?php

// Set Domain
$domain = 'rm-alcon-stahl';
$main   = 'rm-alcon-stahl-main-category';


/**
 * Gutenberg blocks configuration
 */
return [

    // Define block categories
    'categories' => [
        [
            'slug'    => $main,
            'title'    => __('RM Alcon Stahl', $domain),
            'icon'    => 'block-default'
        ]
    ],

    // Define Custom Blocks
    'blocks' => [

        // Text and image
        'text-and-image' => [
            'name'          => 'text-and-image',
            'domain'        => $domain,
            'dependency'    => [
                'wp-i18n',
                'wp-element',
                'wp-blocks',
                'wp-block-editor',
                'wp-components',
                'wp-api',
                'wp-data',
            ],
            'title'         => __('Text & image', $domain),
            'description'   => __('Generate Text & Image section.', $domain),
            'icon'          => 'embed-photo',
            'category'      => $main
        ],

    ],

];