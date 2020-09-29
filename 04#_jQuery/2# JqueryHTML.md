## Table of contents 
- [jQuery Get Content and Attributes](#jquery-get-content-and-attributes)
- [jQuery Set Content and Attributes](#jquery-set-content-and-attributes)
- [jQuery Add Elements](#jquery-add-elements)
- [jQuery Remove Elements](#jquery-remove-elements)
- [jQuery Get and Set CSS Classes](#jquery-get-and-set-css-classes)
- [jQuery CSS Method](#jquery-css-method)
- [jQuery  Dimensions](#jquery-dimensions)

# jQuery Get Content and Attributes

jQuery contains powerful methods for changing and manipulating HTML elements and attributes.

- One very important part of jQuery is the possibility to manipulate the DOM.
- jQuery comes with a bunch of DOM related methods that make it easy to access and manipulate elements and attributes.

## Get Content - text(), html(), and val()
Three simple, but useful, jQuery methods for DOM manipulation are:

- text() - Sets or returns the text content of selected elements
- html() - Sets or returns the content of selected elements (including HTML markup)
- val() - Sets or returns the value of form fields

#### Example : 

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
    });
});
</script>
</head>
<body>

<p id="test">This is some <b>bold</b> text in a paragraph.</p>

<button id="btn1">Show Text</button>
<button id="btn2">Show HTML</button>

</body>
</html>
```

The following example demonstrates how to get the value of an input field with the jQuery val() method:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        alert("Value: " + $("#test").val());
    });
});
</script>
</head>
<body>

<p>Name: <input type="text" id="test" value="Mickey Mouse"></p>

<button>Show Value</button>

</body>
</html>

```

## Get Attributes - attr()

The jQuery attr() method is used to get attribute values.
The following example demonstrates how to get the value of the href attribute in a link:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
    	// jquery
        alert($("#w3s").attr("href"));
        //js
        alert(document.querySelector('#w3s').getAttribute('id'));
    });
});
</script>
</head>
<body>

<p><a href="https://www.w3schools.com" id="w3s">W3Schools.com</a></p>

<button>Show href Value</button>

</body>
</html>

```

# jQuery Set Content and Attributes

We will use the same three methods from the previous page to set content:

- text() - Sets or returns the text content of selected elements
- html() - Sets or returns the content of selected elements (including HTML markup)
- val() - Sets or returns the value of form fields

Example : 
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("#btn1").click(function(){
    	//jquery
        //$("#test1").text("Hello world!");
        
        //js
        document.querySelector('#test1').innerText = 'Hello wolrd by me!'
    });
    $("#btn2").click(function(){
    	//jquery
        //$("#test2").html("<b>Hello world!</b>");
        //js
        document.querySelector('#test2').innerHTML = '<b> Hello world, be strong</b> '
    });
    $("#btn3").click(function(){
    	//jquery
        $("#test3").val("Dolly Duck");
        //js
        document.querySelector('#test3').value = 'Utchistha'
    });
});
</script>
</head>
<body>

<p id="test1">This is a paragraph.</p>
<p id="test2">This is another paragraph.</p>

<p>Input field: <input type="text" id="test3" value="Mickey Mouse"></p>

<button id="btn1">Set Text</button>
<button id="btn2">Set HTML</button>
<button id="btn3">Set Value</button>

</body>
</html>

```

## A Callback Function for text(), html(), and val()

- All of the three jQuery methods above: text(), html(), and val(), also come with a callback function.
- The callback function has two parameters: the index of the current element in the list of elements selected and the original (old) value. 
- You then return the string you wish to use as the new value from the function.

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
//jquery
/*
    $("#btn1").click(function(){
        $("#test1").text(function(justIndex, origText){
            return "Old text: " + origText + " New text: Hello world! (index: " + justIndex + ")"; 
        });
    });
*/    

// js
document.querySelector('#btn1').onclick = function () {
	document.querySelector('#test1').innerText = 'New text: Hello world!';
}

    $("#btn2").click(function(){
        $("#test2").html(function(justIndex, origText){
            return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + justIndex + ")"; 
        });
    });
});
</script>
</head>
<body>

<p id="test1">This is a <b>bold</b> paragraph.</p>
<p id="test2">This is another <b>bold</b> paragraph.</p>

<button id="btn1">Show Old/New Text</button>
<button id="btn2">Show Old/New HTML</button>

</body>
</html>

