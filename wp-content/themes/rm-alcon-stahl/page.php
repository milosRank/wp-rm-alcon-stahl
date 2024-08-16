<?php
the_post();

get_header(); ?>

    <!-- Main start -->
    <main>

        <?php if( ! empty(get_the_content())): ?>

            <?php the_content(); ?>

        <?php else: ?>

            <?php get_template_part('template-parts/content/no-content'); ?>

        <?php endif; ?>

    </main>
    <!-- Main end -->

<?php get_footer(); ?>