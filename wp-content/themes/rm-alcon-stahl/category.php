<?php get_header(); ?>


<?php if (have_posts()) : ?>

    <!-- Elements list start -->
    <section class="elements-list pumps padding-top-100 padding-bottom-100">
        <div class="container-fluid">
            <div class="wrapper">
                <div class="container">

                    <!-- Elements list inner start -->
                    <div class="elements-list__inner">

                        <div class="title">
                            <h2><?php single_cat_title(); ?></h2>
                        </div>

                        <?php ?>
                        <?php if( ! empty(category_description())) : ?>
                            <div class="subtitle">
                                <?= category_description(); ?>
                                <div class="line-decoration"></div>
                            </div>
                        <?php endif; ?>

                        <div class="elements-holder items-auto">

                            <?php while (have_posts()) : the_post(); ?>

                                <!-- Element start -->
                                <div class="element">
                                    <div class="element__inner">
                                        <div class="image-box shadow">
                                            <?php if (has_post_thumbnail()) : ?>
                                                <?php the_post_thumbnail('medium'); ?>
                                                <?php else : ?>
                                                    <img src="<?= get_template_directory_uri() . '/assets/img/no-image/pump-thumbnail.webp' ?>" />
                                                <?php endif; ?>
                                            </div>
                                        <div class="title">
                                            <p><?php the_title(); ?></p>
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

<?php else : ?>

    <section class="text-and-heading text-center error" id="inox-limovi">
            <div class="container-fluid">
                <div class="wrapper">
                    <div class="container">

                        <!-- Text and heading inner start -->
                        <div class="text-and-heading__inner">

                            <div class="title">
                                <h2>Trenutno nema pumpi u ovoj kategoriji.</h2>
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
