## Table of contents 
- [Jquery](#jquery)
- [Jquery Syntax](#jquery-syntax)
- [Jquery Effects](#jquery-effects)
- [Jquery Animate](#jquery-animate)
- [Jquery Chaining](#jquery-chaining)


# jQuery

jQuery is a framework, It is fast concise JavaScript library which simplifies html document

jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.

jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.

The jQuery library contains the following features:
- HTML/DOM manipulation
- CSS manipulation
- HTML event methods
- Effects and animations
- AJAX
- Utilities

### Why jQuery?

jQuery seems to be the most popular, and also the most extendable.
Many companies on the Web use jQuery, such as: Google, Microsoft, IBM & Netflix

### Will jQuery work in all browsers?

The jQuery team knows all about **cross-browser issues**, and they have written this knowledge into the jQuery library. jQuery will run exactly the same in all major browsers, including **Internet Explorer 6!**

## Adding jQuery to Your Web Pages
There are several ways to start using jQuery on your web site. You can:
- Download the jQuery library from jQuery.com
- Include jQuery from a CDN, like Google

### Downloading jQuery
There are two versions of jQuery available for downloading:

- **Production version** - this is for your live website because it has been minified and compressed
- **Development version** - this is for testing and development (uncompressed and readable code)

Both versions can be downloaded from [jQuery.com](http://jquery.com/download/).
```html
<head>
<script src="jquery-3.2.1.min.js"></script>
</head>
```

#### jQuery CDN

If you don't want to download and host jQuery yourself, you can include it from a CDN (Content Delivery Network).
Both Google and Microsoft host jQuery.

#### Google CDN:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

#### Microsoft CDN:

```html
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
```

**One big advantage of using the hosted jQuery from Google or Microsoft:**
Many users already have downloaded jQuery from Google or Microsoft when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time.

## jquery vs vanilla javascript 

You might not need jquery 

[youmightnotneedjquery](http://youmightnotneedjquery.com/)

vanilla js vs jquery

[vanilla js](https://blog.lesieur.name/vanilla-js-france/)

A lot of web developers rely on jQuery. In many circles, jQuery and JavaScript are one in the same it seems. So, why shouldn't you use it? Why should you stop using it? Don't you just need it?

[garstasio](https://blog.garstasio.com/you-dont-need-jquery/selectors/)

# jQuery Syntax

With jQuery you select (query) HTML elements and perform "actions" on them.

The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).

Basic syntax is: **$(selector).action()**

* A $ sign to define/access jQuery
* A (selector) to "query (or find)" HTML elements
* A jQuery action() to be performed on the element(s)


## The Document Ready Event

- Basic Syntax
```javascript
$(document).ready(function(){

   // jQuery methods go here...

});
```

- Short Syntax

```javascript
$(function(){

   // jQuery methods go here...
   
});

```
**This is to prevent any jQuery code from running before the document is finished loading (is ready).**

# jQuery Selectors

jQuery selectors are used to **find** (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors, and in addition, it has some own custom selectors.

## The element Selector

The jQuery element selector selects elements based on the element name. 

You can select all ```<p>``` elements on a page like this:
```javascript
$("p")
```

## The #id Selector

The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.
```javascript
$("#test")
```
Example

When a user clicks on a button, the element with ```id="test"``` will be hidden:
```javascript
$(document).ready(function(){
    $("button").click(function(){
        $("#test").hide();
    });
});
```

## The .class Selector

The jQuery class selector finds elements with a specific class.

To find elements with a specific class, write a **period** character, followed by the name of the class:
```javascript
$(".test")
```
Example

When a user clicks on a button, the element with ```class="test"``` will be hidden:
```javascript
$(document).ready(function(){
    $("button").click(function(){
        $(".test").hide();
    });
});

var btn = document.querySelector('.btn');
var test = document.querySelector('.test');

btn.onclick = function (){
	test.style.display ='none';
}
```

See, more jQuery Selectors [jquery Selectors](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)

# jQuery Event Methods

What are events ?
All the different visitor's actions that a web page can respond to are called events.
Here are some common DOM events:

Mouse Events | Keyboard Events | Form Events | Document/Window Events
------------ | --------------- | ----------- | ----------------------
click | keypress | submit | load
dblclick | keydown | change | resize
mouseenter | keyup | focus | scroll
click | - | submit | unload


## jQuery Syntax For Event Methods

To assign a click event to all paragraphs on a page, you can do this:
```javascript
$("p").click();
```
The next step is to define what should happen when the event fires. You must pass a function to the event:
```javascript
$("p").click(function(){
  // action goes here!!
});
```

## Commonly Used jQuery Event Methods

- $(document).ready()
- click()
- dblclick()
so on..

### mouseenter() 

The mouseenter() method attaches an event handler function to an HTML element.
The function is executed when the mouse pointer enters the HTML element:

```javascript
$("#p1").mouseenter(function(){
    alert("You entered p1!");
});

document.getElementsById('p1').onmouseenter = function () {
	alert('You ented P1!');
}
```

### mouseleave()

The mouseleave() method attaches an event handler function to an HTML element.
The function is executed when the mouse pointer leaves the HTML element:

```javascript
$("#p1").mouseleave(function(){
    alert("Bye! You now leave p1!");
});

document.getElementsById('p1').onmouseleave = function () {
	alert('You now left P1!');
}
```

###  mousedown()

The mousedown() method attaches an event handler function to an HTML element.
The function is executed, when the left, middle or right mouse button is pressed down, while the mouse is over the HTML element:

```javascript
$("#p1").mousedown(function(){
    alert("Mouse down over p1!");
});
```

### mouseup()

The mouseup() method attaches an event handler function to an HTML element.
The function is executed, when the left, middle or right mouse button is released, while the mouse is over the HTML element:

```javascript
$("#p1").mouseup(function(){
    alert("Mouse up over p1!");
});
```

### hover()

The hover() method takes two functions and is a combination of the mouseenter() and mouseleave() methods.

The first function is executed when the mouse enters the HTML element, and the second function is executed when the mouse leaves the HTML element:
```javascript
$("#p1").hover(function(){
    alert("You entered p1!");
},
function(){
    alert("Bye! You now leave p1!");
});
```

### focus()

The focus() method attaches an event handler function to an HTML form field.
The function is executed when the form field gets focus:

```javascript
$("input").focus(function(){
    $(this).css("background-color", "#cccccc");
});
```

### blur()
The blur() method attaches an event handler function to an HTML form field.

The function is executed when the form field loses focus:

```javascript
$("input").blur(function(){
    $(this).css("background-color", "#ffffff");
});
```

### The on() Method
The on() method attaches one or more event handlers for the selected elements.
jquery on method is kind of similar to javascript **addEventListener method**

Attach a click event to a <p> element:
```javascript
$("p").on("click", function(){
    $(this).hide();
});
```
Attach multiple event handlers to a <p> element:
```javascript
$("p").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    }, 
    click: function(){
        $(this).css("background-color", "yellow");
    } 
});
	
// js
document.querySelector('p').addEventListener('mouseenter', function (){
	this.style.backgroundColor = 'lightgray';
});

document.querySelector('p').addEventListener('mouseleave', function (){
	this.style.backgroundColor = 'lightblue';
});

document.querySelector('p').addEventListener('click', function (){
	this.style.backgroundColor = 'yellow';
});
```

# jQuery Effects

## jQuery hide() and show()
With jQuery, you can hide and show HTML elements with the hide() and show() methods:

```javascript
$("#hide").click(function(){
    $("p").hide();
});

$("#show").click(function(){
    $("p").show();
});
```

**Syntax:**

```javascript
$(selector).hide(speed,callback);

$(selector).show(speed,callback);
```
- The optional speed parameter specifies the speed of the hiding/showing, and can take the following values: "slow", "fast", or milliseconds.
- The optional callback parameter is a function to be executed after the hide() or show() method completes (you will learn more about callback functions in a later chapter).
* The following example demonstrates the speed parameter with hide():

```javascript
$("button").click(function(){
    $("p").hide(1000);
});

```

## jQuery toggle()

With jQuery, you can toggle between the hide() and show() methods with the toggle() method.
Shown elements are hidden and hidden elements are shown:
```javascript
$("button").click(function(){
    $("p").toggle();
});
```
**Syntax:**

```
$(selector).toggle(speed,callback);
```
The optional speed parameter can take the following values: "slow", "fast", or milliseconds.
The optional callback parameter is a function to be executed after toggle() completes.

# jQuery Effects - Fading

With jQuery you can fade an element in and out of visibility. jQuery has the following fade methods:
- fadeIn()
- fadeOut()
- fadeToggle()
- fadeTo()

## jQuery fadeIn() Method

The jQuery fadeIn() method is used to fade in a hidden element.

**Syntax:**

```javascript
$(selector).fadeIn(speed,callback);
```
- The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.
- The optional callback parameter is a function to be executed after the fading completes.
- The following example demonstrates the fadeIn() method with different parameters:

```javascript
$("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
});
```

## jQuery fadeOut() Method

The jQuery fadeOut() method is used to fade out a visible  element.

**Syntax:**

```javascript
$(selector).fadeOut(speed,callback);
```
- The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.
- The optional callback parameter is a function to be executed after the fading completes.
- The following example demonstrates the fadeIn() method with different parameters:

```javascript
$("button").click(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
});
```

## jQuery fadeOut() Method

The jQuery fadeToggle() method toggles between the fadeIn() and fadeOut() methods.

If the elements are faded out, fadeToggle() will fade them in.

If the elements are faded in, fadeToggle() will fade them out.

**Syntax:**

```javascript
$(selector).fadeToggle(speed,callback);
```
- The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.
- The optional callback parameter is a function to be executed after the fading completes.
- The following example demonstrates the fadeToggle() method with different parameters:

```javascript
$("button").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
});
```

## fadeTo() Method
The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1).

**Syntax:**
```javascript
$(selector).fadeTo(speed,opacity,callback);
```
* The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.
* The optional callback parameter is a function to be executed after the fading completes.
* The following example demonstrates the fadeIn() method with different parameters:
```javascript
$("button").click(function(){
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
});
```

# jQuery Effects - Sliding
The jQuery slide methods slide elements up and down.

With jQuery you can create a sliding effect on elements.
jQuery has the following slide methods:

- slideDown()
- slideUp()
- slideToggle()

## jQuery slideDown() Method
The jQuery slideDown() method is used to slide down an element.

**Syntax:**

```javascript
$(selector).slideDown(speed,callback);
```

- The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.
- The optional callback parameter is a function to be executed after the sliding completes.
- The following example demonstrates the slideDown() method:

```html
<style> 
#panel, #flip {
    padding: 5px;
    text-align: center;
    background-color: #e5eecc;
    border: solid 1px #c3c3c3;
}

#panel {
    padding: 50px;
    display: none;
}
</style>

<div id="flip">Click to slide down panel</div>
<div id="panel">Hello world!</div>

<script>
	$("#flip").click(function(){
	    $("#panel").slideDown();
	});
</script>
```

## jQuery slideUp() Method
The jQuery slideUp() method is used to slide up an element.

**Syntax:**

```javascript
$(selector).slideUp(speed,callback);
```

- The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.
- The optional callback parameter is a function to be executed after the sliding completes.
- The following example demonstrates the slideUp() method:

```html
<style> 
#panel, #flip {
    padding: 5px;
    text-align: center;
    background-color: #e5eecc;
    border: solid 1px #c3c3c3;
}

#panel {
    padding: 50px;
    display: none;
}
</style>

<div id="flip">Click to slide down panel</div>
<div id="panel">Hello world!</div>

<script>
	$("#flip").click(function(){
	    $("#panel").slideUp();
	});
</script>
```
## jQuery slideToggle() Method
The jQuery slideToggle() method toggles between the slideDown() and slideUp() methods.

If the elements have been slid down, slideToggle() will slide them up.

If the elements have been slid up, slideToggle() will slide them down.

**Syntax:**

```javascript
$(selector).slideToggle(speed,callback);
```

- The optional speed parameter can take the following values: "slow", "fast", milliseconds.
- The optional callback parameter is a function to be executed after the sliding completes.
- The following example demonstrates the slideToggle() method:

```html
<style> 
#panel, #flip {
    padding: 5px;
    text-align: center;
    background-color: #e5eecc;
    border: solid 1px #c3c3c3;
}

#panel {
    padding: 50px;
    display: none;
}
</style>

<div id="flip">Click to slide down panel</div>
<div id="panel">Hello world!</div>

<script>
	$("#flip").click(function(){
	    $("#panel").slideToggle();
	});
</script>
```


# jQuery Animate
The jQuery animate() method lets you create custom animations.

## jQuery Animations - The animate() Method

** Syntax: **

```javascript
$(selector).animate({params},speed,callback);
```

- The required params parameter defines the CSS properties to be animated.
- The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.
- The optional callback parameter is a function to be executed after the animation completes.

The following example demonstrates a simple use of the animate() method; it moves a <div> element to the right, until it has reached a left property of 250px:
	
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({left: '250px'});
    });
});
</script> 
</head>
<body>

<button>Start Animation</button>

<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>

<div style="background:#98bf21;height:100px;width:100px;position:absolute;"></div>

</body>
</html>
```

By default, all HTML elements have a static position, and cannot be moved.
**To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!**

## jQuery animate() - Manipulate Multiple Properties
Notice that multiple properties can be animated at the same time:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
});
</script> 
</head>
<body>

<button>Start Animation</button>

<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>

<div style="background:#98bf21;height:100px;width:100px;position:absolute;"></div>

</body>
</html>
```

Is it possible to manipulate **ALL CSS** properties with the animate() method?

Yes, almost! However, there is one important thing to remember: all property names must be camel-cased when used with the animate() method: 
You will need to write **paddingLeft instead of padding-left**, **marginRight instead of margin-right**, and so on. 

Also, color animation is not included in the core jQuery library.
If you want to animate color, you need to download the Color Animations plugin from jQuery.com.



## jQuery animate() - Using Relative Values
It is also possible to define relative values (the value is then relative to the element's current value). 

This is done by putting **+= or -=** in front of the value,  remember to first set the CSS position property of the element to relative, fixed, or absolute!

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
});
</script> 
</head>
<body>

<button>Start Animation</button>

<div style="background:#98bf21;height:100px;width:100px;position:absolute;"></div>

</body>
</html>
```
## jQuery animate() - Using Pre-defined Values

You can even specify a property's animation value as "show", "hide", or "toggle":

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            height: 'toggle'
        });
    });
});
</script> 
</head>
<body>

<p>Click the button multiple times to toggle the animation.</p>

<button>Start Animation</button>

<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>

<div style="background:#98bf21;height:100px;width:100px;position:absolute;"></div>

</body>
</html>
```

## jQuery animate - Uses Queue Functionality

- By default, jQuery comes with queue functionality for animations.
- This means that if you write multiple animate() calls after each other, jQuery creates an "internal" queue with these method calls. Then it runs the animate calls ONE by ONE.
- So, if you want to perform different animations after each other, we take advantage of the queue functionality:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("button").click(function(){
        var div = $("div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});
</script> 
</head>
<body>

<button>Start Animation</button>

<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>

<div style="background:#98bf21;height:100px;width:100px;position:absolute;"></div>

</body>
</html>

```

### Example 2 

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("button").click(function(){
        var div = $("div");  
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
    });
});
</script> 
</head>
<body>

<button>Start Animation</button>

<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>

<div style="background:#98bf21;height:100px;width:200px;position:absolute;">HELLO</div>

</body>
</html>

```

## jQuery Stop Animations
The jQuery stop() method is used to stop animations or effects before it is finished.

- The stop() method works for all jQuery effect functions, including sliding, fading and custom animations.

**Syntax:**

```javascript
$(selector).stop(stopAll:false,goToEnd:false);
```

- The optional stopAll parameter specifies whether also the animation queue should be cleared or not. Default is false, which means that only the active animation will be stopped, allowing any queued animations to be performed afterwards.
- The optional goToEnd parameter specifies whether or not to complete the current animation immediately. Default is false.
- So, by default, the stop() method kills the current animation being performed on the selected element.

#### Example:
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
        $("#panel").stop();
    });
});
</script>
 
<style> 
#panel, #flip {
    padding: 5px;
    font-size: 18px;
    text-align: center;
    background-color: #555;
    color: white;
    border: solid 1px #666;
    border-radius: 3px;
}

#panel {
    padding: 50px;
    display: none;
}
</style>
</head>
<body>
 
