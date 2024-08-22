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
 * Setup the theme
 */
function setup_theme() {

    add_theme_support( 'wp-block-styles' ); // Support for block styles Podrška za stilove blokova
    add_theme_support( 'align-wide' ); // Support for block wides Podrška za široke i pune širine blokova
    add_theme_support( 'editor-styles' ); // Support for editor styles Podrška za editor stilove
    // add_editor_style( 'editor-styles-custom.css' ); // Customize editor style Prilagođeni stil za Gutenberg editor

}


/**
 * Register all custom gutenberg blocks in theme
 */
function register_theme_blocks() {

    wp_register_script(
        'rm-alcon-stahl-text-and-image',
        get_template_directory_uri() . '/gutenberg/blocks/assets/js/text_and_image.js',
        array('wp-i18n', 'wp-element', 'wp-blocks', 'wp-block-editor', 'wp-components', 'wp-api', 'wp-data')
    );

    wp_enqueue_script('rm-alcon-stahl-text-and-image');

    register_block_type( 'rm-alcon-stahl/text-and-image', array(
        'editor_script' => 'rm-alcon-stahl',
    ));

}


/**
 * Hook function to 'init' action to register custom Gutenberg blocks.
 */
add_action('init', 'register_theme_blocks');


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
add_action('after_setup_theme', 'register_menus');
add_action('after_setup_theme', 'setup_theme');