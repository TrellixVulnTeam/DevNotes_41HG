## Table of contents 
- [jQuery Traversing](#jquery-traversing)
- [jQuery Traversing Ancestors](#jquery-traversing-ancestors)
- [jQuery Traversing Descendants](#jquery-traversing-descendants)
- [jQuery Traversing Siblings](#jquery-traversing-siblings)
- [jQuery Traversing Filtering](#jquery-traversing-filtering)

# jQuery Traversing

### What is Traversing?
- jQuery traversing, which means "move through", are used to "find" (or select) HTML elements based on their relation to other elements. 
- Start with one selection and move through that selection until you reach the elements you desire.

### jQuery Traversing - Ancestors
- An ancestor is a parent, grandparent, great-grandparent, and so on.
- A descendant is a child, grandchild, great-grandchild, and so on.
- With jQuery you can traverse up the DOM tree to find ancestors of an element.

# jQuery Traversing Ancestors
An ancestor is a parent, grandparent, great-grandparent, and so on.
With jQuery you can traverse up the DOM tree to find ancestors of an element.

## Traversing Up the DOM Tree
Three useful jQuery methods for traversing up the DOM tree are:
- parent()
- parents()
- parentsUntil()

## jQuery parent() Method
- The parent() method returns the direct parent element of the selected element.
- This method only traverse a single level up the DOM tree.

The following example returns the direct parent element of each ```<span>``` elements:

```html
<!DOCTYPE html>
<html>
<head>
<style>
.ancestors * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jq
    //$("span").parent().css({"color": "red", "border": "2px solid red"});
    
    //js
    var span = document.querySelectorAll('span');
    span.forEach(function(el){
    	el.parentNode.style.borderColor = 'red';
    })
    
});
</script>
</head>
<body>

<div class="ancestors">
  <div style="width:500px;">div (great-grandparent)
    <ul>ul (grandparent)  
      <li>li (direct parent)
        <span>span</span>
      </li>
    </ul>   
  </div>

  <div style="width:500px;">div (grandparent)   
    <p>p (direct parent)
        <span>span</span>
      </p> 
  </div>
</div>

</body>
</html>
```

## jQuery parents() Method
The parents() method returns all ancestor elements of the selected element, all the way up to the document's root element (<html>).

```html
<!DOCTYPE html>
<html>
<head>
<style>
.ancestors * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("span").parents().css({"color": "red", "border": "2px solid red"});
});
</script>
</head>

<body class="ancestors">body (great-great-grandparent)
  <div style="width:500px;">div (great-grandparent)
    <ul>ul (grandparent)  
      <li>li (direct parent)
        <span>span</span>
      </li>
    </ul>   
  </div>
</body>

<!-- The outer red border, before the body element, is the html element (also an ancestor) -->
</html>
```
You can also use an optional parameter to **filter** the search for ancestors. select the parent (ancestors way)

```html
$(document).ready(function(){
    $("span").parents("ul");
});
```

## jQuery parentsUntil() Method
The parentsUntil() method returns all ancestor elements between two given arguments.
```
$(document).ready(function(){
    $("span").parentsUntil("div");
});
```

# jQuery Traversing Descendants
- A descendant is a child, grandchild, great-grandchild, and so on.
- With jQuery you can traverse down the DOM tree to find descendants of an element.

### Traversing Down the DOM Tree
Two useful jQuery methods for traversing down the DOM tree are:
- children()
- find()

## jQuery children() Method
- The children() method returns all direct children of the selected element.
- This method only traverse a single level down the DOM tree.
```html
<!DOCTYPE html>
<html>
<head>
<style>
.descendants * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jq
    //$("div").children().css({"color": "red", "border": "2px solid red"});
    
    //js
    var d = document.querySelector('.descendants').children;
    
	for(var i =0; i < d.length; i++){
    	d[i].style.color='red';
        d[i].style.borderColor='red';
    }
});
</script>
</head>
<body>

<div class="descendants" style="width:500px;">div (current element) 
  <p>p (child)
    <span>span (grandchild)</span>     
  </p>
  <p>p (child)
    <span>span (grandchild)</span>
  </p> 
</div>

</body>
</html>
```
You can also use an optional parameter to filter the search for children.

The following example returns all <p> elements with the class name "first", that are direct children of <div>:

```html
$(document).ready(function(){
    $("div").children("p.first");
});
```

## jQuery find() Method
The find() method returns descendant elements of the selected element, all the way down to the last descendant.

The following example returns all <span> elements that are descendants of <div>:
```html
<!DOCTYPE html>
<html>
<head>
<style>
.descendants * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("div").find("span").css({"color": "red", "border": "2px solid red"});
    
    //js
    //document.querySelector('div span').style.color='red';
});
</script>
</head>
<body>

<div class="descendants" style="width:500px;">div (current element) 
  <p>p (child)
    <span>span (grandchild)</span>     
  </p>
  <p>p (child)
    <span>span (grandchild)</span>
  </p> 
</div>

</body>
</html>

```

# jQuery Traversing Siblings
With jQuery you can traverse sideways in the DOM tree to find siblings of an element.

Siblings share the same parent. 

### Traversing Sideways in The DOM Tree :
There are many useful jQuery methods for traversing sideways in the DOM tree:
- siblings()
- next()
- nextAll()
- nextUntil()
- prev()
- prevAll()
- prevUntil()

## jQuery siblings() Method
The siblings() method returns all sibling elements of the selected element.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.siblings * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){

	//jq
    // $("h2").siblings().css({"color": "red", "border": "2px solid red"});
    
    //js
     var hi = document.querySelector('h2').parentNode.children;
     for(var i =0; i< hi.length; i++){
     	hi[i].style.color='red';
     }
     
});
</script>
</head>
<body class="siblings">

<div>div (parent)
  <p>p</p>
  <span>span</span>
  <h2>h2</h2>
  <h3>h3</h3>
  <p>p</p>
</div>

</body>
</html>
```
You can also use an optional parameter to filter the search for siblings.

```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.siblings * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	// jq
    //$("h2").siblings("p").css({"color": "red", "border": "2px solid red"});
    
    //js
     var hi = document.querySelector('h2').parentNode.children;
     
     for(var i =0; i < hi.length; i++){
     	if(hi[i].tagName == 'P'){
        	hi[i].style.color='red';
        }
     }
});
</script>
</head>
<body class="siblings">

<div>div (parent)
  <p>p</p>
  <span>span</span>
  <h2>h2</h2>
  <h3>h3</h3>
  <p>p</p>
</div>

</body>
</html>
```
## jQuery next() Method
The next() method returns the next sibling element of the selected element.

The following example returns the next sibling of <h2>:
```html
<!DOCTYPE html>
<html>
<head>
<style>
.siblings * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    //$("h2").next().css({"color": "red", "border": "2px solid red"});
    
    //js
    document.querySelector('h2').nextElementSibling.style.color='red';
});
</script>
</head>
<body class="siblings">