<button id="stop">Stop sliding</button>

<div id="flip">Click to slide down panel</div>
<div id="panel">Hello world!</div>

</body>
</html>
```

# jQuery Callback Functions
A callback function is executed after the current effect is 100% finished.

- JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. This can create errors.
- To prevent this, you can create a callback function.
- A callback function is executed after the current effect is finished.

#### Typical syntax:
``` $(selector).hide(speed,callback);```

The example below has a callback parameter that is a function that will be executed after the hide effect is completed:

#### Example with Callback
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide("slow", function(){
            alert("The paragraph is now hidden");
        });
    });
});
</script>
</head>
<body>

<button>Hide</button>

<p>This is a paragraph with little content.</p>

</body>
</html>
```
# jQuery Chaining

- With jQuery, you can chain together actions/methods.
- Chaining allows us to run multiple jQuery methods (on the same element) within a single statement.

### jQuery Method Chaining

- This way, browsers do not have to find the same element(s) more than once.
- To chain an action, you simply append the action to the previous action.
- The following example chains together the css(), slideUp(), and slideDown() methods. 
- The "p1" element first changes to red, then it slides up, and then it slides down:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
});
</script>
</head>
<body>

<p id="p1">jQuery is fun!!</p>

<button>Click me</button>

</body>
</html>

```