```

## Set Attributes attr()

The jQuery attr() method is also used to set/change attribute values.

The following example demonstrates how to change (set) the value of the href attribute in a link:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){

    //jquery
    $("button").click(function(){
        $("#w3s").attr("href", "https://www.w3schools.com/jquery");
    });

    
    //js
    document.querySelector('button').onclick = function () {
    	document.querySelector('#w3s').setAttribute('href','https://www.google.com')
    }
    
    
});
</script>
</head>
<body>

<p><a href="https://www.w3schools.com" id="w3s">W3Schools.com</a></p>

<button>Change href Value</button>

<p>Mouse over the link (or click on it) to see that the value of the href attribute has changed.</p>

</body>
</html>
```

The attr() method also allows you to set multiple attributes at the same time.

The following example demonstrates how to set both the href and title attributes at the same time:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jquery
    /*
    $("button").click(function(){
        $("#w3s").attr({
            "href" : "https://www.w3schools.com/jquery",
            "title" : "W3Schools jQuery Tutorial"
        });
    });
    */
    
    //js
    document.querySelector('button').onclick= function () {
    	document.querySelector('#w3s').setAttribute('href', 'https://www.google.com');
        document.querySelector('#w3s').setAttribute('title', 'google');
    }
});
</script>
</head>
<body>

<p><a href="https://www.w3schools.com" title="some title" id="w3s">W3Schools.com</a></p>

<button>Change href and title</button>

<p>Mouse over the link to see that the href attribute has changed and a title attribute is set.</p>

</body>
</html>
```

## A Callback Function for attr()
The jQuery method attr(), also come with a callback function.  The callback function has two parameters: 

- The index of the current element in the list of elements selected and the original (old) attribute value. 
- You then return the string you wish to use as the new attribute value from the function.

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#w3s").attr("href", function(i, origValue){
            return origValue + "/jquery"; 
        });
    }); 
});
</script>
</head>
<body>

<p><a href="https://www.w3schools.com" id="w3s">W3Schools.com</a></p>

<button>Change href Value</button>

<p>Mouse over the link (or click on it) to see that the value of the href attribute has changed.</p>

</body>
</html>
```


# jQuery Add Elements

With jQuery, it is easy to add new elements/content.

