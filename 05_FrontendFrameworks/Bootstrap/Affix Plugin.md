# Bootstrap Affix Plugin

The Affix plugin allows an element to become affixed (locked) to an area on the page. This is often used with navigation menus or social icon buttons, to make them "stick" at a specific area while scrolling up and down the page.

The plugin toggles this behavior on and off (changes the value of CSS position from static to fixed), depending on scroll position.

 ## Create an Affixed Navigation Menu
 * Add **data-spy="affix"** to nav
 * Add **data-offset-top="197"**  (Measure top-bar's height to fix the data-offset-top)

 ```
 <nav class="navbar navbar-inverse" data-spy="affix" data-offset-top="197">
```
* Add data-spy="affix" to the element you want affixed.
* Optionally, add the data-offset-top|bottom attribute to calculate the position of the scroll.

 ### Add css
 * Add **.affix** and style it so it gets fixed in top
```
.affix {
      top: 0;
      width: 100%;
      z-index: 999;
  }
```
* Take advantage of **.affix** class, 
* Target affix to nav and modify nav height, example given below
```
.affix .navbar-brand img {
  height: 65px;
  -webkit-transition: all 600ms cubic-bezier(0.19, 1, 0.22, 1);
    transition:         all 600ms cubic-bezier(0.19, 1, 0.22, 1); 
}
```

### W3schools Example
```
<!DOCTYPE html>
<html>
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
  /* Note: Try to remove the following lines to see the effect of CSS positioning */
  .affix {
      top: 0;
      width: 100%;
  }

  .affix + .container-fluid {
      padding-top: 70px;
  }
  </style>
</head>
<body>

<div class="container-fluid" style="background-color:#F44336;color:#fff;height:200px;">
  <h1>Bootstrap Affix Example</h1>
  <h3>Fixed (sticky) navbar on scroll</h3>
  <p>Scroll this page to see how the navbar behaves with data-spy="affix".</p>
  <p>The navbar is attached to the top of the page after you have scrolled a specified amount of pixels.</p>
</div>

<nav class="navbar navbar-inverse" data-spy="affix" data-offset-top="197">
  <ul class="nav navbar-nav">
    <li class="active"><a href="#">Basic Topnav</a></li>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3</a></li>
  </ul>
</nav>

<div class="container-fluid" style="height:1000px">
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
</div>

</body>
</html>
```
