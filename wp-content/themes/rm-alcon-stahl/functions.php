<?php

// Include global php functions
include 'global.php';


/**
 * Retrive gutenberg blocks configuration
 * 
 * @return Array - array of all blocks configuration
 */
function get_gutenberg_blocks_config() {

    // Get gutenberg congif
    $gutenberg_config = include 'config/gutenberg.php';

    // Get blocks config
    return $gutenberg_config['blocks'];

}


/**
 * Retrive all gutenberg blocks categories
 * 
 * @return Array - array of all blocks categories
 */
function get_gutenberg_blocks_categories() {

    // Get gutenberg congif
    $gutenberg_config = include 'config/gutenberg.php';

    // Get blocks config
    return $gutenberg_config['categories'];

}


/**
 * Add new gutenberg block categories
 * 
 * @param Array $categories - Array of existing categories
 * 
 * @return Array - array of all categories (old + new)
 */
function add_new_block_categories($categories) {

    return array_merge($categories, [...get_gutenberg_blocks_categories()]);

}


/**
 * Enqueue custom styles from theme
 * 
 * @return Void
 */
function enqueue_styles() {

    // Enqueue site style
    wp_enqueue_style('bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.css');
    wp_enqueue_style('main', get_template_directory_uri() . '/assets/css/main.css');

}


/**
 * Enqueue custom scripts from theme
 * 
 * @return Void
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
 * 
 * @return Void
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
 * 
 * @return Void
 */
function setup_theme() {

    add_theme_support( 'wp-block-styles' ); // Support for block styles
    add_theme_support( 'align-wide' ); // Support for block wides
    add_theme_support( 'editor-styles' ); // Support for editor styles

}


/**
 * Register all custom gutenberg blocks in theme
 * 
 * @return Void
 */
function register_theme_blocks() {

    // Get gutenberg blocks config
    $blocks = get_gutenberg_blocks_config();

    foreach($blocks as $block) {

        $domain = $block['domain'];
        $name = $block['name'];
        $dependency = $block['dependency'];
        $directory = get_template_directory_uri() . '/gutenberg/blocks/assets/js/' . replace_dash_with_underscore($name) . '.js';

        // Register gutenberg block script
        wp_register_script(
            $domain . '-' . $name,
            $directory,
            $dependency
        );

        // Set custom attributes
        $custom_attributes = $block;

        // Pass custom atributes to JS script of gutenberg block
        wp_localize_script($domain . '-' . $name, 'custom_attributes', $custom_attributes);

        // Enqueue gutenberg block script
        wp_enqueue_script($domain . '-' . $name);

        // Register new gutenberg block
        register_block_type($domain . '/' . $name, array(
            'editor_script' => $domain,
            'render_callback' => isset($block['render_cb']) ? $block['render_cb'] : null
        ));

    }

}


/**
 * Add custom wrapper around any default block
 * 
 * @param String $block_content - Content of the block
 * @param Object $block - Object with data about block
 * 
 * @return Void
 */
