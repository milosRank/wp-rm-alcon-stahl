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

    wp_enqueue_script('header', get_template_directory_uri() . '/assets/js/header/header.js');
    wp_enqueue_script('dropdown', get_template_directory_uri() . '/assets/js/dropdown/dropdown.js');
    wp_enqueue_script('sendmail', get_template_directory_uri() . '/assets/js/mail/sendmail.js');
    wp_enqueue_script('global', get_template_directory_uri() . '/assets/js/global.js');
    wp_enqueue_script('init', get_template_directory_uri() . '/assets/js/init.js');

}


/**
 * Register custom navigation menus for the theme.
 */
function register_menus() {

    register_nav_menus(array(
        'header' => __('Header Menu', 'rm-alcon-stahl'),
        'footer_menu_primary'  => __('Footer Menu Primary', 'rm-alcon-stahl'),
        'footer_menu_secondary'  => __('Footer Menu Secondary', 'rm-alcon-stahl'),
    ));

}

/**
 * Hooks to enqueue styles and scripts in the theme.
 *
 * These actions ensure that the custom styles and scripts are loaded
 * when WordPress enqueues styles and scripts. The 'wp_enqueue_scripts' action
 * is used for enqueuing both styles and scripts.
 */
add_action('wp_enqueue_scripts', 'enqueue_styles');
add_action('wp_enqueue_scripts', 'enqueue_scripts');


/**
 * Hook to set up theme features.
 *
 * The 'after_setup_theme' action hook is used to register custom navigation
 * menus and possibly other theme setup tasks.
 */
add_action('after_setup_theme', 'register_nav_menus');