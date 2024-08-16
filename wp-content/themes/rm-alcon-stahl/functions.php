<?php

/**
 * Enqueue custom styles from theme
 */
function enqueue_styles() {
    wp_enqueue_style('main', get_template_directory_uri() . '/assets/css/main.css');
    wp_enqueue_style('bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.css');
}


/**
 * Enqueue custom scripts from theme
 */
function enqueue_scripts() {
    // <script src="assets/js/header/header.js"></script>
    // <script src="assets/js/dropdown/dropdown.js"></script>
    // <script src="assets/js/mail/sendmail.js"></script>
    // <script src="assets/js/global.js"></script>
    // <script src="assets/js/init.js"></script>
    wp_enqueue_script('header', get_template_directory_uri() . '/assets/js/header/header.js');
    wp_enqueue_script('dropdown', get_template_directory_uri() . '/assets/js/dropdown/dropdown.js');
    wp_enqueue_script('sendmail', get_template_directory_uri() . '/assets/js/mail/sendmail.js');
    wp_enqueue_script('global', get_template_directory_uri() . '/assets/js/global.js');
    wp_enqueue_script('init', get_template_directory_uri() . '/assets/js/init.js');

}

add_action('wp_enqueue_scripts', 'enqueue_styles');
add_action('wp_enqueue_scripts', 'enqueue_scripts');

?>