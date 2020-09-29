## Background

### Why Js?
* JavaScript is the most open programming language there is: ECMA-262, handled by several companies includeing all major browsers
* Js is a mixture of object-oriented programming and functional programming.
* Html5, Node, Json are part of js
* JavaScript is getting better build tools (e.g., Grunt) and test tools (e.g., mocha).
*JavaScript engines have made tremendous progress, evolving from slow interpreters to fast just-in-time compilers.
* Js is evolving steadily; ECMAScript 6 looks good.

## The Nature of JavaScript
### JavaScript’s nature can be summarized as follows:

- It’s dynamic
  - Many things can be changed. For example, you can freely add and remove properties
(fields) of objects after they have been created. And you can directly create
objects, without creating an object factory (e.g., a class) first.

- It’s dynamically typed
  - Variables and object properties can always hold values of any type.

- It’s functional and object-oriented
  - JavaScript supports two programming language paradigms: functional programming
(first-class functions, closures, partial application via bind(), built-in map()
and reduce() for arrays, etc.) and object-oriented programming (mutable state,
objects, inheritance, etc.).

- It fails silently
  - JavaScript did not have exception handling until ECMAScript 3. That explains why
the language so often fails silently and automatically converts the values of arguments
and operands: it initially couldn’t throw exceptions.

- It’s deployed as source code
  - JavaScript is always deployed as source code and compiled by JavaScript engines.
Source code has the benefits of being a flexible delivery format and of abstracting
the differences between the engines. Two techniques are used to keep file sizes small:
compression (mainly gzip) and minification (making source code smaller by renaming
variables, removing comments, etc.;

- It’s part of the web platform
  - JavaScript is such an essential part of the web platform (HTML5 APIs, DOM, etc.)
that it is easy to forget that the former can also be used without the latter

### Quirks and Unorthodox Features
* On one hand, JavaScript has several quirks and missing features (for example, it has no
block-scoped variables, no built-in modules, and no support for subclassing). Therefore,
where you learn language features in other languages, you learn patterns and
workarounds in JavaScript. On the other hand, JavaScript includes unorthodox features
(such as prototypal inheritance and object properties). These, too, have to be learned,
but are more a feature than a bug.

### Influences
#### JavaScript was influenced by several programming languages
* Java is the role model for JavaScript’s syntax. It also led to JavaScript’s partitioning
of values into primitives and objects and to the Date constructor.
* AWK inspired JavaScript’s functions.
* Scheme is the reason that JavaScript has first-class functions (they are treated like
values and can be passed as arguments to functions) and closures
* Self is responsible for JavaScript’s unusual style of object orientation; it supports
prototypal inheritance between objects.
* Perl and Python influenced JavaScript’s handling of strings, arrays, and regular
expressions.
* Beyond the actual language, HyperTalk influenced how JavaScript was integrated
into web browsers. It led to HTML tags having event-handling attributes such as
onclick.

## How JavaScript Was Created
* In 1993, NCSA’s Mosaic was the first widely popular web browser. In 1994, a company
called Netscape was founded to exploit the potential of the nascent World Wide Web.Netscape created the proprietary web browser Netscape Navigator, which was dominant
throughout the 1990s.

* Netscape quickly realized that the Web needed to become more dynamic. Even if you
simply wanted to check that users entered correct values in a form, you needed to send
the data to the server in order to give feedback.

* To defend the idea of JavaScript against competing proposals, Netscape
needed a prototype. Eich wrote one in 10 days, in May 1995. JavaScript’s first code name
was Mocha, coined by Marc Andreesen

* Netscape marketing later changed it to Live‐
Script, for trademark reasons and because the names of several products already had
the prefix "Live"

* In early December 1995, Java’s momentum had grown, and Sun licensed the trademark Java to Netscape.
The language was renamed again, to its final name, JavaScript

## Standardization: ECMAScript

* After JavaScript came out, Microsoft implemented the same language, under the different
name JScript, in Internet Explorer 3.0 (August 1996). Partially to keep Microsoft
in check, Netscape decided to standardize JavaScript and asked the standards organization
Ecma International to host the standard. Work on a specification called
ECMA-262 started in November 1996. Because Sun (now Oracle) had a trademark on
the word Java, the official name of the language to be standardized couldn’t be Java‐
Script. Hence, ECMAScript was chosen, derived from JavaScript and Ecma. However,
that name is used only to refer to versions of the language (where one refers to the
specification). Everyone still calls the language JavaScript

* ECMA-262 is managed and evolved by Ecma’s Technical Committee 39 (TC39). Its
members are companies such as Microsoft, Mozilla, and Google, which appoint employees
to participate in committee work;

#### The following is a list of ECMAScript versions (or editions of ECMA-262) and their key features:
* ECMAScript 1 (June 1997)
	* First edition
* ECMAScript 2 (August 1998)
	* Editorial changes to align ECMA-262 with the standard ISO/IEC 16262
* ECMAScript 3 (December 1999)
	* do-while, regular expressions, new string methods (concat, match, replace, slice, split with a regular expression, etc.), exception handling, and more
* ECMAScript 4 (abandoned July 2008)
	* ECMAScript 4 was developed as the next version of JavaScript, with a prototype written in ML. However, TC39 could not agree on its feature set. To prevent an impasse, the committee met at the end of July 2008 and came to 
* ECMAScript 5 (December 2009)
	* Adds a strict mode, getters and setters, new array methods, support for JSON, and more
* ECMAScript 5.1
	* Editorial changes to align ECMA-262 with the third edition of the international standard ISO/IEC 16262:2011
* ECMAScript 6

## Historical JavaScript Milestones	
#### 1997 Dynamic HTML
* Dynamic HTML allows you to dynamically change the content and appearance of a web page. You achieve this by manipulating the Document Object Model DOM) of the page, a tree-shaped data structure. Things you can do include changing content, changing style, and showing and hiding elements. Dynamic HTML appeared first in Internet Explorer 4 and in Netscape Navigator 4.
#### 1999 XMLHttpRequest
* This API lets a client-side script send an HTTP or HTTPS request to a server and get back data, usually in a text format (XML, HTML, JSON). It was introduced in Internet Explorer 5.
#### 2001JSON, a JavaScript-based data exchange format
* In 2001, Douglas Crockford named and documented JSON (JavaScript Object Notation),whose main idea is to use JavaScript syntax to store data in text format. JSON uses JavaScript literals for objects, arrays, strings, numbers, and booleans to represent structured data. For example:
```
{
"first": "Jane",
"last": "Porter",
"married": true,
"born": 1890,
"friends": [ "Tarzan", "Cheeta" ]
}

```
Over the years, JSON has become a popular lightweight alternative to XML, especially when structured data is to be represented and not markup. Naturally, JSON is easy to consume via JavaScript

