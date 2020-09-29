# Flexbox

The Flexbox Layout officially called CSS Flexible Box Layout Module is new layout module in CSS3 made to improve the items align, directions and order in the container even when they are with dynamic or even unknown size. 

The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space, or shrinks them to prevent overflow.


## Basics
The flex layout is constituted of parent container referred as flex container and its immediate children which are called flex items.
![alt Flexbox](https://github.com/shaktish/Notes/blob/master/assests/images/flexbox/CSS3-Flexbox-Model.jpg?raw=true)

In the box above you can see the properties and the terminology used to describe the flex container and its children

## Usage
To use flexbox layout just set the **display** property on the parent HTML element:

```css
.flex-container {
  display: -webkit-flex; /* Safari */
  display: flex;
}
```
Or if you want to display it like an inline element use:
```css
.flex-container {
  display: -webkit-inline-flex; /* Safari */
  display: inline-flex;
}
```
**Note:** This is the only property you need to set on the parent container and all its immediate children will become automatically flex items.

# Flexbox container properties

## flex-direction
This establishes the main-axis, 
Think of flex items as primarily laying out either in horizontal rows or vertical columns.

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

###  values
- **row (default)** : left to right in ltr; right to left in rtl
- row-reverse: right to left in ltr; left to right in rtl
- column: same as row but top to bottom
- column-reverse: same as row-reverse but bottom to top


#### row
```css
.flex-container {
  flex-direction: row;
}
```
With row direction the flex items are stacked in a row from left-to-right in ltr context

![alt flexbox-flex-direction-row](https://raw.githubusercontent.com/shaktish/Notes/master/assests/images/flexbox/flexbox-flex-direction-row.jpg)


#### row-reverse
```css
.flex-container {
  flex-direction: row-reverse;
}
```
With row-reverse direction the flex items are stacked in a row from right-to-left in ltr context

![alt flexbox-flex-direction-row-reverse](https://github.com/shaktish/Notes/blob/master/assests/images/flexbox/flexbox-flex-direction-row-reverse.jpg?raw=true)

#### column
```css
.flex-container {
  flex-direction: column;
}
```
With column direction the flex items are stacked in a column from top-to-bottom

![alt flexbox-flex-direction-column](https://github.com/shaktish/Notes/blob/master/assests/images/flexbox/flexbox-flex-direction-column.jpg?raw=true)

## Flex wrap
By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

```css
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

### values
- **nowrap (default)**: all flex items will be on one line
- wrap: flex items will wrap onto multiple lines, from top to bottom.
- wrap-reverse: flex items will wrap onto multiple lines from bottom to top.


#### nowrap
```css
.flex-container {
  flex-wrap: nowrap;
}
```
Flex items are displayed in one row, by default they are shrunk to fit the flex container's width

![alt flexbox-flex-wrap-nowrap](https://github.com/shaktish/Notes/blob/master/assests/images/flexbox/flexbox-flex-wrap-nowrap.jpg?raw=true)

#### wrap
```css
.flex-container {
  flex-wrap: wrap;
}
```
Flex items are displayed in multiple rows if needed from left-to-right and top-to-bottom

![alt flexbox-flex-wrap-wrap](https://github.com/shaktish/Notes/blob/master/assests/images/flexbox/flexbox-flex-wrap-wrapup.jpg?raw=true)


## flex-flow
This is a shorthand flex-direction and flex-wrap properties, which together define the flex container's main and cross axes. **Default is row nowrap.**
```css
flex-flow: <‘flex-direction’> || <‘flex-wrap’>
```

## justify-content
This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

![alt justify-content](https://github.com/shaktish/Notes/blob/master/assests/images/flexbox/flex-justify.jpg?raw=true)

### values
- flex-start (default): items are packed toward the start line
- flex-end: items are packed toward to end line
- center: items are centered along the line
- space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line
- space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
- space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is equal.

## align-items
This defines the default behaviour for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```
![alt align-items](https://github.com/shaktish/Notes/blob/master/assests/images/flexbox/align-items.jpg?raw=true)

- flex-start: cross-start margin edge of the items is placed on the cross-start line
- flex-end: cross-end margin edge of the items is placed on the cross-end line
- center: items are centered in the cross-axis
- baseline: items are aligned such as their baselines align
- stretch (default): stretch to fill the container (still respect min-width/max-width)

## align-content
This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.

**Note: this property has no effect when there is only one line of flex items.**

![alt align-content](https://github.com/shaktish/Notes/blob/master/assests/images/flexbox/align-content.jpg?raw=true)

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

- flex-start: lines packed to the start of the container
- flex-end: lines packed to the end of the container
- center: lines packed to the center of the container
- space-between: lines evenly distributed; the first line is at the start of the container while the last one is at the end
- space-around: lines evenly distributed with equal space around each line
- stretch (default): lines stretch to take up the remaining space

#### Note for flex containers
- all of the column-* properties have no effect on a flex container.
- the ::first-line and ::first-letter pseudo-elements do not apply to flex containers.


# Flexbox item properties

## order
By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.

**Note:** If you're changing **order** for a box, remember **default is 0**, if there were three boxes and u change box1 **order to 2**, the order will be like **box2, box3, box1**. Reason box2 and box3 will have **order number of 0 by default**.

![alt order](https://github.com/shaktish/Notes/blob/master/assests/images/flexbox/order.jpg?raw=true)

```css
.item {
  order: <integer>; /* default is 0 */
}
```

## flex-grow
This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).

![alt flex-grow](https://github.com/shaktish/Notes/blob/master/assests/images/flexbox/flex-grow.jpg?raw=true)

**Negative numbers are invalid.**

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

## flex-shrink
This defines the ability for a flex item to shrink if necessary.

**Note**: Negative numbers are invalid.

By default all flex items can be shrunk, but if we set it to 0 (don't shrink) they will maintain the original size

![alt flex-shrink](https://github.com/shaktish/Notes/blob/master/assests/images/flexbox/flexbox-flex-shrink.jpg?raw=true)

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

## flex-basis
This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword.

The auto keyword means "look at my width or height property" (which was temporarily done by the main-size keyword until deprecated). The content keyword means "size it based on the item's content" - this keyword isn't well supported yet, so it's hard to test and harder to know what its brethren max-content, min-content, and fit-content do.

If set to 0, the extra space around content isn't factored in. If set to auto, the extra space is distributed based on its flex-grow value. See this graphic.

Use flex-basis as u define width

**eg:** 

```css
.col {
width:33.333%;
}
// is same as
.col {
flex:33.333%
}
```

![alt flex-basis](https://github.com/shaktish/Notes/blob/master/assests/images/flexbox/flex-basis.jpg?raw=true)
```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

## flex
This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. 

**Default is 0 1 auto.**

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```
**It is recommended that you use** this shorthand property rather than set the individual properties. The short hand sets the other values intelligently.

## align-self
This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

Please see the align-items (align-vertically) explanation to understand the available values.

![alt flex-align-self](https://github.com/shaktish/Notes/blob/master/assests/images/flexbox/flexbox-align-self.jpg?raw=true)

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
### Flex Sample layout
```html
<!DOCTYPE html>
<html>
<head>
	<title>Flex layout</title>
	<meta name="viewport" content="width=device-width, initial-sclae=1.0">	
	<style type="text/css">

	* {
		padding:0;
		margin:0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Arial',sans-serif;
	}
	nav {
		display: flex;
	    justify-content: space-between;
	    padding: 1%;
	    background-color: #fff;
	    border-bottom: solid 1px #555;
	}

	nav ul {
		list-style: none;
		padding: 0;
   		margin: 0;
   		flex:1 1 50%;
   		text-align: right;
	}

	nav ul li {
		display: inline-block;
	}
	.logo {
		font-weight: bold;
		flex: 1 1 200px;
	}

	.main-wrap {
		display: flex;
		margin:40px 0;
	}

	main, aside {
		border:solid 1px red;
		padding: .5% 1% ;
	}

	main {
		flex:1 1 60%;
	}

	aside {
		flex:1 1 40%;
	}

	footer {
		display: flex;
		background-color:#000;
		padding:60px 0;
		color:#fff;
		justify-content: space-around;
	}

	footer .col {
		flex:0 1 20%;
		border:solid 1px #fff;
	}

	@media only screen and (max-width: 767px) {
		.main-wrap {
			flex-flow: row wrap;
		}
		footer {
			flex-flow: row wrap;
		}
		footer .col {
			flex:0 0 50%;
			padding:1%;
		}
	}
	</style>
</head>
<body>

	<nav>
		<div class="logo">Logo</div>
		<ul>
			<li>Sign up</li>
			<li>Login</li>
		</ul>
	</nav>
	<div class="main-wrap">
		<aside class="left-col">left col</aside>
		<main>main col</main>
		<aside class="right-col">right col</aside>
	</div>

	<footer>
		<div class="col col-1">col 1</div>
		<div class="col col-2">col 2</div>
		<div class="col col-3">col 3</div>
		<div class="col col-4">col 4</div>
	</footer>

</body>
</html>
```
Another simple layout 

```html
<!DOCTYPE html>
<html>
<head>
	<title>Flex layout</title>
	<meta name="viewport" content="width=device-width, initial-sclae=1.0">	
	<link href="https://fonts.googleapis.com/css?family=Lato:100,300,300i,400" rel="stylesheet">
	<style type="text/css">
	/*===========================*/
	/* BASIC SETUP */
	/*===========================*/
	* {
		padding:0;
		margin:0;
		box-sizing: border-box;
	}

	ul {
		list-style: none;
	}

	body {
		font-family: 'Arial',sans-serif;
		font-family: 'Lato','Arial', sans-serif;
		color:#555;
		text-rendering:optimizeLegibility;
	}

	/*===========================*/
	/* RESUABLE CODE */
	/*===========================*/
	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	section {
		padding-bottom:40px;
	}


	/*===========================*/
	/* LINKS */
	/*===========================*/
	a:link,
	a:visited {
		color:#555;
		text-decoration: none;
	}

	a:hover,
	a:active {
		color:#000;
		border-bottom: solid 2px #27ae60;
	}

	/*===========================*/
	/* HEADERS */
	/*===========================*/
	h2 {
		margin-bottom: 15px;
	}

	/*===========================*/
	/* NAV */
	/*===========================*/

	nav {
		padding:15px 0;
		border-bottom:solid 1px #333;
	}

	.logo {
		flex:1 1 200px;
	}

	nav .nav-items li {
		display: inline-block;
		margin-left: 15px;
	}

	/*===========================*/
	/* MAIN */
	/*===========================*/
	.main-wrap {
		padding-top: 15px;
		background:linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.0));
	}
	.grid {
		display:flex;
	}

	.col {
		padding: 0 1%;
	}

	.nav-col {
		flex:1 1 auto;
	}

	.main-col {
		flex:1 1 60%;
	}
	.adv-col {
		flex:1 1 auto;
	}

	.box {
		background:#555;
		max-width: 100%;
		height:auto;
		margin-bottom: 10px;
		padding:2%;
		color:#fff;
	}

	footer {
		background-color:#000;
		padding:1% 0;
	}

	footer .col {
		color:#fff;
		flex: 1 1 100%;
	}
	/* big tablets */
	@media only screen and (max-width:1200px) {
		.container {
			padding: 0 1%;
		}
	}
	/* small tablet to big tablet */
	@media only screen and (max-width:1023px) {

	}
	/* small phones to small tablets */
	@media only screen and (max-width:767px) {
		.nav-col {
			flex:0 1 auto;
		}

		.main-col {
			flex:1 1 60%;
		}
		.adv-col {
			flex:0 1 auto;
		}
		
	}
	/* small phones to 0px to 480px */
	@media only screen and (max-width:480px) {
		.grid {
			flex-wrap : wrap;
		}
		.nav-col {
			flex:0 1 100%;
		}

		.main-col {
			flex:1 1 100%;
		}
		.adv-col {
			flex:0 1 100%;
		}

		footer {
			padding: 1%;
		}

		 h2 {
			font-size: 18px;
			margin-top: 15px;
		}
	}

	</style>
</head>
<body>

	<nav>
		<div class="container">
			<div class="grid col">
				<div class="logo">CodeWorker</div>
				<ul class="nav-items">
					<li><a href="#">Sign up</a></li>
					<li><a href="#">Login</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<section class="main-wrap">
		<div class="container">
			<div class="grid">
				<div class="nav-col col">
					<h2>Navigation</h2>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">About us</a></li>
						<li><a href="#">Services</a></li>
						<li><a href="#">Contact us</a></li>
					</ul>
				</div>
				<div class="main-col col">
					<h2>Main content</h2>
					<p>This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword.</p>

					<p>The auto keyword means "look at my width or height property" (which was temporarily done by the main-size keyword until deprecated). The content keyword means "size it based on the item's content" - this keyword isn't well supported yet, so it's hard to test and harder to know what its brethren max-content, min-content, and fit-content do.</p>

					<p>If set to 0, the extra space around content isn't factored in. If set to auto, the extra space is distributed based on its flex-grow value. See this graphic.</p>	
				</div>
				<aside class="adv-col col">
					<div class="ad">
						<h2>Advetisement</h2>
						<div class="box">Big Offers</div>
						<div class="box">Sales Ends <strong>Today</strong></div>
					</div>

				</aside>
			</div>
		</div>
	</section>

	<footer>
		<div class="container">
			<div class="grid">
				<div class="col col-1">col 1</div>
				<div class="col col-2">col 2</div>
				<div class="col col-3">col 3</div>
				<div class="col col-4">col 4</div>
			</div>
		</div>
	</footer>

</body>
</html>
```
