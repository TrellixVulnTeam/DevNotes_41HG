## Enque Styles and Script files
```php
// Load front-end-styles
function arr_front_end_styles() {
  wp_enqueue_style('arr-icons', get_home_url().'/wp-content/themes/obira-child/assets/fonts/arr-icons/style.css');   
}

add_action('wp_enqueue_scripts', 'arr_front_end_styles');
```
Explanation
```php
function arr_front_end_styles() {
  // enque style  ('stylesheet name', 'directory path');
  wp_enqueue_style('arr-icons', get_home_url().'/wp-content/themes/obira-child/assets/fonts/arr-icons/style.css');  
}
// Enque the script in wp_enque
add_action('wp_enqueue_scripts', 'arr_front_end_styles');
```
