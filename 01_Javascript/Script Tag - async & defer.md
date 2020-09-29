# Script Tag - async & defer

Normal execution <script>
This is the default behavior of the <script> element. Parsing of the HTML code pauses while the script is executing. For slow servers and heavy scripts this means that displaying the webpage will be delayed.
  
Deferred execution <script defer>
Simply put: delaying script execution until the HTML parser has finished. A positive effect of this attribute is that the DOM will be available for your script. However, since not every browser supports defer yet, don’t rely on it!
  
Asynchronous execution <script async>
Don’t care when the script will be available? Asynchronous is the best of both worlds: HTML parsing may continue and the script will be executed as soon as it’s ready. I’d recommend this for scripts such as Google Analytics.



## HTML5: async, defer

In HTML5, you can tell browser when to run your JavaScript code. There are 3 possibilities:
```
<script       src="myscript.js"></script>

<script async src="myscript.js"></script>

<script defer src="myscript.js"></script>
```
* Without async or defer, browser will run your script immediately, before rendering the elements that's below your script tag.

* With async (asynchronous), browser will continue to load the HTML page and render it while the browser load and execute the script at the same time.

* With defer, browser will run your script when the page finished parsing. (not necessary finishing downloading all image files. This is good.)
```
