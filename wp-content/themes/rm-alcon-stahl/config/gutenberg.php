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

        // Hero section
        'hero-section' => [
            'name'          => 'hero-section',
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
            'title'         => __('Hero section', $domain),
            'description'   => __('Generate Hero section.', $domain),
            'icon'          => 'cover-image',
            'category'      => $main
        ],

        // Text
        'text' => [
            'name'          => 'text',
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
            'title'         => __('Text', $domain),
            'description'   => __('Generate Text section.', $domain),
            'icon'          => 'text',
            'category'      => $main
        ],

        // Page header
        'page-header' => [
            'name'          => 'page-header',
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
            'title'         => __('Page header', $domain),
            'description'   => __('Generate Page header section.', $domain),
            'icon'          => 'admin-page',
            'category'      => $main
        ],

        // Table and image
        'table-and-image' => [
            'name'          => 'table-and-image',
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
            'title'         => __('Table & image', $domain),
            'description'   => __('Generate Table & Image section.', $domain),
            'icon'          => 'editor-table',
            'category'      => $main
        ],

    ],

];