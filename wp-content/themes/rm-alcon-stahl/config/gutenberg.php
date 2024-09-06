<?php

// Set Domain
$domain = 'rm-alcon-stahl';
$main   = 'rm-alcon-stahl-main-category';




// function render_pump_category_block() {

//     // Get all pump categories (terms from 'category' taxonomy)
//     $categories = get_terms(array(
//         'taxonomy' => 'category',
//         'hide_empty' => false,
//     ));

//     if (empty($categories) || is_wp_error($categories)) {
//         return 'No pump categories found';
//     }

//     // Start output buffering
//     ob_start();

//     echo '<div class="pump-categories">';

//     // Loop through categories and display pumps within each
//     foreach ($categories as $category) {
//         echo '<h2>' . esc_html($category->name) . '</h2>';

//         // Fetch pumps in this category
//         $args = array(
//             'post_type' => 'pump',
//             'tax_query' => array(
//                 array(
//                     'taxonomy' => 'category',
//                     'field' => 'term_id',
//                     'terms' => $category->term_id,
//                 ),
//             ),
//         );
//         $query = new WP_Query($args);

//         if ($query->have_posts()) {
//             echo '<ul>';
//             while ($query->have_posts()) {
//                 $query->the_post();
//                 echo '<li><a href="' . esc_url(get_permalink()) . '">' . get_the_title() . '</a></li>';
//             }
//             echo '</ul>';
//         } else {
//             echo '<p>No pumps found in this category.</p>';
//         }

//         echo '<a href="' . esc_url(get_category_link($category->term_id)) . '">View all pumps in ' . esc_html($category->name) . '</a>';
//     }

//     echo '</div>';

//     // End output buffering and return
//     return ob_get_clean();
// }


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

        // Map with text
        'map-with-text' => [
            'name'          => 'map-with-text',
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
            'title'         => __('Map with text', $domain),
            'description'   => __('Generate Map with text section.', $domain),
            'icon'          => 'sticky',
            'category'      => $main
        ],

        // Contact
        'contact' => [
            'name'          => 'contact',
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
            'title'         => __('Contact', $domain),
            'description'   => __('Generate Contact section.', $domain),
            'icon'          => 'phone',
            'category'      => $main
        ],

        // Pump category
        'pump-category' => [
            'name'          => 'pump-category',
            'domain'        => $domain,
            'dependency'    => [
                'wp-editor',
                'wp-api-fetch',
                'wp-i18n',
                'wp-element',
                'wp-blocks',
                'wp-block-editor',
                'wp-components',
                'wp-api',
                'wp-data',
            ],
            'title'         => __('Pump category', $domain),
            'description'   => __('Generate Pump category section.', $domain),
            'icon'          => 'category',
            'category'      => $main,
            'render_cb'     => function() {

                // Get all pump categories (terms from 'category' taxonomy)
                $categories = get_terms(array(
                    'taxonomy' => 'category',
                    'hide_empty' => false,
                ));

                if (empty($categories) || is_wp_error($categories)) {
                    return 'No pump categories found';
                }

                // Start output buffering
                ob_start();

                echo '<div class="pump-categories">';

                // Loop through categories and display pumps within each
                foreach ($categories as $category) {
                    echo '<h2>' . esc_html($category->name) . '</h2>';

                    // Fetch pumps in this category
                    $args = array(
                        'post_type' => 'pump',
                        'tax_query' => array(
                            array(
                                'taxonomy' => 'category',
                                'field' => 'term_id',
                                'terms' => $category->term_id,
                            ),
                        ),
                    );
                    $query = new WP_Query($args);

                    if ($query->have_posts()) {
                        echo '<ul>';
                        while ($query->have_posts()) {
                            $query->the_post();
                            echo '<li><a href="' . esc_url(get_permalink()) . '">' . get_the_title() . '</a></li>';
                        }
                        echo '</ul>';
                    } else {
                        echo '<p>No pumps found in this category.</p>';
                    }

                    echo '<a href="' . esc_url(get_category_link($category->term_id)) . '">View all pumps in ' . esc_html($category->name) . '</a>';
                }

                echo '</div>';

                // End output buffering and return
                return ob_get_clean();
            }
        ],

    ],

];