<?php get_header(); ?>

<div class="pump-single">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <h1><?php the_title(); ?></h1>

        <?php 
        // Get custom fields
        $description_title = get_post_meta(get_the_ID(), 'description_title', true);
        $description_subtitle = get_post_meta(get_the_ID(), 'description_subtitle', true);
        $description = get_post_meta(get_the_ID(), 'description', true);

        // Get featured image
        if (has_post_thumbnail()) {
            $featured_image = get_the_post_thumbnail(get_the_ID(), 'full', array('class' => 'featured-image'));
        } else {
            $featured_image = '<img src="' . get_template_directory_uri() . '/path/to/default-image.jpg" alt="Default Image">';
        }
        ?>

        <?php echo $featured_image; ?>

        <?php if ($description_title) : ?>
            <h2><?php echo esc_html($description_title); ?></h2>
        <?php endif; ?>

        <?php if ($description_subtitle) : ?>
            <h3><?php echo esc_html($description_subtitle); ?></h3>
        <?php endif; ?>

        <?php if ($description) : ?>
            <div class="pump-description">
                <?php echo wp_kses_post($description); // Allow HTML in description ?>
            </div>
        <?php endif; ?>

        <div class="pump-content">
            <?php the_content(); ?>
        </div>

    <?php endwhile; else : ?>
        <p><?php _e('Sorry, no pumps found.'); ?></p>
    <?php endif; ?>
</div>

<?php get_footer(); ?>
