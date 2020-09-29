# INT Questions

## Table of contents
- [Javascript](#javascript)
- [jquery](#jquery)
- [ajax](#ajax)


# Javascript
#### 1. What s closure in javacsript?
A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain. The closure has access to variables in three scopes; specifically: (1) variable in its own scope, (2) variables in the enclosing function’s scope, and (3) global variables.


# jQuery

#### What is jQuery ?
Ans: jQuery is fast, light-weight javascript library which helps HTML DOM traverse, make animations, add Ajax interaction, manipulate the page content, change the style and provide cool UI effect.  It is one of the most popular client slide library.

#### Why do we use jQuery?
Ans: 
Easy to use for DOM manipulation and traversal.
Cross-browser support (IE 6.0+, FF 1.5+, Safari 2.0+, Opera 9.0+)
AJAX Capabilities.
Methods for changing or applying CSS, creating animations.
Event detection and handling.
Tons of plug-ins for all kind of needs.
 
#### How JavaScript and jQuery are different?
Ans: JavaScript is a language While jQuery is a library built in the JavaScript language that helps to use the JavaScript language.

#### Can we have multiple document.ready() function on the same page?
Ans: YES. We can have any number of document.ready() function on the same page.

#### Can we use our own specific character in the place of $ sign in jQuery?
Ans: Yes. It is possible using jQuery.noConflict().

#### What is jQuery.noConflict?
Ans: As other client side libraries also use $() as their global function and to define variables. To overcome from such situations, jQuery has introduced jQuery.noConflict().

```javascript
jQuery.noConflict();
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
   jQuery("div").hide();
}); 
```
You can also use your own specific character in the place of $ sign in jQuery.

```javascript
var $j = jQuery.noConflict();
// Use jQuery via jQuery(...)
$j(document).ready(function(){
   $j("div").hide();
}); 
```

#### Is there any difference between body onload() and document.ready() function?
Ans: document.ready() function is different from body onload() function for 2 reasons.

- We can have more than one document.ready() function in a page where we can have only one body onload function.
- document.ready() function is called as soon as DOM is loaded where body.onload() function is called when everything gets loaded on the page that includes DOM, images and all associated resources of the page.

#### What is the difference between .js and .min.js?
.min.js is basically the minified version of jQuery library file which loads quickly and saves bandwidth.

#### What is a CDN?
The goal of a CDN is to serve content to end-users with high availability and high performance.
There are 3 popular jQuery CDNs.

1. Google.
2. Microsoft
3. jQuery.
 
Advantage of using CDN.
It reduces the load from your server.
It saves bandwidth. jQuery framework will load faster from these CDN.
The most important benefit is it will be cached, if the user has visited any site which is using jQuery framework from any of these CDN

 How to load jQuery locally when CDN fails?
 Ans : Below given jQuery code checks whether jQuery is loaded from Google CDN or not, if not then it references the jQuery.js file from your folder.
 
```javascript
 <script type="text/javascript">
if (typeof jQuery == 'undefined')
{
  document.write(unescape("%3Cscript src='Scripts/jquery.1.9.1.min.js' type='text/javascript'%3E%3C/script%3E"));
}
</script>
```

#### What are selectors in jQuery and how many types of selectors are there?
Ans: To work with an element on the web page, first we need to find them. To find the html element in jQuery we use selectors. There are many types of selectors but basic selectors are:

- Name: Selects all elements which match with the given element Name.
- #ID: Selects a single element which matches with the given ID
- .Class: Selects all elements which match with the given Class.
- Universal (*): Selects all elements available in a DOM.
- Multiple Elements E, F, G: Selects the combined results of all the specified selectors E, F or G.
- Attribute Selector: Select elements based on its attribute value.

#### What does $("div.parent") will select?
Ans: All the div element with parent class.

#### What are the fastest selectors in jQuery?
Ans: ID and element selectors are the fastest selectors in jQuery.

#### What are the slow selectors in jQuery?
Ans: class selectors are the slow compare to ID and element.

#### Which is fast document.getElementByID('txtName') or $('#txtName').?
Ans: Native JavaScipt is always fast. jQuery method to select txtName "$('#txtName')" will internally makes a call to document.getElementByID('txtName'). As jQuery is written on top of JavaScript and it internally uses JavaScript only So JavaScript is always fast.

#### Difference between $(this) and 'this' in jQuery?
Ans: this and $(this) refers to the same element. The only difference is the way they are used. 'this' is used in traditional sense, when 'this' is wrapped in $() then it becomes a jQuery object and you are able to use the power of jQuery.
```jquery
$(document).ready(function(){
    $('#spnValue').mouseover(function(){
       alert($(this).text());
  });
});
```
In below example, this is an object but since it is not wrapped in $(), we can't use jQuery method and use the native JavaScript to get the value of span element.
Hide   Copy Code
```jquery
$(document).ready(function(){
    $('#spnValue').mouseover(function(){
       alert(this.innerText);
  });
});
```

#### How do you check if an element is empty?
There are 2 ways to check if element is empty or not. We can check using ":empty" selector.
```
$(document).ready(function(){
    if ($('#element').is(':empty')){
       //Element is empty
  }
});  
```
And the second way is using the "$.trim()" method.
Hide   Copy Code
```
$(document).ready(function(){
    if($.trim($('#element').html())=='') {
       //Element is empty
  }
});  
```

#### What is the use of jquery .each() function?
Ans: The $.each() function is used to iterate over a jQuery object. The $.each() function can be used to iterate over any collection, whether it is an object or an array.

#### What is the difference between jquery.size() and jquery.length?
Ans: jQuery .size() method returns number of element in the object. But it is not preferred to use the size() method as jQuery provide .length property and which does the same thing. But the .length property is preferred because it does not have the overhead of a function call.

Ans: $('<div/>') : This creates a new div element. However this is not added to DOM tree unless you don't append it to any DOM element.

$('div') : This selects all the div element present on the page.

#### What is the difference between ```$('div') and $('<div/>')``` in jQuery?
Ans:
```$('<div/>')``` 
This creates a new div element. However this is not added to DOM tree unless you don't append it to any DOM element.

$('div') : This selects all the div element present on the page.

#### What is the difference between parent() and parents() methods in jQuery?
Ans: The basic difference is the parent() function travels only one level in the DOM tree, where parents() function search through the whole DOM tree.

#### How do you implement animation functionality?
Ans: The .animate() method allows us to create animation effects on any numeric CSS property. This method changes an element from one state to another with CSS styles. The CSS property value is changed gradually, to create an animated effect.

Syntax is:
(selector).animate({styles},speed,easing,callback

$("btnClick").click(function(){
  $("#dvBox").animate({height:"100px"});
});
 
#### How to disable jQuery animation?
Ans: Using jQuery property "jQuery.fx.off", which when set to true, disables all the jQuery animation. When this is done, all animation methods will immediately set elements to their final state when called, rather than displaying an effect.

#### How do you stop the currently-running animation?
Ans: Using jQuery ".stop()" method.

Explain .bind() vs .live() vs .delegate() vs .on()
This is the easiest and quick method to bind events. But the issue with bind() is that it doesn't work for elements added dynamically that matches the same selector. bind() only attach events to the current elements not fut

.on(): Since live was deprecated with 1.7, so new method was introduced named ".on()". This method provides all the goodness of previous 3 methods and it brings uniformity for attaching event handlers.

#### What is wrong with this code line "$('#myid.3').text('blah blah!!!');"
Ans: The problem with above statement is that the selectors is having meta characters and to use any of the meta-characters  such as ```( !"#$%&'()*+,./:;<=>?@[\]^`{|}~ )``` as a literal part of a name, it must be escaped with with two backslashes: \\. For example, an element with id="foo.bar", can use the selector ```$("#foo\\.bar")```.

So the correct syntax is,
```$('#myid\\.3').text('blah blah!!!');```

#### What is event.PreventDefault?
Ans: The event.preventDefault() method stops the default action of an element from happening. For example, Prevents a link from following the URL.

#### What is the difference between event.PreventDefault and event.stopPropagation?
Ans: event.preventDefault(): Stops the default action of an element from happening.
event.stopPropagation(): Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.

#### What is the difference between event.stopPropagation and event.stopImmediatePropagation?
Ans: event.stopPropagation() allows other handlers on the same element to be executed, while event.stopImmediatePropagation() prevents every event from running. For example, see below jQuery code block.
```javascript
$("p").click(function(event){
  event.stopImmediatePropagation();
});
$("p").click(function(event){
  // This function won't be executed
  $(this).css("background-color", "#f00");
}); 
```
If event.stopPropagation was used in previous example, then the next click event on p element which changes the css will fire, but in case event.stopImmediatePropagation(), the next p click event will not fire.


check data type in jQuery 1.7 
http://www.jquerybyexample.net/2012/04/common-utility-methods-of-jquery.html
```$.isNumeric(1)```
// true
```
var name = "goku vegeta"
$.trim(name);
//gokuvegeta
```
#### How do you attach a event to element which should be executed only once?
Ans: Using jQuery one() method. This attaches a handler to an event for the element. The handler is executed at most once per element. In simple terms, the attached function will be called only once.
Hide   Copy Code
$(document).ready(function() {
    $("#btnDummy").one("click", function() {
        alert("This will be displayed only once.");
    });
});

#### Can you include multiple version of jQuery? If yes, then how they are executed?
Ans: Yes. Multiple versions of jQuery can be included in same page.

In what situation you would use multiple version of jQuery and how would you include them?
Ans: Well, it is quite possible that the jQuery plugins which are used are dependent on older version but for your own jQuery code, you would like to use newer version. So because of this dependency, multiple version of jQuery may required sometimes on single page.

Below code shows how to include multiple version of jQuery.
```javascript
<script type='text/javascript' src='js/jquery_1.9.1.min.js'></script>

<script type='text/javascript'>
 var $jq = jQuery.noConflict();
</script>

<script type='text/javascript' src='js/jquery_1.7.2.min.js'></script>
```
By this way, for your own jQuery code use "$jq", instead of "$" as "$jq" refers to jQuery 1.9.1, where "$" refers to 1.7.2.


#### What is chaining in jQuery?
Ans: Chaining is one of the most powerful feature of jQuery. In jQuery, Chaining means to connect multiple functions, events on selectors. It makes your code short and easy to manage and it gives better performance. The chain starts from left to right. So left most will be called first and so on.
```javascript
$(document).ready(function(){
    $('#dvContent').addClass('dummy');
    $('#dvContent').css('color', 'red');
    $('#dvContent').fadeIn('slow');
});
The above jQuery code sample can be re-written using chaining. See below.
Hide   Copy Code
$(document).ready(function(){
    $('#dvContent').addClass('dummy')
          .css('color', 'red')
          .fadeIn('slow');     
});
```
More about [chaining](http://www.jquerybyexample.net/2012/06/what-is-chaining-in-jquery.html)

#### You get "jquery is not defined" or "$ is not defined" error. What could be the reason?
Ans: There could be many reasons for this.
You have forgot to include the reference of jQuery library and trying to access jQuery.
You have include the reference of the jQuery file, but it is after your jQuery code.
The order of the scripts is not correct. For example, if you are using any jQuery plugin and you have placed the reference of the plugin js before the jQuery library then you will face this error.

#### What are various methods to make ajax request in jQuery?
Ans: Using below jQuery methods, you can make ajax calls.
load() : Load a piece of html into a container DOM
$.getJSON(): Load JSON with GET method.
$.getScript(): Load a JavaScript file.
$.get(): Use to make a GET call and play extensively with the response.
$.post(): Use to make a POST call and don't want to load the response to some container DOM.
$.ajax(): Use this to do something on XHR failures, or to specify ajax options (e.g. cache: true) on the fly.

Is there any advantage of using $.ajax() for ajax call against $.get() or $.post()?
Ans: By using jQuery post()/ jQuery get(), you always trust the response from the server and you believe it is going to be successful all the time. Well, it is certainly not a good idea to trust the response. As there can be n number of reason which may lead to failure of response.

Where jQuery.ajax() is jQuery's low-level AJAX implementation. $.get and $.post are higher-level abstractions that are often easier to understand and use, but don't offer as much functionality (such as error callbacks). Find out more here.

#### Does jQuery 2.0 supports IE?
Ans: No. jQuery 2.0 has no support for IE 6, IE 7 and IE 8.

#### What is jQuery UI?
Ans: jQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library that can be used to build interactive web applications.

#### What is the difference between jQuery and jQuery UI?
Ans: jQuery is the core library. jQueryUI is built on top of it. If you use jQueryUI, you must also include jQuery.


# Ajax

#### What is AJAX?
AJAX stands for Asynchronous JavaScript and XML. It is a group of related technologies to display data asynchronously.

#### Which are limitations of AJAX?
- Back functionality can’t work because the dynamic pages won’t register themselves to the browsers cache. Hence the use Iframe will become required.
- The page cannot be bookmarked if it is developed using Ajax.
- If java script is not enabled, Ajax will stop working.
- Because different components of the pages are loaded at different times, response time may be slow.
- Because different components of the pages are loaded at different times it may create confusion for the user.

#### Why do we use the XMLHttpRequest object in AJAX?
The XMLHttpRequest object enables a client-side script to execute an HTTP request.

#### What are the advantages of Ajax?
Following are the advantages of Ajax:

Bandwidth utilization – It saves memory when the data is fetched from the same page.
More interactive
Speeder retrieval of data

#### What are the disadvantages of Ajax?
AJAX is dependent on Javascript. If there is some Javascript problem with the browser or in the OS, Ajax will not support
Source code written in AJAX is easily human readable. There will be some security issues in Ajax.
Debugging is difficult

#### How can you find out that an AJAX request has been completed?
ReadyState property is used to check whether AJAX request has been completed. If the property is equal to four, then the request has been completed and data is available.

#### What is the name of object used for AJAX request?
XmlHttpRequest object is used for Ajax requests.

#### How many types of ready states in Ajax?
There are four ready states in Ajax:
Initialization
Request
Process
Ready

#### What are the important methods of XMLHttpRequest?
open()
send()
setRequestHeader()

