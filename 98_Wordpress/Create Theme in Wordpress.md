# Wordpress

## Create theme
1. Create a folder in wp-content/themes/['your folder']
2. In the folder, create
	- index.php
	- style.css ( Wordpress looks for this file name for theme name, version etc)
3. In style.css, 
```css
	/*
		Theme Name : Fictional University
		Author : Shaktish
		Version : 1.0
	*/
```	
4. To add a thumbnail to your theme, add an image width of 1200px x 900px with the name of 'screenshot'

## Functions

1. Try the function in index.php
```php
<?php 
	function greet (name) {
		echo "<p> Hi, $name</p>";
	}

	// to print in the doc, Call the function
	greet('Shaktish');
?>
```

2. Wordpress has some basic functionalities to call the wordpress name, descriptions.


```php
<h1><?php bloginfo('name'); ?> </h1>
<p><?php bloginfo('description'); ?> </p>
```

## Arrays 
Lets us display the content in wordpress, things like post and pages. 

```php
<?php

// variable
$myName = "Shaktish";

// array
	$friends = array('Brad', 'John', 'Jane');

// while loop
	
	$count = 0;
	while ($count < count($friends)) {
		echo "<li>$friends[$count]</li>";
		$count++;
	}

?>

```






