## Table of content
1. [Ajax](#ajax)
2. [Ajax XMLHttpRequest](#ajax-xmlhttprequest)
3. [AJAX Send a Request To a Server](#ajax-send-a-request-to-a-server)
4. [AJAX Server Response](#ajax-server-response)

# Ajax

What is AJAX?
- AJAX = Asynchronous JavaScript And XML. AJAX is not a programming language.

AJAX just uses a combination of:
- A browser built-in XMLHttpRequest object (to request data from a web server)
- JavaScript and HTML DOM (to display or use the data)

![alt ajax-how-it-works](https://github.com/shaktish/Notes/blob/master/assests/images/ajax/pic_ajax.jpg?raw=true)

1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

# Ajax XMLHttpRequest
The keystone of AJAX is the XMLHttpRequest object.

## The XMLHttpRequest Object
All modern browsers support the XMLHttpRequest object.

The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

# Create an XMLHttpRequest Object
```javascript
var xhttp = new XMLHttpRequest();
```

## Older Browsers (IE5 and IE6)

Old versions of Internet Explorer (5/6) use an ActiveX object instead of the XMLHttpRequest object:

```javascript
variable = new ActiveXObject("Microsoft.XMLHTTP");
```
To handle IE5 and IE6, check if the browser supports the XMLHttpRequest object, or else create an ActiveX object:
```javascript
if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
 } else {
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
```

## XMLHttpRequest Object Methods

| Method | Description | 
| ---------- | --------------- | 
| new XMLHttpRequest() | Creates a new XMLHttpRequest object | 
| abort() | Cancels the current request |
| getAllResponseHeaders() | Returns header information |
| getResponseHeader() | Returns specific header information | 
| open(method, url, async, user, psw) | Specifies the request <br>method: the request type GET or POST<br> url: the file location <br>async: true (asynchronous)or false (synchronous)<br>user: optional user name<br>psw: optional password | 
| send() | Sends the request to the server, Used for GET requests | 
| send(string) | Sends the request to the server, <br> Used for POST requests |
| setRequestHeader() | Adds a label/value pair to the header to be sent | 

## XMLHttpRequest Object Properties
| Property | Description | 
| ---------- | --------------- | 
| onreadystatechange |	Defines a function to be called when the readyState property changes |
| readyState | 	Holds the status of the XMLHttpRequest.<br>0: request not initialized<br>1: server connection established<br>2: request received<br>3: processing request<br>4: request finished and response is ready | 
| responseText |	Returns the response data as a string | 
| responseXML |	Returns the response data as XML data |
| status	| Returns the status-number of a request<br>200: "OK"<br>403: "Forbidden" <br> 404: "Not Found"<br> For a complete list go to the [Http Messages Reference](https://www.w3schools.com/tags/ref_httpmessages.asp) |
| statusText | Returns the status-text (e.g. "OK" or "Not Found")	

# AJAX Send a Request To a Server
To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:
```javascript
//send request
xhttp.open("GET", "ajax_info.txt", true);
//xhttp.open('method', url, 'synchronous');

xhttp.send();
```

| Method | Description | 
| ---------- | --------------- | 
| open(method, url, async) |	Specifies the type of request<br>method: the type of request: GET or POST<br>url: the server (file) location<br>async: true (asynchronous) or false (synchronous) |
| send() | 	Sends the request to the server (used for GET) | 
| send(string) | 	Sends the request to the server (used for POST) | 

## GET or POST
GET is simpler and faster than POST, and can be used in most cases.

However, always use POST requests when:
- A cached file is not an option (update a file or database on the server).
- Sending a large amount of data to the server (POST has no size limitations).
- Sending user input (which can contain unknown characters), POST is more robust and secure than GET.

GET Requests

A simple GET request:
```javascript
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "demo_get.asp", true);
xhttp.send();
```

### Sending Data as Json
JSON: JavaScript Object Notation. It is a syntax for storing and exchanging data. 

JSON is text, written with JavaScript object notation. Let's create a json object.
- json key/pair values must be double quoted

```javascript
var myObj = {
  people : [
    {"firstName" : 'shaktish', "age" : 24},
    {"firstName" : 'annz', "age" : 25}
  ],
  school : [
    {"name" : "Sundar", "age": 26, "place": "Chittoor"},
    {"name" : "Harish", "age": 26, "place": "Banglore"}
  ]
}
```
- check if the code is valid for JSON format from here [json online editor](https://jsoneditoronline.org/)
- To remove spaces for json structure goto [myjson](http://myjson.com/) and paste your code, click save and you will get a URL to acces Json or use JSON.stringify method

```javascript
{"people":[{"firstName":"shaktish","age":24},{"firstName":"annz","age":25}],"school":[{"name":"Sundar","age":26,"place":"Chittoor"},{"name":"Harish","age":26,"place":"Banglore"}]}
```

### Worked example
Return a list from the object
```javascript
//html
//<p class="container">

var hr = new XMLHttpRequest();
var url = 'https://api.myjson.com/bins/chs3v';
//var url = 'https://api.myjson.com/bins/jmzd7';

var cont = document.querySelector('.container');

hr.open("GET", url, true);
// (Method, url, synchronous)

hr.onreadystatechange=function(){
  if(this.status == 200 && this.readyState == 4){
    var myObj = JSON.parse(this.responseText); 
    for(var i= 0; i<myObj.people.length; i++) {
      var income = myObj.people[i].firstName;
      cont.insertAdjacentHTML('afterbegin', '<li>'+ income +'</li>');
    }
  }
}
hr.send();
```
## POST
A simple POST request:
```javascript
var xhttp = new XMLHttpRequest();
xhttp.open("POST", "demo_post.asp", true);
xhttp.send();
```

To POST data like an HTML form, add an **HTTP header** with setRequestHeader(). Specify the data you want to send in the send() method:
```javascript
var xhttp = new XMLHttpRequest();
xhttp.open("POST", "ajax_test.asp", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");
```

| Method | Description | 
| ---------- | --------------- | 
| setRequestHeader(header, value) |	Adds HTTP headers to the request<br>header: specifies the header name<br>value: specifies the header value |

## The url A File On a Server
The url parameter of the open() method, is an address to a file on a server:
```javascript
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "ajax_test.asp", true);
```

## Asynchronous - True or False?
Server requests should be sent asynchronously.

The async parameter of the open() method should be set to true:

```xhttp.open("GET", "ajax_test.asp", true);```

By sending asynchronously, the JavaScript does not have to wait for the server response, but can instead:
- execute other scripts while waiting for server response
- deal with the response after the response is ready

## The onreadystatechange Property
With the XMLHttpRequest object you can define a function to be executed when the request receives an answer.

The function is defined in the onreadystatechange property of the XMLHttpResponse object:

```html
<!DOCTYPE html>
<html>
<body>

<div id="demo">
<h2>The XMLHttpRequest Object</h2>
<button type="button" onclick="loadDoc()">Change Content</button>
</div>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
</script>

</body>
</html>
```

### worked example 01

**html**

```html
<!DOCTYPE html>
<html>
<head>
	<title>Post data 2</title>
</head>
<body>
<form action="test02.php" method="post">
	<label for="fname">First Name</label>
	<input type="text" name="fname" id="fname" value="Naruto">
	<label for="lname">Last Name</label>
	<input type="text" name="lname" id="lname" value="Uzumaki">
	<label for="age">Age</label>
	<input type="number" name="age" id="age" value="24">
	<input type="button" value="Sending via ajax"  onclick="req()">
	<input type="submit" value="Submit">
</form>
<div class="demo"></div>
<script type="text/javascript">
	var demo = document.querySelector('.demo');

	function req (){
		var hr = new XMLHttpRequest();
		var url = 'test02.php';

		var fname = document.querySelector('#fname').value;
		var lname = document.querySelector('#lname').value;
		var age = document.querySelector('#age').value;

		var formData = 'fname='+fname+'&lname='+lname+'&age='+age;

		hr.onreadystatechange = function(){
			if(this.status == 200 && this.readyState == 4){
				demo.innerHTML = this.responseText;
			}
		}
		console.log(hr);

		hr.open('POST',url, true );
		hr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
		hr.send(formData);
	}
	
</script>
</body>
</html>
```
**php**
```php
<?php
	//$fname = $_POST['fname'];
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$age = $_POST['age'];

	echo 'Hello ' .$fname. '<br>';

	$con = new mysqli('localhost','root','','ajaxtwo');
	$sql = "INSERT INTO `customnames` (`fname`, `lname`, `age`) VALUES ('.$fname.', '.$lname.', '.$age.');";

	if($con->ping()){
		echo 'connected to server <br>';
	} else {
		echo 'not connected';
	}

	if($con->query($sql)=== TRUE) {
		echo 'Created entry ';
		echo $con->insert_id;
	} else {
		echo '<br>Query not created <br>';
		echo $con->error;
	}

?>
```
**mysql database**
```mysql
CREATE TABLE `customnames` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `checked` tinyint(1) NOT NULL,
  `tim` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```
### working example 2 : JSON format
**html**
```html
<!DOCTYPE html>
<html>
<head>
	<title>Post data 2</title>
</head>
<body>
<form action="test02.php" method="post">
	<label for="fname">First Name</label>
	<input type="text" name="fname" id="fname" value="Naruto">
	<label for="lname">Last Name</label>
	<input type="text" name="lname" id="lname" value="Uzumaki">
	<label for="age">Age</label>
	<input type="number" name="age" id="age" value="24">
	<input type="button" value="Sending via ajax"  onclick="req()">
	<input type="submit" value="Submit">
</form>
<div class="demo"></div>
<script type="text/javascript">
	var demo = document.querySelector('.demo');

	function req (){
		var hr = new XMLHttpRequest();
		var url = 'test02.php';

		var fname = document.querySelector('#fname').value;
		var lname = document.querySelector('#lname').value;
		var age = document.querySelector('#age').value;

		var formData = 'fname='+fname+'&lname='+lname+'&age='+age;

		hr.onreadystatechange = function(){
			if(this.status == 200 && this.readyState == 4){
				var myObj =  JSON.parse(this.responseText);
				demo.innerHTML = myObj.xstatus + ' ' + myObj.id ;
				console.log(myObj);
			}
		}
		

		hr.open('POST',url, true );
		hr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
		hr.send(formData);
	}

</script>
</body>
</html>
```
**php**
```php
<?php
	$arr = [];
	$arr['fname'] = $_POST['fname'];
	$arr['lname'] = $_POST['lname'];
	$arr['age'] = $_POST['age'];

	// $fname = $_POST['fname'];
	// $lname = $_POST['lname'];
	// $age = $_POST['age'];

	//testing php
	//echo 'Hello ' .$fname. '<br>';

	$con = new mysqli('localhost','root','','ajaxtwo');
	//$sql = "INSERT INTO `customnames` (`fname`, `lname`, `age`) VALUES ('.$fname.', '.$lname.', '.$age.');";
	$sql = "INSERT INTO `customnames` (`fname`, `lname`, `age`) VALUES ('.$arr[fname].', '.$arr[lname].', '.$arr[age].');";

	if($con->ping()){
		//echo 'connected to server <br>';
		$arr['connected'] = true;
	} else {
		//echo 'not connected';
		$arr['not connected'] = false;
	}

	if($con->query($sql)=== TRUE) {
		//echo 'Created entry ';
		//echo $con->insert_id;

		$arr['xstatus'] = 'Created entry';
		$arr['id'] = $con->insert_id;
	} else {
		//echo '<br>Query not created <br>';
		//echo $con->error;

		$arr['xstatus'] = 'Error';
		$arr['message'] = $con->error;
	}

	echo json_encode($arr);
?>
```

# AJAX Server Response

## Server Response Properties

| Method | Description | 
| ---------- | --------------- | 
| responseText	| get the response data as a string |
| responseXML |	get the response data as XML data |

### response Text
```
document.getElementById("demo").innerHTML = xhttp.responseText;
```

## Server Response Methods

| Method | Description | 
| ---------- | --------------- | 
| getResponseHeader() |	Returns specific header information from the server resource |
| getAllResponseHeaders()	| Returns all the header information from the server resource | 

### The getAllResponseHeaders() Method
The getAllResponseHeaders() method returns all header information from the server response.
```html
<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>

<p>The getAllResponseHeaders() function returns all the header information of a resource, like length, server-type, content-type, last-modified, etc:</p>

<p id="demo"></p>

<script>
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML =
    this.getAllResponseHeaders();
  }
};
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
</script>

</body>
</html>
```
## The getResponseHeader() Method
The getResponseHeader() method returns specific header information from the server response.

```javascript
<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>

<p>The getResponseHeader() function is used to return specific header information from a resource, like length, server-type, content-type, last-modified, etc:</p>

<p>Last modified: <span id="demo"></span></p>

<script>
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML =
    this.getResponseHeader("Last-Modified");
  }
};
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
</script>

</body>
</html>
```
