<?php
/**
 * Plugin Name:       Popup Videos
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       popup-videos
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_popup_videos_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_popup_videos_block_init' );


function myguten_enqueue() {
    wp_enqueue_style( 'modal-video', plugins_url( '/foundation/modal-video/modal-video.min.css', __FILE__ ) );
	wp_enqueue_style( 'slick', plugins_url( '/foundation/slick/slick.css', __FILE__ ) );
    wp_register_script('modal-video', plugins_url( '/foundation/modal-video/jquery-modal-video.min.js', __FILE__ ), ['jquery']);
	wp_register_script('slick', plugins_url( '/foundation/slick/slick.min.js', __FILE__ ), ['jquery']);
	wp_enqueue_script( 'modalvideo', plugins_url( '/js/modalvideo.js', __FILE__ ), [ 'jquery', 'modal-video', 'slick' ], '', true );
}
add_action( 'wp_enqueue_scripts', 'myguten_enqueue' );
	
add_action( 'widgets_init', function(){
	$args = [
		'id' => 'my-new-widget',
		'name' => 'ポップアップ動画の登録',
		'description' => 'ポップアップ動画を出力する専用のウィジェットアリア。',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget' => '</section>',
	];
	register_sidebar( $args );
} );