![alt before-after-append-prepend-difference](https://github.com/shaktish/Notes/blob/master/assests/images/jquery/before-after-prepend-append.png?raw=true)

## Add New HTML Content

We will look at four jQuery methods that are used to add new content:
- append() - Inserts content at the end of the selected elements
- prepend() - Inserts content at the beginning of the selected elements
- after() - Inserts content after the selected elements
- before() - Inserts content before the selected elements

## jQuery append() Method

The jQuery append() method inserts content AT THE END of the selected HTML elements.

##### Syntax
```
append(content)
// content: htmlString or Element or Text or Array or jQuery
```


```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//js
	/*
    $("#btn1").click(function(){
        $("p").append(" <b>Appended text</b>.");
    });
    */
    
    //js
    document.querySelector('#btn1').onclick=function () {
    	var bold = document.createElement('b');
        bold.appendChild(document.createTextNode('Append Duo text'))
        
    	document.querySelector('p').appendChild(bold)
    }
    
	//jquery
    /*
    $("#btn2").click(function(){
        $("ol").append("<li>Appended item</li>");
    });
    */
    
    //js
    
    document.querySelector('#btn2').onclick=function () {
    	var li = document.createElement('li');
        li.innerHTML = 'Appended item 4';
        document.querySelector('ol').appendChild(li);
    }
});
</script>
</head>
<body>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>

<button id="btn1">Append text</button>
<button id="btn2">Append list items</button>

</body>
</html>
 ```

## jQuery prepend() Method

The jQuery prepend() method inserts content AT THE BEGINNING of the selected HTML elements.

```html
 <!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jquery
    /*
    $("#btn1").click(function(){
        $("p").prepend("<b>Prepended text</b>. ");
    }); 
    */
    //js
    document.querySelector('#btn1').onclick=function(){
    	//create bold tag
    	var bold = document.createElement('b');
        // create text node for bold tag and append it bold element
        bold.appendChild(document.createTextNode('Bold Prepended Text'));
        // select p tag
    	var ps = document.querySelector('p');
        // insertbefore the bold tag 
        ps.insertBefore(bold,ps.firstChild);   
    }
/*    
    //jquery
    $("#btn2").click(function(){
        $("ol").prepend("<li>Prepended item</li>");
    });
*/
	//js
    document.querySelector('#btn2').onclick=function () {
    	var li = document.createElement('li');
        li.appendChild(document.createTextNode('Prepended ITEM'));
        
        document.querySelector('ol').insertBefore(li,document.querySelector('ol').firstChild);
    }
    
});
</script>
</head>
<body>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>

<button id="btn1">Prepend text</button>
<button id="btn2">Prepend list item</button>

</body>
</html>
 ```

### Add Several New Elements with append() and prepend()

In both examples above, we have only inserted some text/HTML at the beginning/end of the selected HTML elements.

However, both the append() and prepend() methods can take an infinite number of new elements as parameters. The new elements can be generated with text/HTML (like we have done in the examples above), with jQuery, or with JavaScript code and DOM elements.

In the following example, we create several new elements. The elements are created with text/HTML, jQuery, and JavaScript/DOM. Then we append the new elements to the text with the append() method (this would have worked for prepend() too) :

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
function appendText() {
    var txt1 = "<p>Text.</p>";              // Create text with HTML
    var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text.";
    
    // jquery method
    var test = {
    id: "div",
    class: "divclass",
    css: {
      "color": "Green"
         }
    };
    var txt4 = $("<div>", test);
    txt4.html("New Division");

    // Create text with DOM
    $("body").append(txt1, txt2, txt3, txt4);     // Append new elements
}
</script>
</head>
<body>

<p>This is a paragraph.</p>
<button onclick="appendText()">Append text</button>

</body>
</html>
```

## jQuery after() and before() Methods
- The jQuery after() method inserts content AFTER the selected HTML elements.
- The jQuery before() method inserts content BEFORE the selected HTML elements.

![alt before-after-append-prepend-difference](https://github.com/shaktish/Notes/blob/master/assests/images/jquery/before-after-prepend-append.png?raw=true)

**InsertAdjacentHTML Javascript**

![alt insertAdjacentHTML](https://github.com/shaktish/Notes/blob/master/assests/images/jquery/insertAdjacentHTML.png?raw=true)

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jquery
/*
    $("#btn1").click(function(){
        $("img").before("<b>Before</b>");
    });
*/
	//js
    document.querySelector('#btn1').onclick=function(){
   		document.querySelector('img').insertAdjacentHTML('beforebegin','<b>Before</b>')
    }
/*    
    //jquery
    $("#btn2").click(function(){
        $("img").after("<i>After</i>");
    });
*/
    //js
    document.querySelector('#btn2').onclick=function(){
   		document.querySelector('img').insertAdjacentHTML('afterend','<i>Before</i>')
    }
});
</script>
</head>
<body>

<img src="/images/w3jquery.gif" alt="jQuery" width="100" height="140"><br><br>

<button id="btn1">Insert before</button>
<button id="btn2">Insert after</button>

</body>
</html>
```

# jQuery Remove Elements
With jQuery, it is easy to remove existing HTML elements.

### Remove Elements/Content
To remove elements and content, there are mainly two jQuery methods:

- remove() - Removes the selected element (and its child elements)
- empty() - Removes the child elements from the selected element

## jQuery remove() Method
The jQuery remove() method removes the selected element(s) and its child elements.

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
/*
	//jquery
    $("button").click(function(){
        $("#div1").remove();
    });
*/
	//js
    document.querySelector('button').onclick=function(){
    	document.querySelector('div').removeChild(document.querySelector('div').childNodes[0]);
    }
    
});
</script>
</head>
<body>

<div id="div1" style="height:100px;width:300px;border:1px solid black;background-color:yellow;">

This is some text in the div.
<p>This is a paragraph in the div.</p>
<p>This is another paragraph in the div.</p>

</div>
<br>

<button>Remove div element</button>

</body>
</html>
```

## jQuery empty() Method
The jQuery empty() method removes the child elements of the selected element(s).

``` html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").empty();
    });
});
</script>
</head>
<body>

<div id="div1" style="height:100px;width:300px;border:1px solid black;background-color:yellow;">

This is some text in the div.
<p>This is a paragraph in the div.</p>
<p>This is another paragraph in the div.</p>

</div>
<br>

<button>Empty the div element</button>

