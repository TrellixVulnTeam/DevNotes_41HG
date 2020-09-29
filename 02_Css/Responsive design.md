# Responsive Web Design

## Table of contents
- [What is Responsive Web Design](#what-is-responsive-web-design)
- [The Viewport](#the-viewport)
- [Using Rem](#using-rem)
- [Responsive Web Design - Media Queries](#responsive-web-design---media-queries)

## What is Responsive Web Design?
Responsive web design makes your web page look good on all devices.
Responsive web design uses only HTML and CSS.

When you use CSS and HTML to resize, hide, shrink, enlarge, or move the content to make it look good on any screen, its called responsive web design 


## The Viewport
The viewport is the user's visible area of a web page.
The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

### Setting The Viewport

HTML5 introduced a method to let web designers take control over the viewport, through the <meta> tag.
You should include the following <meta> viewport element in all your web pages:

```<meta name="viewport" content="width=device-width, initial-scale=1.0">```

- A <meta> viewport element gives the browser instructions on how to control the page's dimensions and scaling.
- The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
- The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.

Prefered meta tags to include ur html file

```html
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="HandheldFriendly" content="true">
```

### Size Content to The Viewport
Users are used to scroll websites vertically on both desktop and mobile devices - but not horizontally!
So, if the user is forced to scroll horizontally, or zoom out, to see the whole web page it results in a poor user experience.

Some additional rules to follow:

1. **Do NOT use large fixed width elements** - For example, if an image is displayed at a width wider than the viewport it can cause the viewport to scroll horizontally. Remember to adjust this content to fit within the width of the viewport.

2. **Do NOT let the content rely on a particular viewport width to render well** - Since screen dimensions and width in CSS pixels vary widely between devices, content should not rely on a particular viewport width to render well.

3. **Use CSS media queries to apply different styling for small and large screens** - Setting large absolute CSS widths for page elements will cause the element to be too wide for the viewport on a smaller device. Instead, consider using relative width values, such as width: 100%. Also, be careful of using large absolute positioning values. It may cause the element to fall outside the viewport on small devices.


## USING REM

- The Default fontsize for webpage is 16px, So 1rem is equal to 16px
- Set html/root element Fontsize to 62.5% or 0.625em which makes default fontsize to 10px.
- Now you can set html font size to 1.6rem, and use rem units to inner elements

```css
html { font-size: 0.625em; } 
body { font-size: 1.4rem; } /* =14px */
h1   { font-size: 2.4rem; } /* =24px */
```
**IE SUPPORT**
```css
html { font-size: 0.625em; } 
body { font-size: 14px; font-size: 1.4rem; } /* =14px */
h1   { font-size: 24px; font-size: 2.4rem; } /* =24px */
```
**Media query**
- Use  Rem for media query
- 768 / 16px (default fontsize) = 48rem 
- Increase/Decrease font size of root/html element  

```css
@media (max-width: 48rem) { 
	html {
		font-size: 0.563em; /* 9px | http://pxtoem.com/ */
	}
}  
```

### Example 

```html
<!DOCTYPE html>
<html>
<head>
	<title>REM</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style type="text/css">
		html {
			font-size: 0.625em; /* 1 */
    		-webkit-text-size-adjust: 0.625em; /* 2 */
    		-ms-text-size-adjust: 0.625em; /* 2 */
			/*
			- 1 rem is equal to 10px 
			- Just change the html element size in media query
			*/ 
		}

		body {
			font-size: 1.6rem;
		}

		h1 {
			font-size: 3.2rem;
		}

		@media (max-width: 48rem) { /* 768 / 16px = 48rem */

			html {
				font-size: 0.563em; 
			}

			body {
				background:lavender;
				color:#000;
			}
		}
	</style>
</head>
<body>
	<h1>Hello World</h1>
	<p>Welcome User</p>
</body>
</html>
```


**Reference links**

https://engageinteractive.co.uk/blog/em-vs-rem-vs-px 

https://snook.ca/archives/html_and_css/font-size-with-rem 

http://pxtoem.com/ 

https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984 


## Responsive Web Design - Media Queries
Media query is a CSS technique introduced in CSS3.
It uses the @media rule to include a block of CSS properties only if a certain condition is true.

![alt screen](https://github.com/shaktish/Notes/blob/master/assests/images/css/screen-sizes.png?raw=true)

If the browser window is 500px or smaller, the background color will be lightblue:
```css
@media only screen and (max-width: 500px) {
    body {
        background-color: lightblue;
    }
}
```

### Add a Breakpoint
We can add a breakpoint where certain parts of the design will behave differently on each side of the breakpoint.

Use a media query to add a breakpoint at 768px:
```css
@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    [class*="col-"] {
        width: 100%;
    }
}

```

### Multiple Media queries
- max = until then 
- min = after that
```css
@media (min-width:480px) and (max-width: 767px){
	body {
		background:red;
	}
}


@media (min-width:0px) and (max-width: 479px){
	body {
		background:blue;
	}
}
```

## Responsive Images

### Using The width Property
If the width property is set to 100%, the image will be responsive and scale up and down:

Example
```css
img {
    width: 100%;
    height: auto;
}
```
Notice that in the example above, the image can be **scaled up to be larger than its original size**. A better solution, in many cases, will be to use the **max-width** property instead.

### Using The max-width Property
If the max-width property is set to 100%, the image will scale down if it has to, but never scale up to be larger than its original size:

Example
```css
img {
    max-width: 100%;
    height: auto;
}
```
## Background Images
Background images can also respond to resizing and scaling.
Here we will show three different methods:

### contain
If the background-size property is set to "contain", the background image will scale, and try to fit the content area. However, the image will keep its aspect ratio (the proportional relationship between the image's width and height):
```
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
div {
    width: 100%;
    height: 400px;
    background-image: url('img_flowers.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid red;
}
</style>
</head>
<body>

<p>Resize the browser window to see the effect.</p>

<div></div>

</body>
</html>
```
### setting height and with manually
If the background-size property is set to **"100% 100%"**, the background image will **stretch to cover the entire content area**


```css
div {
	background-size: 100% 100%;
	background-size:100% auto;
}	
```
### cover
If the background-size property is set to **"cover"**, the background image will **scale to cover the entire content area**. Notice that the "cover" value keeps the **aspect ratio**, and some part of the **background image may be clipped**:


===================

## EM and REM 

## Em
* Incorporating relative sizing starts by using units other than pixels
* If the base font of a browser is 16 pixels (which is normally the default size of text in a browser), then 1 em is equal to 16 pixels. 2 ems would equal 32 pixels, and so on.

## Rem
* The second relative unit of measurement in CSS is the rem, coded as rem.
* Rem stands for root em. It acts similar to em, but instead of checking parent elements to size font, it checks the root element. The root element is the <html> tag.
* Most browsers set the font size of <html> to 16 pixels, so by default rem measurements will be compared to that value. To set a different font size for the root element, you can add a CSS rule.
```css
html {
  font-size: 20px;
}

h1 {
  font-size: 2rem;
}
```

In the example above, the font size of the root element, <html>, is set to 20 pixels. All subsequent rem measurements will now be compared to that value and the size of h1 elements in the example will be 40 pixels.

* One advantage of using rems is that all elements are compared to the same font size value, making it easy to predict how large or small font will appear. If you are interested in sizing elements consistently across an entire website, the rem measurement is the best unit for the job. 
* If you're interested in sizing elements in comparison to other elements nearby, then the em unit would be better suited for the job.

## Percentages: Height & Width
To size non-text HTML elements relative to their parent elements on the page you can use percentages.
Percentages are often used to size box-model values, like width and height, padding, border, and margins. They can also be used to set positioning properties (top, bottom, left, right).

# Media Queries

CSS uses media queries to adapt a website's content to different screen sizes. With media queries, CSS can detect the size of the current screen and apply different CSS styles depending on the width of the screen.

```
@media only screen and (max-width: 480px) {
  body {
    font-size: 12px;
  }
}
```
* @media — This keyword begins a media query rule and instructs the CSS compiler on how to parse the rest of the rule.
* only screen — Indicates what types of devices should use this rule. In early attempts to target different devices, CSS incorporated different media types (screen, print, handheld). The rationale was that by knowing the media type, the proper CSS rules could be applied. However, “handheld” and “screen” devices began to occupy a much wider range of sizes and having only one CSS rule per media device was not sufficient. screen is the media type always used for displaying content, no matter the type of device. The only keyword is added to indicate that this rule only applies to one media type (screen).
* and (max-width : 480px) — This part of the rule is called a media feature, and instructs the CSS compiler to apply the CSS styles to devices with a width of 480 pixels or smaller. Media features are the conditions that must be met in order to render the CSS within a media query.
* CSS rules are nested inside of the media query's curly braces. The rules will be applied when the media query is met. In the example above, the text in the body element is set to a font-size of 12px when the user's screen is less than 480px.

## Dots Per Inch (DPI)

* Another media feature we can target is screen resolution. Many times we will want to supply higher quality media (images, video, etc.) only to users with screens that can support high resolution media. Targeting screen resolution also helps users avoid downloading high resolution (large file size) images that their screen may not be able to properly display.

* To target by resolution, we can use the min-resolution and max-resolution media features. These media features accept a resolution value in either dots per inch (dpi) or dots per centimeter (dpc). Learn more about resolution measurements here.

```
@media only screen and (min-resolution:150dpi){
  .logo{
    background-image: url("../img/spaceship@2x.png");
  }
}

```
* The media query in the example above targets high resolution screens by making sure the screen resolution is at least 300 dots per inch. If the screen resolution query is met, then we can use CSS to display high resolution images and other media.

## Defining min-width and dpi 
We can use the and operator to require both a max-width of 480px and to have a min-resolution of 300dpi.

```
@media only screen and (max-resolution:150dpi) and (max-width:480px) {
  .page-description {
    font-size:20px;
  }
```

## Comma Separated List
If only one of multiple media features in a media query must be met, media features can be separated in a comma separated list.

For example, if we needed to apply a style when only one of the below is true:

* The screen is more than 480 pixels wide
* The screen is in landscape mode

Note that the second media feature is orientation. The orientation media feature detects if the page has more width than height. If a page is wider, it's considered landscape, and if a page is taller, it's considered portrait.

```
@media only screen and (min-width:320px) and (max-width:480px), (orientation:portrait) {
  .gallery-item .thumbnail{
width:95%;
  }
}
```

## Breakpoints

The points at which media queries are set are called breakpoints. Breakpoints are the screen sizes at which your web page does not appear properly. For example, if we want to target tablets that are in landscape orientation, we can create the following breakpoint:

```
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    /* CSS ruleset */
}
```

[Responsive Image](https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-5/screen-sizes.png)
