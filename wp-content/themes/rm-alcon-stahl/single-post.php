<?php
get_header();

if (have_posts()) :
    while (have_posts()) : the_post(); ?>

        <!-- Page header start -->
        <section class="page-header bg-navy-light-blue margin-bottom-0">
            <div class="container-fluid">
                <div class="wrapper">
                    <div class="container">

                        <!-- Page header inner start -->
                        <div class="page-header__inner">

                            <div class="title">
                                <h1><?php the_title(); ?></h1>
                            </div>
                        </div> <!-- Page header inner end -->

                    </div>
                </div>
            </div>
        </section> <!-- Page header end -->

        <section class="post-meta">
            <div class="container-fluid">
                <div class="wrapper">
                    <div class="container">
                        <div class="posted-on"><strong class="text-color-blue">Date: </strong> <?php the_time('F j, Y'); ?></div>
                        <div class="byline"><strong class="text-color-blue">Author: </strong> <?php the_author(); ?></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="default-section">
            <div class="container-fluid">
                <div class="wrapper">
                    <div class="container">
                        <?php the_content(); ?>
                    </div>
                </div>
            </div>
        </section>


<?php endwhile;
endif;

get_footer(); // Uključivanje footer-a teme
