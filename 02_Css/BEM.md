# BEM
Block-Element-Modifier

The BEM approach ensures that everyone who participates in the development of a website works with a single codebase and speaks the same language. Using proper naming will prepare you for the changes in design of the website.

Reference 
[BEM naming convention](http://getbem.com/naming/)


# Block
Encapsulates a standalone entity that is meaningful on its own. While blocks can be nested and interact with each other, semantically they remain equal; there is no precedence or hierarchy.

### Naming
Block names may consist of Latin letters, digits, and dashes. To form a CSS class, add a short prefix for namespacing: .block

### HTML
Any DOM node can be a block if it accepts a class name.

```<div class="block">...</div>```

### CSS
Use class name selector only
No tag name or ids
No dependency on other blocks/elements on a page
```.block { color: #042; }```

# Element
Parts of a block and have no standalone meaning. Any element is semantically tied to its block.

### Naming
Element names may consist of Latin letters, digits, dashes and underscores. CSS class is formed as block name plus two underscores plus element name: .block__elem

### HTML
Any DOM node within a block can be an element. Within a given block, all elements are semantically equal.

```html
<div class="block">
	<span class="block__elem"></span>
</div>
```	

## CSS
Use class name selector only
No tag name or ids
No dependency on other blocks/elements on a page

**Good**

```css
.block__elem { color: #042; }
```

**Bad**

```css
.block .block__elem { color: #042; }
	div.block__elem { color: #042; }
```

# Modifier
Flags on blocks or elements. Use them to change appearance, behavior or state.


### Naming

Modifier names may consist of Latin letters, digits, dashes and underscores. CSS class is formed as block’s or element’s name plus two dashes: .block--mod or .block__elem--mod and .block--color-black with .block--color-red. Spaces in complicated modifiers are replaced by dash.

### HTML

Modifier is an extra class name which you add to a block/element DOM node. Add modifier classes only to blocks/elements they modify, and keep the original class:

Good
```css
<div class="block block--mod">...</div>
<div class="block block--size-big block--shadow-yes">...</div>
```
**Bad**

```
<div class="block--mod">...</div>
```
### CSS
Use modifier class name as selector:

```css
.block--hidden { }
To alter elements based on a block-level modifier:

.block--mod .block__elem { }
Element modifier:

.block__elem--mod { }
```


## Worked Example

```html
<html>
<head>
	<title></title>
	<style type="text/css">
		* {
			box-sizing:border-box;
		}

		html,body {
			margin:0;
			padding:0;
			font-family: sans-serif;
		}

		.top-events {
			display: flex;
		}

		.top-events__item {
			flex-basis:33.33%;
			background-color: teal;
			border:#333 solid 1px;
			padding:1%;
			color:#fff;
		}

		.top-events__item:nth-child(even) {
			background-color: lavender;
			color:#000;
		}
		.top-events__body {
			line-height: 160%;
		}

	</style>
</head>
<body>
	<div class="top-events">
		<div class="top-events__item">
			<h2 class="top-events__title">Block</h2>
			<p class="top-events__body">Encapsulates a standalone entity that is meaningful on its own. While blocks can be nested and interact with each other, semantically they remain equal; there is no precedence or hierarchy. Holistic entities without DOM representation (such as controllers or models) can be blocks as well.</p>
		</div>
		<div class="top-events__item">
<h2 class="top-events__title">Element</h2>
			<p class="top-events__body">Parts of a block and have no standalone meaning. Any element is semantically tied to its block.</p>

			<p class="top-events__body">Element names may consist of Latin letters, digits, dashes and underscores. CSS class is formed as block name plus two underscores plus element name: .block__elem</p>
		</div>
		<div class="top-events__item">
			<h2 class="top-events__title">Modifier</h2>
			<p class="top-events__body">Flags on blocks or elements. Use them to change appearance, behavior or state.</p>

			<p class="top-events__body">CSS class is formed as block’s or element’s name plus two dashes: .block--mod or .block__elem--mod and .block--color-black with .block--color-red. Spaces in complicated modifiers are replaced by dash.</p>
		</div>
	</div>
</body>
</html>
```