<div>div (parent)
  <p>p</p>
  <span>span</span>
  <h2>h2</h2>
  <h3>h3</h3>
  <p>p</p>
</div>

</body>
</html>

```
## jQuery nextAll() Method
The nextAll() method returns all next sibling elements of the selected element.
```html
<!DOCTYPE html>
<html>
<head>
<style>
.siblings * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("h2").nextAll().css({"color": "red", "border": "2px solid red"});
});
</script>
</head>
<body class="siblings">

<div>div (parent)
  <p>p</p>
  <span>span</span>
  <h2>h2</h2>
  <h3>h3</h3>
  <p>p</p>
</div>

</body>
</html>
```
## jQuery nextUntil() Method
The nextUntil() method returns all next sibling elements between two given arguments.

```javascript
$(document).ready(function(){
    $("h2").nextUntil("h6");
});
```

## jQuery prev(), prevAll() & prevUntil() Methods
- The prev(), prevAll() and prevUntil() methods work just like the methods above but with reverse functionality: 
- They return previous sibling elements (traverse backwards along sibling elements in the DOM tree, instead of forward).

# jQuery Traversing Filtering

### The first(), last(), eq(), filter() and not() Methods

- The most basic filtering methods are first(), last() and eq(), which allow you to select a specific element based on its position in a group of elements.
- Other filtering methods, like filter() and not() allow you to select elements that match or do not match, a certain criteria.

### jQuery closest() Method
The closest() method returns the first ancestor of the selected element.

**The DOM tree:** This method traverse upwards from the current element, all the way up to the document's root element (<html>), to find the first ancestor of DOM elements.

This method is similar to parents(), in that they both traverse up the DOM tree. The differences are as follows:

#### closest()

- Begins with the current element
- Travels up the DOM tree and returns the first (single) ancestor that matches the passed expression
- The returned jQuery object contains zero or one element

#### parents()

- Begins with the parent element
- Travels up the DOM tree and returns all ancestors that matches the passed expression
- The returned jQuery object contains zero or more than one element


** Syntax** 

Return the first ancestor of the selected element:

```$(selector).closest(filter)```

filter	: Required. Specifies a selector expression, element or jQuery object to narrow down the ancestor search

The following example returns all <p> elements that do not have class name "intro":
	
```html
<!DOCTYPE html>
<html>
<head>
<style>
.ancestors * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("span").closest("ul").css({"color": "red", "border": "2px solid red"});
});
</script>
</head>

