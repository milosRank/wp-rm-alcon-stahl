<?php get_header(); ?>

<!-- Page header start -->
<section class="page-header page-header-bg--pumpe margin-bottom-0">
    <div class="container-fluid">
        <div class="wrapper">
            <div class="container">

                <!-- Page header inner start -->
                <div class="page-header__inner">

                    <div class="title">
                        <h1>Pumpe</h1>
                    </div>

                </div> <!-- Page header inner end -->

            </div>
        </div>
    </div>
</section> <!-- Page header end -->

<section class="pumps-categories-list">
    <div class="container-fluid">
        <div class="wrapper">
            <div class="container">
                <div class="pumps-categories-list__inner">

                    <?php

                    // Get all parent categories
                    $args = array(
                        'taxonomy'   => 'category',
                        'parent'     => 0,  // Only main categories
                        'post_type'  => 'pump',
                        'hide_empty' => true,
                    );

                    $parent_categories = get_categories($args);

                    if (! empty($parent_categories)) {
                        echo '<ul class="main-categories">';

                        foreach ($parent_categories as $category) {

                            // Check if main cateogiy have subcategories
                            $subcategories = get_categories(array(
                                'taxonomy'   => 'category',
                                'parent'     => $category->term_id, // Get subcategories
                                'hide_empty' => false,
                            ));

                            // Check if main subcategory have any pumps
                            $pumps_in_category = new WP_Query(array(
                                'post_type' => 'pump',
                                'tax_query' => array(
                                    array(
                                        'taxonomy' => 'category',
                                        'field'    => 'term_id',
                                        'terms'    => $category->term_id, // Posts in this main category
                                    ),
                                ),
                            ));

                            // Show cateogry only if it has subcateogry or pumps
                            if (! empty($subcategories) || $pumps_in_category->have_posts()) {
                                echo '<li>';

                                // If cateogry have subcategories, show them as links, and main cateogry as text
                                if (! empty($subcategories)) {
                                    echo '<div class="parent-category">' . esc_html($category->name) . '</div>';
                                    echo '<ul class="subcategories">';

                                    foreach ($subcategories as $subcategory) {

                                        // Check if subcateogry have pumps
                                        $pumps_in_subcategory = new WP_Query(array(
                                            'post_type' => 'pump',
                                            'tax_query' => array(
                                                array(
                                                    'taxonomy' => 'category',
                                                    'field'    => 'term_id',
                                                    'terms'    => $subcategory->term_id, // Postovi u ovoj podkategoriji
                                                ),
                                            ),
                                        ));

                                        // Prikazuj podkategoriju samo ako ima pumpe
                                        // Show subcategory only if it have pumps
                                        if ($pumps_in_subcategory->have_posts()) {
                                            echo '<li>';
                                            echo '<a href="' . esc_url(get_category_link($subcategory->term_id)) . '">' . esc_html($subcategory->name) . '</a>';
                                            echo '</li>';
                                        }

                                        wp_reset_postdata(); // Reset post query
                                    }

                                    echo '</ul>';
                                } else {
                                    // Ako nema podkategorija, prikaži link ka pumpama iz glavne kategorije
                                    // If there is no subcateogires, display link towards the pumps from main (parent) cateogry
                                    echo '<a href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($category->name) . '</a>';
                                }

                                echo '</li>';
                            }

                            wp_reset_postdata(); // Reset post query
                        }

                        echo '</ul>';
                    } else {
                        echo '<h2 class="text-center">Trenutno nema dostupnih proizvoda.</h2>';
                    }

                    ?>

                </div>
            </div>
        </div>
    </div>
</section>


<?php get_footer(); ?>