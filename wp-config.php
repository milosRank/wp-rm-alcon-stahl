<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'webwavedb' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'GXy]}+L+*Q7}wG.,)Z_af !E5&0l|vocPN^x-a6Yh}Di *e.26|s0jUWS3f}y!DT' );
define( 'SECURE_AUTH_KEY',  '!;GL3!uhZ%tVQ /QB74gauN1%P(YwDd_?~$L&fc:_sBzP7h</4~OxdtjiG/.G%@*' );
define( 'LOGGED_IN_KEY',    'Ktp]s6]}!;qQW%w&3ruCBpwiU:0t;GS{VBNMtQtYX,h)pLW_FQ#}@X1nN|72-/6Y' );
define( 'NONCE_KEY',        ' ^gfAc3N?3~lr-Kd4_Bh+Vz{7y/oE^qzKl#n,W*0PlOO[!,F9y2A|w3S_Vi8v#T3' );
define( 'AUTH_SALT',        ')sW0~8[=e9?6LD HU?b@{)5}kQ&}jl?37C4nSJJ.)Zg5#)svcf@4yR>>.Hcy}R&%' );
define( 'SECURE_AUTH_SALT', 'O`D^1,kSm!F?F2k$sd2i5drg~$UI3KU&?xZuGnTp3~ZvzunJuw2d*=xPD[U?}UA8' );
define( 'LOGGED_IN_SALT',   '#1yu5vhDj1[sj7{UZC)b^$_(cI]2bK!#JLEW{$I2bBK4$lr$XycrG-PBP-?xpJU<' );
define( 'NONCE_SALT',       ')g^QAL)Pnv*tS>%.#2{F-<v@T}6w82Z6P_!P!r3A*N;@H! A2,KoH$Z,Ct#~F2/M' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