</body>
</html>
```

## Filter the Elements to be Removed
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").remove(".test, .demo");
    });
});
</script>
<style>
.test {
    color: red;
    font-size: 20px;
}

.demo {
    color: green;
    font-size: 25px;
}
</style>
</head>
<body>

<p>This is a paragraph.</p>
<p class="test">This is p element with class="test".</p>
<p class="test">This is p element with class="test".</p>
<p class="demo">This is p element with class="demo".</p>

<button>Remove all p elements with class="test" and class="demo"</button>

</body>
</html>
 ``` 

# jQuery Get and Set CSS Classes
With jQuery, it is easy to manipulate the CSS of elements.

## jQuery Manipulating CSS
jQuery has several methods for CSS manipulation. We will look at the following methods:

- addClass() - Adds one or more classes to the selected elements
- removeClass() - Removes one or more classes from the selected elements
- toggleClass() - Toggles between adding/removing classes from the selected elements
- css() - Sets or returns the style attribute

## jQuery addClass() Method
You can add class attributes to different elements.
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jquery
    //$("button").click(function(){
        //$("h1, h2, p").addClass("blue");
        //$("div").addClass("important");
    //});
    
    //js
    document.querySelector('button').onclick=function(){
        
        document.querySelector('h1').classList.add('blue');
        document.querySelector('h2').classList.add('blue');
        var pi = document.querySelectorAll('p');
        
        pi.forEach(function(el){
        	console.log(el);
        	el.classList.add('blue');
        })

        document.querySelector('div').classList.add('important');
    }
});
</script>
<style>
.important {
    font-weight: bold;
    font-size: xx-large;
}

.blue {
    color: blue;
}
</style>
</head>
<body>

<h1>Heading 1</h1>
<h2>Heading 2</h2>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<div>This is some important text!</div><br>

<button>Add classes to elements</button>

</body>
</html>

```
* You can also specify multiple classes within the addClass() method:
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
    	//jquery
        $("#div1").addClass("important blue");
        
        //js
        document.querySelector('#div1').classList.add('blue', 'important');
    });
});
</script>
<style>
.important {
    font-weight: bold;
    font-size: xx-large;
}

.blue {
    color: blue;
}
</style>
</head>
<body>

<div id="div1">This is some text.</div>
<div id="div2">This is some text.</div>
<br>

<button>Add classes to first div element</button>

</body>
</html>
```

## jQuery removeClass() Method
The following example shows how to remove a specific class attribute from different elements:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jquery
    /*
    $("button").click(function(){
        $("h1, h2, p").removeClass("blue");
    });
    */
    
    //js
    document.querySelector('button').onclick=function(){
      document.querySelector('h1').classList.remove('blue');
      document.querySelector('h2').classList.remove('blue');
      document.querySelector('p').classList.remove('blue');
    }
});
</script>
<style>
.important {
    font-weight: bold;
    font-size: xx-large;
}

.blue {
    color: blue;
}
</style>
</head>
<body>

<h1 class="blue">Heading 1</h1>
<h2 class="blue">Heading 2</h2>

<p class="blue">This is a paragraph.</p>
<p>This is another paragraph.</p>

<button>Remove class from elements</button>

</body>
</html>
```
#### jQuery toggleClass() Method
The following example will show how to use the jQuery toggleClass() method. This method toggles between adding/removing classes from the selected elements:
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jquery
    /*
    $("button").click(function(){
        $("h1, h2, p").toggleClass("blue");
    });
    */
    //js
    document.querySelector('button').onclick=function(){
    	document.querySelector('h1').classList.toggle('blue');
        document.querySelector('h2').classList.toggle('blue');
        var pi = document.querySelectorAll('p');
        pi.forEach(function(el){
        	el.classList.toggle('blue');
        })
    }
});
</script>
<style>
.blue {
    color: blue;
}
</style>
</head>
<body>

<h1>Heading 1</h1>
<h2>Heading 2</h2>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<button>Toggle class</button>

</body>
</html>
```

# jQuery css Method
The css() method sets or returns one or more style properties for the selected elements.

### Return a CSS Property
To return the value of a specified CSS property, use the following syntax:

#### Syntax
```javascript
 .css("propertyname"); 
 ```

The following example will return the background-color value of the FIRST matched element:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jquery
    /*
    $("button").click(function(){
        alert("Background color = " + $("p").css("background-color"));
    });
    */
    
    //js
    document.querySelector('button').onclick=function(){
    	var pi = document.querySelectorAll('p')
        
        pi.forEach(function (el){
        	alert(window.getComputedStyle(el).getPropertyValue('background-color'));
        })
    }
});
</script>
</head>
<body>

