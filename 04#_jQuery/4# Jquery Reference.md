## Table of contents 
- [jQuery References](#jquery-references)
- [jQuery The noConflict() Method](#jquery-the-noconflict()-method)

# jQuery References

## jQuery The noConflict() Method

As you already know; jQuery uses the $ sign as a shortcut for jQuery. There are many other popular JavaScript frameworks like: Angular, Backbone, Ember, Knockout, and more.What if other JavaScript frameworks also use the $ sign as a shortcut?

If two different frameworks are using the same shortcut, one of them might stop working.

## The jQuery noConflict() Method
The noConflict() method releases the hold on the $ shortcut identifier, so that other scripts can use it.

You can of course still use jQuery, simply by writing the full name instead of the shortcut:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$.noConflict();
jQuery(document).ready(function(){
    jQuery("button").click(function(){
        jQuery("p").text("jQuery is still working!");
    });
});
</script>
</head>
<body>

<p>This is a paragraph.</p>
<button>Test jQuery</button>

</body>
</html>
```
You can also create your own shortcut very easily. The noConflict() method returns a reference to jQuery, that you can save in a variable, for later use. Here is an example:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
var jq = $.noConflict();
jq(document).ready(function(){
    jq("button").click(function(){
        jq("p").text("jQuery is still working!");
    });
});
</script>
</head>
<body>

<p>This is a paragraph.</p>
<button>Test jQuery</button>

</body>
</html>
```
If you have a block of jQuery code which uses the $ shortcut and you do not want to change it all, you can pass the $ sign in as a parameter to the ready method. This allows you to access jQuery using $, inside this function - outside of it, you will have to use "jQuery":

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$.noConflict();
jQuery(document).ready(function($){
    $("button").click(function(){
        $("p").text("jQuery is still working!");
    });
});
</script>
</head>
<body>

<p>This is a paragraph.</p>
<button>Test jQuery</button>

</body>
</html>
```
jQuery file order 

```html
<script type="text/javascript" src="/path/to/jquery.js"></script>
<script type="text/javascript" src="/path/to/jquery-plugin.js"></script>
<script type="text/javascript">
  jQuery.noConflict();
  // Code that uses other library's $ can follow here.
</script>
<script type="text/javascript" src="/path/to/prototype.js"></script>
```

# jQuery Selectors

only few selectors are going to be shown here, for more

Refer for complete selectors, [Jquery Selectors by w3schools](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)



