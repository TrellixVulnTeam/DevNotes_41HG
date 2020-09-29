# CSS Selectors

## Table of contents
- [CSS Specificity](#css-specificity)
- [CSS Selectors](#css-selectors)
- [Attribute Selectors](#attribute-selectors)

## CSS Specificity
- Specificity determines, which CSS rule is applied by the browsers. The most specific selector gets to assign its property values to the HTML elements.
- There are four distinct categories which define the specificity level of a given selector: inline styles, IDs, classes, attributes, and elements.

**Calculating Specificity**

The actual specificity of a group of nested selectors takes some calculating. 
- You can give every ID selector (#whatever) a value of **100**
- every class selector (.whatever) a value of **10** 
- every HTML selector (whatever) a value of **1** 
- When you add them all up, hey presto, you have a specificity value.

[specifity calculator](http://specificity.keegan.st "Specifity Calculator")

Let’s say this is our HTML:
```html 
<div class="container">
  <div id="main">
    <p>
      <a href="#">Link</a>
    </p>
  </div>
</div>
```
We want to assign a color to the <a> tag above.
There are many ways to target that <a> tag using CSS selectors. Below are five style rules that can get the job done:
```css
#main a {
  color: green;
}
p a {
  color: yellow;
}
.container #main a {
  color: pink;
}
div #main p a {
  color: orange;
}
a {
  color: red;
}
```
Since all five style rules are trying to assign a color property value to the a tag, the browser gets confused: Should the link be green, yellow, pink, orange or red?
It's PINK 

| Selector |  SpecificityValue |
| ----------- | ----------------------- |
| .container #main a |   111 |
| div #main p a | 103 |
| #main a | 101 |
| p a | 2 |
|a | 1 |
|So our a tag is pink. |

[Specifity reference link](https://www.webpagefx.com/blog/web-design/css-specificity/)

Selector Types 
Before you can calculate specificity values, you’ll need to be familiar with the types of CSS selectors:

| Type | Description | Examples | 
| ----------- | ----------- | -------------- |
|  ID selectors | They begin with a hash. #id | #container |
| Class selectors | They begin with a period. .class | .navbar |
| Attribute selectors | They’re in brackets. [attribute] | [type="text"], [rel="nofollow"], [class^="cont"] |
| Pseudo-classes | They begin with a colon. :pseudo-class | :visited, :hover, :active |
| Type selectors | They’re the name of standard HTML elements. |  div, ul, a | 
| Pseudo-elements | They begin with two colons. ::pseudo-elements | ::before, ::after, ::first-line


[W3schools CSS selector reference](https://www.w3schools.com/cssref/trysel.asp "CSS selector")

##  CSS Selectors
| Selector | Example | Example Description | 
| ----------- | ----------- | --------------------------- |
| .class | .intro | selects all elements |
| #id | #intro |  Style the element with id="intro": | 
| * | * | Selects all elements | 
| element | p | selects all p elements |
| element,element, | h1,p | Select and style all h1 elements AND all p elements: | 
| element element | div p | selects all p elements inside div elements | 
| element>element | div > p | Selects all p elements where the parent is a div element |
| element+element | div + p |  Selects all p elements that are placed immediately after div elements | 
| element1~element2 | p ~ ul  | Selects every ul element that are preceded by a p element |

## Attribute Selectors

- **[attribute]**

The [attribute] selector is used to select elements with the specified attribute.

Selects all a elements with a target attribute


```css
a[href] {
  color : red;
}
```
- **[attribute=value]** : The [attribute=value] selector is used to select elements with the specified attribute and value.

Selects all elements with target="_blank"

```css
a[target=_blank] {
  font-size :36px;
}
```

- **[attribute~=value]** : The [attribute~=value] selector is used to select elements with an attribute value containing a specified word.

Selects all elements with a title attribute containing the word "flower"

```css
[title~=flower] { 
    background-color: yellow;
}
```

- **[attribute|=value]** : The [attribute|=value] selector is used to select elements with the specified attribute starting with the specified value.

**Note:**The value has to be a whole word, either alone, like class="top", or followed by a hyphen(top-part ), like class="top-part".

Select and style elements, where the class attribute's value starts with "top" or 'top-part':

```css
[class|=top] { 
    background-color: yellow;
}
```


```html
// applies
<div class="top">
  <p>this is p tag</p>
</div>
// applies
  
<div class="top-part">
  <p>this is p tag</p>
</div>
// won't be applied  
<div class="top content">
  <p>this is p tag</p>
</div>
```
- **[attribute^=value]** : The [attribute^=value] selector matches every element whose attribute value begins with a specified value.

css
```css
[class^="top"] {
    background: #ffff00;
}
```
html
```html

//applies
<div class="top content">
  <p>this is p tag</p>
</div>

// won't apply
<div class="mix top content">
  <p>this is p tag</p>
</div>
```

- **[attribute$=value]** : The [attribute$=value] selector matches every element whose attribute value ends with a specified value.

css
```css
[class^="top"] {
    background: teal;
    color:#fff;
}
```
html
```html
// applies
<div class="content top">
  <p>this is p tag</p>
</div>

// won't apply
<div class="top content">
  <p>this is p tag</p>
</div>
```

- **[attribute*=value]** : The [attribute*=value] selector matches every element whose attribute value containing a specified value.
css
```css
[class*="top"] {
    background: orange;
    color:#fff;
}
```
html
```html
// applies
<div class="content top">
  <p>this is p tag</p>
</div>

//  applies
<div class="top content">
  <p>this is p tag</p>
</div>
```


- **:not(selector)** : The :not(selector) selector matches every element that is NOT the specified element/selector.

css
```css
// select all input except and style the background to yellow.
form input:not([type='button']) {
  background-color:yellow;
}

```
html
```html
<form onsubmit="return validate()">
  <label for="fname">Name</label>
  <input type="text" name="fname" id="fname">
  <label for="password">Password</label>
  <input type="password" name="password" id="password">
  <input type="submit" value="Submit">
</form>
```



