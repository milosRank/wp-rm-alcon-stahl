<?php get_header(); ?>

<div class="pump-archive">
    <?php if (have_posts()) : ?>
        <h1><?php post_type_archive_title(); ?></h1>
        <ul class="pump-list">
            <?php while (have_posts()) : the_post(); ?>
                <li class="pump-item">
                    <a href="<?php the_permalink(); ?>">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="pump-thumbnail">
                                <?php the_post_thumbnail('thumbnail', array('class' => 'pump-image')); ?>
                            </div>
                        <?php endif; ?>
                        
                        <h2 class="pump-title"><?php the_title(); ?></h2>
                        
                        <?php
                        // Get the custom description field
                        $description = get_post_meta(get_the_ID(), 'description', true);
                        if ($description) :
                        ?>
                            <div class="pump-description">
                                <?php echo wp_trim_words($description, 20, '...'); // Limit to 20 words ?>
                            </div>
                        <?php endif; ?>
                    </a>
                </li>
            <?php endwhile; ?>
        </ul>
    <?php else : ?>
        <p><?php _e('No pumps found.'); ?></p>
    <?php endif; ?>
</div>

<?php get_footer(); ?>
