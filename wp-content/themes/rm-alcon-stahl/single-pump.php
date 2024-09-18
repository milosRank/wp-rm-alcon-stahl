<?php get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<?php 
    // Get custom fields
    $description_title = get_post_meta(get_the_ID(), 'description_title', true);
    $description_subtitle = get_post_meta(get_the_ID(), 'description_subtitle', true);

    // Get featured image
    if (has_post_thumbnail()) {
        $featured_image = get_the_post_thumbnail(get_the_ID(), 'medium', array('class' => 'featured-image'));
    }
?>

    <!-- Table and image start -->
    <section class="table-and-image table-on-right table--parallel margin-top-100 margin-bottom-100 single-pump">
        <div class="container-fluid">
            <div class="wrapper">
                <div class="container container-extra-narrow">

                    <!-- Table and image title start -->
                    <div class="table-and-image-title">
                        <h1><?= $description_title; ?></h1>
                        <div class="subtitle"> <?= $description_subtitle; ?></div>
                    </div> <!-- Table and image title end -->

                    <!-- Table and image inner start -->
                    <div class="table-and-image__inner">

                        <!-- Tables container start -->
                        <div class="table-container">

                            <!--Table start -->
                            <div class="table">
                                <?php the_content(); ?>
                            </div> <!--Table end -->

                        </div> <!-- Tables container end -->

                        <!-- Image container start -->
                        <div class="image-container">
                            <div class="image-box shadow">
                                <?php if( ! empty($featured_image)) : ?>
                                    <?= $featured_image; ?>
                                <?php else : ?>
                                    <img src="<?= get_template_directory_uri() . '/assets/img/no-image/pump-thumbnail.webp' ?>" />
                                <?php endif; ?>

                            </div>
                        </div> <!-- Image container end -->

                    </div> <!-- Table and image inner end -->

                </div>
            </div>
        </div>
    </section> <!-- Table and image end -->

    <section class="text-and-heading text-center bg-navy-blue padding-bottom-0">
        <div class="container-fluid">
            <div class="wrapper">
                <div class="container container-extra-narrow">

                    <!-- Text and heading inner start -->
                    <div class="text-and-heading__inner">

                        <div class="title">
                            <h2>Želite da saznate više o ovom proizvodu?</h2>
                        </div>

                        <div class="subtitle">
                            <p>Pošaljite nam poruku i naš tim će vas kontaktirati ubrzo.</p>
                        </div>

                    </div> <!-- Text and heading inner end -->

                    <div class="cta-wrapper text-center margin-top-50">
                        <a href="<?= get_permalink( get_page_by_path( 'contact' ) ); ?>" class="button button--primary">Pošaljite poruku</a>
                    </div>

                </div>
            </div>
        </div>
    </section>

<?php endwhile; else : ?>

        <section class="text-and-heading text-center error">
            <div class="container-fluid">
                <div class="wrapper">
                    <div class="container">

                        <!-- Text and heading inner start -->
                        <div class="text-and-heading__inner">

                            <div class="title">
                                <h2>Greška. Proizvod nije pronadjen.</h2>
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
