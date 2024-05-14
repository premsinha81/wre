<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u813067685_zw5iH' );

/** Database username */
define( 'DB_USER', 'u813067685_yEO0y' );

/** Database password */
define( 'DB_PASSWORD', 'sGTcrOCV9k' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define( 'AUTH_KEY',          '8@Fwh&`No{FWBq|de9~^-+XNlbB,U[7@D]6LO:`R~2~~:=Qeg@)Z7c)%2&/,$g,z' );
define( 'SECURE_AUTH_KEY',   'lZ/8pjlqR|-f0~I;+?g W@2j{{16fK(!W8W}K:=UMAPUCwzK1XO.UeN.&HX8)rXf' );
define( 'LOGGED_IN_KEY',     'v)*/&[uV$a3LH3fJWW_k*?_C0N%e7dqMqrD.,l@DCD5/N1s!MXYy(HxP>kM>h`e/' );
define( 'NONCE_KEY',         'bG]+xzQO2P4xKFH}-+CyP{1^/*c}QtPIv<{Ee_5jRy!zg^w0L!B89#2UT_?+PRNR' );
define( 'AUTH_SALT',         'u-_Q=SAq5K.f][)32URI51}6@XD#,as~l&#yNY~ajL_>r5w~qUbX=w&n6s68Dw:v' );
define( 'SECURE_AUTH_SALT',  '{^Cdt[)CU3<bxvEaQD  YF+vkFps,{lnE708O58xbO6WUkRV/ZIt5y6uPeJg@daU' );
define( 'LOGGED_IN_SALT',    'b^y`Jc$nCqUyQqq ghx-aR~5E7<df.1%~;Im3nW{:gxJ6D(8d4DZ$<H5s}tb4b3g' );
define( 'NONCE_SALT',        'D~c3]v`-Ya`4^trdg}TsuOa0&ra`xBNZ JJ ggDf)b5Q+ O;9cU,0Tms_5Nb-1!|' );
define( 'WP_CACHE_KEY_SALT', 'hg}|!M_Qd5Hn$h:I6wrohnVe~cGX`oEZTp=|MAc;F~<YveBh&pAT@[g]&M79u7LA' );


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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