<h2>This is a heading</h2>

<p style="background-color:#ff0000">This is a paragraph.</p>
<p style="background-color:#00ff00">This is a paragraph.</p>
<p style="background-color:#0000ff">This is a paragraph.</p>

<button>Return background-color of p</button>

</body>
</html> 
 ```
## Set a CSS Property
To set a specified CSS property, use the following syntax:
```javascript
.css("propertyname","value");
```
The following example will set the background-color value for ALL matched elements:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jquery
    /*
    $("button").click(function(){
        $("p").css("background-color", "yellow");
    });
    */
    //js
    document.querySelector('button').onclick=function(){
    	var pi =document.querySelectorAll('p');
        
        pi.forEach(function(el){
        	el.style.backgroundColor='yellow';
        })
    }
});
</script>
</head>
<body>

<h2>This is a heading</h2>

<p style="background-color:#ff0000">This is a paragraph.</p>
<p style="background-color:#00ff00">This is a paragraph.</p>
<p style="background-color:#0000ff">This is a paragraph.</p>

<p>This is a paragraph.</p>

<button>Set background-color of p</button>

</body>
</html>
```


## Set Multiple CSS Properties
To set multiple CSS properties, use the following syntax:

#### Syntax

```javascript
.css({"propertyname":"value","propertyname":"value",...});
```

The following example will set a background-color and a font-size for ALL matched elements:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  	//jquery
    /*
    $("button").click(function(){
        $("p").css({"background-color": "yellow", "font-size": "200%"});
    });
    */
    
    //js
	document.querySelector('button').onclick=function(){
    	var pi = document.querySelectorAll('p');
        pi.forEach(function(el){
        	el.style.backgroundColor='yellow';
            el.style.fontSize='200%';
        })
    }
});
</script>
</head>
<body>

<h2>This is a heading</h2>

<p style="background-color:#ff0000">This is a paragraph.</p>
<p style="background-color:#00ff00">This is a paragraph.</p>
<p style="background-color:#0000ff">This is a paragraph.</p>

<p>This is a paragraph.</p>

<button>Set multiple styles for p</button>

</body>
</html>
```

# jQuery Dimensions
jQuery has several important methods for working with dimensions:

| jquery        | javascript |
| ------------- | ------------- | 
| width() : only width | window.getComputedStyle('element').getPropertyValue('width'); |
| height() : only height    | window.getComputedStyle('element').getPropertyValue('height'); |
| innerWidth() : width + padding | element.clientWidth; |
| innerHeight() :  height + padding | element.clientHeight; | 
| outerWidth()  : width + padding + border | element.offsetWidth; |
| outerHeight() : height + padding + border | element.offsetHeight; |  
| outerHeight(true) : height + padding + border + margin | function outerHeight(el) {<br>var height = el.offsetHeight;<br>var style = getComputedStyle(el);<br><br>height += parseInt(style.marginTop) + parseInt(style.marginBottom);<br>return height;<br><br>outerHeight(el); |

![alt jquery-dimensions](https://github.com/shaktish/Notes/blob/master/assests/images/jquery/jquerydim.jpg?raw=true)

## The width() and The height() Methods

- The width() method sets or returns the width of an element (excludes padding, border and margin).
- The height() method sets or returns the height of an element (excludes padding, border and margin).

The following example returns the width and height of a specified ```<div>``` element:
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jquery
    /*
    $("button").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").Width() + "</br>";
        txt += "Height of div: " + $("#div1").height();
        $("#div1").html(txt);
    });
    */
    
    //js
    document.querySelector('button').onclick=function(){
    	var div = document.querySelector('#div1');
    	var txt = '';
        var h = window.getComputedStyle(div).getPropertyValue('height');
        var w = window.getComputedStyle(div).getPropertyValue('width');
        txt += 'width of div ' + w + '<br>' +' height of div ' + h;
        
        div1.innerHTML = txt;
    }
});
</script>
<style>
#div1 {
    height: 100px;
    width: 300px;
    padding: 10px;
    margin: 3px;
    border: 1px solid blue;
    background-color: lightblue;
}
</style>
</head>
<body>

<div id="div1"></div>
<br>

<button>Display dimensions of div</button>

<p>width() - returns the width of an element.</p>
<p>height() - returns the height of an element.</p>

</body>
</html>
```
## jQuery innerWidth() and innerHeight() Methods
- The innerWidth() method returns the width of an element (includes padding).
- The innerHeight() method returns the height of an element (includes padding).