#### 2004 Dojo Toolkit, a framework for programming JavaScript in the large
* The Dojo Toolkit facilitates programming in the large by providing the necessary infrastructure: an inheritance library, a module system, an API for desktop-style graphical widgets, and more.	

#### 2005 Ajax, browser-based desktop-class applications
*Ajax is a collection of technologies that brings a level of interactivity to web pages that rivals that of desktop applications. One impressive example of what can be achieved via Ajax was introduced in February 2005: Google Maps. This application allowed you to pan and zoom over a map of the world, but only the content that was currently visible was downloaded to the browser. After Google Maps came out, Jesse James Garrett noticed that it shared certain traits with other interactive websites.
* He called these traits Ajax, a shorthand for Asynchronous JavaScript and XML.1 The two cornerstones of Ajax are loading content asynchronously in the background (via XMLHttpRequest) and dynamically updating the current page with the results (via dynamic HTML). That was a considerable usability improvement from always performing complete page reloads.
####  2005 Apache CouchDB, a JavaScript-centric database
* Roughly, CouchDB is a JSON database: you feed it JSON objects, without the need to specify a schema in advance. Additionally, you can define views and indexes via JavaScript functions that perform map/reduce operations. Hence, CouchDB is a very good fit for JavaScript because you can work directly with native data. Compared to a relational database, there is no mapping-related impedance mismatch. Compared to an object database, you avoid many complications because only data is stored, not behavior. CouchDB is just one of several similar NoSQL databases. Most of them have excellent JavaScript support.
####  2006 jQuery, helping with DOM manipulation
* The browser DOM is one of the most painful parts of client-side web development. jQuery made DOM manipulation fun by abstracting over browser differences and by providing a powerful fluent-style API for querying and modifying the DOM
#### 2007—WebKit, taking the mobile web mainstream
* Based on prior work by KDE, WebKit is an HTML engine that was introduced by Apple in 2003. It was open-sourced in 2005. With the introduction of the iPhone in 2007, the mobile Web suddenly became mainstream and had little to no limitations compared to the nonmobile Web.
####  2008 V8, proving JavaScript can be fast
* When Google introduced its Chrome web browser, one of its highlights was a fast JavaScript engine called V8. It changed the perception of JavaScript as being slow and led to a speed race with other browser vendors from which we are still profiting. V8 is open source and can be used as a standalone component whenever you need a fast embedded language that is widely known.
#### 2009 Node.js, implementing JavaScript on the server
* Node.js lets you implement servers that perform well under load. To do so, it uses event-driven, nonblocking I/O and JavaScript (via V8).
#### 2009 PhoneGap, writing native apps in HTML5
* PhoneGap was created by a company called Nitobi that was later purchased by Adobe. The open source foundation of PhoneGap is called Cordova
#### 2009Chrome OS, making the browser the operating system
* With Chrome OS, the web platform is the native platform.
#### 2011 Windows 8, first-class HTML5 apps
* When Microsoft introduced Windows 8, it surprised everyone with the operating system’s extensive integration of HTML5. HTML5 applications are first-class citizens in Windows 8, on par with those implemented via incumbent technologies such as .NET and C++.