<body class="ancestors">body (great-great-grandparent)
  <div style="width:500px;">div (great-grandparent)
    <ul>ul (second ancestor - second grandparent) 
    <ul>ul (first ancestor - first grandparent)
      <li>li (direct parent)
        <span>span</span>
      </li>
    </ul>
    </ul>   
  </div>
</body>

<!-- In this example, $("span").closest("ul") means that we search for the first ancestor of span that is an ul element. The CLOSEST ancestor of span is li, but since we are looking for a div, jQuery skips the li element and continue the search for the next ancestor, on and on until it locates our search for ul. If we use the parents() method instead, it will return both ul ancestors. --> 
</html>
```

## jQuery first() Method
The first() method returns the first element of the specified elements.

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("div").first().css("background-color", "yellow");
    
    //document.querySelectorAll('div')[0].style.backgroundColor='yellow';
});
</script>
</head>
<body>

<h1>Welcome to My Homepage</h1>

<p>This is a paragraph.</p>

<div style="border: 1px solid black;">
  <p>A paragraph in a div.</p>
  <p>Another paragraph in a div.</p>
</div>
<br>

<div style="border: 1px solid black;">
  <p>A paragraph in another div.</p>
  <p>Another paragraph in another div.</p>
</div>
<br>

<div style="border: 1px solid black;">
  <p>A paragraph in another div.</p>
  <p>Another paragraph in another div.</p>
</div>

</body>
</html>
```
### jQuery last() Method
The last() method returns the last element of the specified elements.
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jq
    //$("div").last().css("background-color", "yellow");
  	//js
    document.querySelectorAll('div')[document.querySelectorAll('div').length-1].style.backgroundColor='yellow';
});
</script>
</head>
<body>

<h1>Welcome to My Homepage</h1>

<p>This is a paragraph.</p>

<div style="border: 1px solid black;">
  <p>A paragraph in a div.</p>
  <p>Another paragraph in a div.</p>
</div>
<br>

<div style="border: 1px solid black;">
  <p>A paragraph in another div.</p>
  <p>Another paragraph in another div.</p>
</div>
<br>

<div style="border: 1px solid black;">
  <p>A paragraph in another div.</p>
  <p>Another paragraph in another div.</p>
</div>

</body>
</html>
```
## jQuery eq() method
The eq() method returns an element with a specific index number of the selected elements.

The index numbers start at 0, so the first element will have the index number 0 and not 1. The following example selects the second <p> element (index number 1):

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    //$("p").eq(1).css("background-color", "yellow");
    
    document.querySelectorAll('p')[1].style.backgroundColor='yellow';
});
</script>
</head>
<body>

<h1>Welcome to My Homepage</h1>

<p>My name is Donald (index 0).</p>
<p>Donald Duck (index 1).</p>
<p>I live in Duckburg (index 2).</p>
<p>My best friend is Mickey (index 3).</p>

</body>
</html>
```
## jQuery filter() Method
The filter() method lets you specify a criteria. Elements that do not match the criteria are removed from the selection, and those that match will be returned.
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    //$("p").filter(".intro").css("background-color", "yellow");
    
    var intro = document.querySelectorAll('.intro');
    // use for loop 

    // this tenchinuqe is not  browser supported and has many issues
	[].forEach.call(intro, function(el){
    	el.style.backgroundColor='yellow';
    })
});
</script>
</head>
<body>

<h1>Welcome to My Homepage</h1>

<p>My name is Donald.</p>
<p class="intro">I live in Duckburg.</p>
<p class="intro">I love Duckburg.</p>
<p>My best friend is Mickey.</p>

</body>
</html>
```
### jQuery not() Method
The not() method returns all elements that do not match the criteria.

Tip: The not() method is the opposite of filter().

The following example returns all <p> elements that do not have class name "intro":
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    //$("p").not(".intro").css("background-color", "yellow");
    
    var pi = document.querySelectorAll('p:not(.intro)');
    for(var i=0; i<pi.length; i++){
    	pi[i].style.backgroundColor='yellow';
    }
});
</script>
</head>
<body>

<h1>Welcome to My Homepage</h1>

<p>My name is Donald.</p>
<p class="intro">I live in Duckburg.</p>
<p class="intro">I love Duckburg.</p>
<p>My best friend is Mickey.</p>

</body>
</html>
```