The following example returns the inner-width/height of a specified ```<div>``` element:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jq
    /*
    $("button").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height() + "</br>";
        txt += "Inner width of div: " + $("#div1").innerWidth() + "</br>";
        txt += "Inner height of div: " + $("#div1").innerHeight();
        $("#div1").html(txt);
    });
    */
    //js
    document.querySelector('button').onclick=function(){
    	var div = document.querySelector('#div1');
    	var txt = '';
        var h = div.clientWidth;
        var w = div.clientHeight;
        txt += 'width of div ' + w + '<br>' +' height of div ' + h;
        
        div1.innerHTML = txt;
    }
});
</script>
</head>
<style>
#div1 {
    height: 100px;
    width: 300px;
    padding: 10px;
    margin: 3px;
    border: 1px solid blue;
    background-color: lightblue;
}
</style>
<body>

<div id="div1"></div>
<br>

<button>Display dimensions of div</button>

<p>innerWidth() - returns the width of an element (includes padding).</p>
<p>innerHeight() - returns the height of an element (includes padding).</p>

</body>
</html>
```
## jQuery outerWidth() and outerHeight() Methods

The outerWidth() & outerHeight method returns the width of an element (includes padding and border).
```
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	/*
    //jq
    $("button").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height() + "</br>";
        txt += "Outer width of div: " + $("#div1").outerWidth() + "</br>";
        txt += "Outer height of div: " + $("#div1").outerHeight();
        $("#div1").html(txt);
    });
        */
    //js
    document.querySelector('button').onclick=function(){
    	var div = document.querySelector('#div1');
    	var txt = '';
        var h = div.offsetHeight;
        var w = div.offsetWidth;
        txt += 'width of div ' + w + '<br>' +' height of div ' + h;
        
        div1.innerHTML = txt;
    }
});
</script>
<style>
#div1 {
    height: 100px;
    width: 300px;
    padding: 10px;
    margin: 3px;
    border: 1px solid blue;
    background-color: lightblue;
}
</style>
</head>
<body>

<div id="div1"></div>
<br>

<button>Display dimensions of div</button>

<p>outerWidth() - returns the width of an element (includes padding and border).</p>
<p>outerHeight() - returns the height of an element (includes padding and border).</p>

</body>
</html>

```

## jQuery outerWidth(true) and outerHeight(true) Methods
- The outerWidth(true) method returns the width of an element (includes padding, border, and margin).
- The outerHeight(true) method returns the height of an element (includes padding, border, and margin).

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
	//jq
    /*
    $("button").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height() + "</br>";
        txt += "Outer width of div (margin included): " + $("#div1").outerWidth(true) + "</br>";
        txt += "Outer height of div (margin included): " + $("#div1").outerHeight(true);
        $("#div1").html(txt);
    });
     */
    //js
    document.querySelector('button').onclick=function(){
    	// select div
    	var div = document.querySelector('#div1');
        // create a var to store data
    	var txt = '';
        // get margin use parseInt to get only numbers
        var lw = parseInt(window.getComputedStyle(div).getPropertyValue('margin-left'));
        var rw = parseInt(window.getComputedStyle(div).getPropertyValue('margin-right'));
        var th = parseInt(window.getComputedStyle(div).getPropertyValue('margin-top'));
        var bh = parseInt(window.getComputedStyle(div).getPropertyValue('margin-bottom'));
        // add margin left and right
        var marginW = lw + rw;
        var marginH = parseInt(th) + parseInt(bh);
        // add offset width + total margin 
        var h = div.offsetHeight + marginW;
        var w = div.offsetWidth + marginH;
        txt += 'width of div ' + w + '<br>' +' height of div ' + h;
        div1.innerHTML = txt;
    }
});
</script>
<style>
#div1 {
    height: 100px;
    width: 300px;
    padding: 10px;
    margin: 3px;
    border: 1px solid blue;
    background-color: lightblue;
}
</style>
</head>
<body>

<div id="div1"></div>
<br>

<button>Display dimensions of div</button>

<p>outerWidth(true) - returns the width of an element (includes padding, border, and margin).</p>
<p>outerHeight(true) - returns the height of an element (includes padding, border, and margin).</p>

</body>
</html>
```
