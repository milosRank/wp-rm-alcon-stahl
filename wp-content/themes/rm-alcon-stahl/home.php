<?php get_header(); ?>

<?php
$args = array(
    'post_type'      => 'post', // Show only blog posts
    'posts_per_page' => -1, // -1 to show all blpg posts
);

$query = new WP_Query($args);

if ($query->have_posts()) :

?>

        <!-- Elements list start -->
        <section class="elements-list pumps padding-top-100 padding-bottom-100">
            <div class="container-fluid">
                <div class="wrapper">
                    <div class="container">

                        <!-- Elements list inner start -->
                        <div class="elements-list__inner">
                            <div class="elements-holder items-auto">
                            <?php while ($query->have_posts()) : $query->the_post(); ?>

                                <!-- Element start -->
                                <div class="element">
                                    <div class="element__inner">
                                        <div class="title">
                                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                        </div>
                                        <div class="description">
                                            <?php the_excerpt(); ?>
                                        </div>
                                        <div class="cta-wrapper">
                                            <a class="button button-diagonal-arrow-down" target="_blank" href="<?php the_permalink(); ?>">Detaljnije</a>
                                        </div>
                                    </div>
                                </div> <!-- Element end -->

                                <?php endwhile; ?>

                            </div>

                        </div> <!-- Elements list inner end -->

                    </div>
                </div>
            </div>
        </section> <!-- Elements list end -->

    <?php

    wp_reset_postdata(); // Reset global $post object after WP_Query

else: ?>

    <section class="text-and-heading text-center error">
        <div class="container-fluid">
            <div class="wrapper">
                <div class="container">

                    <!-- Text and heading inner start -->
                    <div class="text-and-heading__inner">

                        <div class="title">
                            <h2>Trenutno nema članaka.</h2>
                        </div>

                    </div> <!-- Text and heading inner end -->

                    <div class="cta-wrapper text-center margin-top-50">
                        <a href="<?= get_home_url(); ?>" class="button button--primary">Naslovna strana</a>
                    </div>

                </div>
            </div>
        </div>
    </section>

<?php endif; ?>

<?php get_footer(); ?>