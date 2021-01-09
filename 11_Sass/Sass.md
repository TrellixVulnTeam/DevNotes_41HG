# Sass

- Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions
- Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.

## Syntax
Sass supports two different syntaxes. Each one can load the other, so it's up to you and your team which one to choose

### .SCSS FILE
The SCSS syntax uses the file extension .scss. With a few small exceptions, it’s a superset of CSS, which means essentially all valid CSS is valid SCSS as well. Because of its similarity to CSS, it’s the easiest syntax to get used to and the most popular.
```SCSS
@mixin button-base() {
  @include typography(button);
  @include ripple-surface;
  @include ripple-radius-bounded;

  display: inline-flex;
  position: relative;
  height: $button-height;
  border: none;
  vertical-align: middle;

  &:hover { cursor: pointer; }

  &:disabled {
    color: $mdc-button-disabled-ink-color;
    cursor: default;
    pointer-events: none;
  }
}
```

### .SASS FILE
The indented syntax was Sass’s original syntax, and so it uses the file extension .sass. Because of this extension, it’s sometimes just called “Sass”. The indented syntax supports all the same features as SCSS, but it uses indentation instead of curly braces and semicolons to describe the format of the document.

```SCSS
@mixin button-base()
  @include typography(button)
  @include ripple-surface
  @include ripple-radius-bounded

  display: inline-flex
  position: relative
  height: $button-height
  border: none
  vertical-align: middle

  &:hover
    cursor: pointer

  &:disabled
    color: $mdc-button-disabled-ink-color
    cursor: default
    pointer-events: none
```
# Features of SASS

## Variables in CSS
- Prefixed with a $
- $pirmary-color : blue
- Easier to read and wirte than CSS custom properties 

```SCSS
$primary-color : #333;

body {
  color:$primary-color;
}
```

## Nesting 

```SCSS 

// SASS
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

// CSS
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}

```

## Partials 
You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A partial is a Sass file named with a leading underscore. You might name it something like _partial.scss. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the @use rule.

```SCSS
// _base.scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

## Modules
You don't have to write all your Sass in a single file. You can split it up however you want with the @use rule. This rule loads another Sass file as a module, which means you can refer to its variables, mixins, and functions in your Sass file with a namespace based on the filename. Using a file will also include the CSS it generates in your compiled output!

```scss
// styles.scss
@import 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```

## Mixins & Functions 
Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes. Here's an example for transform.

```SCSS
// SCSS SYNTAX
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
.box { 
  @include transform(rotate(30deg)); 
}

// CSS Syntax
.box {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}

```
To create a mixin you use the @mixin directive and give it a name. We've named our mixin transform. We're also using the variable $property inside the parentheses so we can pass in a transform of whatever we want. After you create your mixin, you can then use it as a CSS declaration starting with @include followed by the name of the mixin.


## Extend/Inheritance
This is one of the most useful features of Sass. Using @extend lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY. 

- Create base styles as placeholder/css style
- Extend it to other classes
- Example, %message-shared is the base style,
  - success,warning etc will extend base style

```SCSS
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

## Operators 
Doing math in your CSS is very helpful. Sass has a handful of standard math operators like +, -, *, /, and %. 
```SCSS
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

## Conditionals
The @if rule is written @if <expression> { ... }, and it controls whether or not its block gets evaluated (including emitting any styles as CSS). The expression usually returns either true or false—if the expression returns true, the block is evaluated, and if the expression returns false it’s not.

```SCSS
@mixin avatar($size, $circle: false) {
  width: $size;
  height: $size;

  @if $circle {
    border-radius: $size / 2;
  }
}

.square-av {
  @include avatar(100px, $circle: false);
}
.circle-av {
  @include avatar(100px, $circle: true);
}
```
## Live Sass Compiler
- by ritwickdey.live-sass
- Click to Watch Sass from Statusbar to turn on the live compilation and then click to Stop Watching Sass from Statusbar to turn on live compilation .


```JAVASCRIPT
"liveSassCompile.settings.generateMap": false,
    "liveSassCompile.settings.formats": [
        {
            // "format": "expanded",
            "format": "expanded",
            // "extensionName": ".css",
            "savePath": "~/../css/"
        }
    ]
```

