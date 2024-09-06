<?php get_header(); ?>

<div class="pump-category">
    <h1><?php single_cat_title(); ?></h1>
    <div class="pump-list">
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <div class="pump-item">
                    <h2><?php the_title(); ?></h2>
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="pump-thumbnail">
                            <?php the_post_thumbnail('medium'); ?>
                        </div>
                    <?php endif; ?>
                    <div class="pump-description">
                        <?php the_excerpt(); ?>
                    </div>
                    <a href="<?php the_permalink(); ?>">View Details</a>
                </div>
            <?php endwhile; ?>
        <?php else : ?>
            <p><?php _e('No pumps found in this category.'); ?></p>
        <?php endif; ?>
    </div>
</div>

<?php get_footer(); ?>