function add_wrapper_to_blocks($block_content, $block) {

    // Get all registered blocks
    $all_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();

    // Get only custom blocks
    $custom_blocks = array();
    foreach ( $all_blocks as $block_name => $block_type ) {

        if ( strpos( $block_name, 'rm-alcon-stahl/' ) === 0 ) {
            $custom_blocks[] = $block_name;
        }

    }

    // Check if current block is custom block
    // Or if current block is HTML editor
    if ( in_array( $block['blockName'], $custom_blocks ) || $block['blockName'] == 'core/freeform') {
        return $block_content; // If yes, don't add custom wrapper
    }

    // Add wrapper only for certain blocks, if needed
    if ( ! is_admin() ) {
        return 
        '<div>' .
            '<div class="container-fluid">' .
                '<div class="wrapper">' .
                    '<div class="container">' .
                        $block_content .
                    '</div>' . 
                '</div>' .
            '</div>' .
        '</div>';
    }
    return $block_content;

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
 * Hook to setup theme features.
 *
 * The 'after_setup_theme' action hook is used to register custom navigation
 * menus and possibly other theme setup tasks.
 */
add_action('after_setup_theme', 'register_menus');
add_action('after_setup_theme', 'setup_theme');


/**
 * Hook to setup admin styles.
 *
 * The 'admin_enqueue_scripts' action hook is used to add custom styles for admin panel.
 */
add_action('admin_enqueue_scripts', function () {

    // Register and eqnueue admin style
    wp_register_style('admin-css-style', get_template_directory_uri() . '/assets/css/admin/style.css');
    wp_enqueue_style('admin-css-style');

});


/**
 * Hook to add new block categories
 */
add_filter('block_categories', 'add_new_block_categories', 10, 1);


/**
 * Hook when block is rendered
 */
add_filter('render_block', 'add_wrapper_to_blocks', 10, 2);


// ==== PUMPS ====

/**
 * Register Custom Post Type for Pumps
 * 
 * @return Void
 */
function create_pump_post_type() {

    register_post_type(
        'pump',
        array(
            'labels'      => array(
                'name'          => __('Pumps'),
                'singular_name' => __('Pump'),
            ),
            'public'      => true,
            'has_archive' => true,
            'rewrite'     => array('slug' => 'pump'),
            'supports'    => array('title', 'editor', 'thumbnail'), // Editor for HTML and thumbnail for image
            'taxonomies'  => array('category'), // Support for categories
            'menu_position' => 5,
            'show_in_rest' => false,
        )
    );

}


/**
 * Include pumps in category archive
 * 
 * @return Void
 */
function include_pumps_in_category_archive($query) {

    if ( ! is_admin() && $query->is_main_query() && is_category() ) {
        $query->set( 'post_type', array( 'post', 'pump' ) );
    }

}


/**
 * Add Custom Meta Boxes
 * 
 * @return Void
 */
function add_pump_meta_boxes() {
    add_meta_box('pump_details', 'Pump Details', 'pump_meta_box_callback', 'pump', 'normal', 'default');;
}


/**
 * Handle pump metabox adding
 * 
 * @param Object $post - Current post
 * 
 * @return Void
 */
function pump_meta_box_callback($post) {

    $description_title = get_post_meta($post->ID, 'description_title', true); // Fetch description_title if it exists
    $description_subtitle = get_post_meta($post->ID, 'description_subtitle', true); // Fetch description_subtitle if it exists

    echo '<label for="description_title">Description Title: </label>';
    echo '<input type="text" name="description_title" value="' . esc_attr($description_title) . '" size="25" />';
    echo '<br><label for="description_subtitle">Description Subtitle: </label>';
    echo '<input type="text" name="description_subtitle" value="' . esc_attr($description_subtitle) . '" size="25" />';
}


/**
 * Saves pump metabox data
 * 
 * @param String $post_id - current post ID
 * 
 * @return Void
 */
function save_pump_meta_boxes_data($post_id) {

    if (array_key_exists('description_title', $_POST)) {
        update_post_meta($post_id, 'description_title', $_POST['description_title']);
    }
    if (array_key_exists('description_subtitle', $_POST)) {
        update_post_meta($post_id, 'description_subtitle', $_POST['description_subtitle']);
    }

}


add_action('init', 'create_pump_post_type');
add_action('add_meta_boxes', 'add_pump_meta_boxes');
add_action('save_post', 'save_pump_meta_boxes_data');
add_action('pre_get_posts', 'include_pumps_in_category_archive');


/**
 * Register widgets
 * 
 * @return Void
 */
function register_widget_areas() {

    // Get all categories
    $categories = get_categories();

    foreach ( $categories as $category ) {

        register_sidebar(array(
            'name'          => sprintf( __( 'Sidebar for %s', 'theme_text_domain' ), $category->name),
            'id'            => 'category-sidebar-' . $category->term_id,
            'description'   => sprintf( __('Widgets in this area will be shown in the %s category.', 'theme_text_domain'), $category->name ),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        ));

        register_sidebar(array(
            'name'          => 'Sidebar for Pumps page',
            'id'            => 'pumps-sidebar',
            'description'   => sprintf( __( 'Widgets in this area will be shown in the %s category.', 'theme_text_domain' ), $category->name ),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        ));

    }
}
add_action( 'widgets_init', 'register_widget_areas' );