## Table of contents 
- [jQuery AJAX Introduction](#jquery-ajax-introduction)
- [jQuery AJAX get and post Methods](#jquery-ajax-get-and-post-methods)
	- [jQuery get Method](#jquery-get-method)
	- [jQuery post Method](#jquery-post-method)
	
	

## Ajax Jquery 
Making a post req using Ajax and jquery

- We have a form with an id "myform". Select it in jquery, Attach a submit event with an Handler function
- In handler function, Let's create Ajax call, the params : url, type, data, success
- This is a post request, so to send data, use jquery's serialize 'var data = $('#myform').serialize();'
- Make sure u set return false to the handler function.
- And creation action.php file 

```
<html>
<head>
	<title></title>
</head>
<body>
<form id="myform" action="action2.php">
	<input type="text" id="fname" name="fname">
	<input type="submit">
</form>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$('#myform').on('submit', handler);

		function handler() {
			console.log( 'running')
			var data = $('#myform').serialize();
			$.ajax({
				url : 'action2.php',
				type : 'post',
				data : data,
				success : function(reponse) {
					console.log(reponse)
				}
			});

			return false;
		}
	});
</script>
</body>
</html>
```

```
<?php

if( isset($_POST['fname']) )  {
	print 'Your name is ' . $_POST['fname'];
}

?>
```

# jQuery AJAX Introduction
AJAX can exchange data with a server, and updating parts of a web page - without reloading the whole page.

AJAX = Asynchronous JavaScript and XML. In short; AJAX is about loading data in the background and display it on the webpage, without reloading the whole page.

Examples of applications using AJAX: Gmail, Google Maps, Youtube, and Facebook tabs.

## What About jQuery and AJAX?

jQuery provides several methods for AJAX functionality.

With the jQuery AJAX methods, you can request text, HTML, XML, or JSON from a remote server using both HTTP Get and HTTP Post - And you can load the external data directly into the selected HTML elements of your web page!

Without jQuery, AJAX coding can be a bit tricky!

Writing regular AJAX code can be a bit tricky, because different browsers have different syntax for AJAX implementation. This means that you will have to write extra code to test for different browsers. However, the jQuery team has taken care of this for us, so that we can write AJAX functionality with only one single line of code.

## jQuery AJAX load() Method
The jQuery load() method is a simple, It will execute an Ajax GET request and will set the content of the selected returned data (which should be either text or HTML).

**Syntax**

```$(selector).load(URL,data,callback);```

- The required URL parameter specifies the URL you wish to load.
- The optional data parameter specifies a set of querystring key/value pairs to send along with the request.
- The optional callback parameter is the name of a function to be executed after the load() method is completed.

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("demo_test.txt");
    });
});
</script>
</head>
<body>

<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>

<button>Get External Content</button>

</body>
</html>
```

The optional callback parameter specifies a callback function to run when the load() method is completed. The callback function can have different parameters:

- responseTxt - contains the resulting content if the call succeeds
- statusTxt - contains the status of the call
- xhr - contains the XMLHttpRequest object

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                alert("External content loaded successfully!");
            if(statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });
});
</script>
</head>
<body>

<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>

<button>Get External Content</button>

</body>
</html>
```

# jQuery AJAX get and post Methods
The jQuery get() and post() methods are used to request data from the server with an HTTP GET or POST request.

HTTP Request: GET vs. POST
Two commonly used methods for a request-response between a client and server are: GET and POST.

- GET : Requests data from a specified resource
- POST : Submits data to be processed to a specified resource

GET is basically used for just getting (retrieving) some data from the server. Note: The GET method may return cached data.

POST can also be used to get some data from the server. However, the POST method NEVER caches data, and is often used to send data along with the request.

## jQuery get Method
The $.get() method requests data from the server with an HTTP GET request.

**Syntax:**

```$.get(URL,data,function(data,status,xhr),dataType)```

| Parameter | Description | 
| ------------- | ------------- |
| URL | 	Required. | Specifies the URL you wish to request |
| data	Optional. | Specifies data to send to the server along with the request
| function(data,status,xhr)	Optional. | Specifies a function to run if the request succeeds<br>Additional parameters:<br>data - contains the resulting data from the request<br>status - contains the status of the request ("success", "notmodified", "error", "timeout", or "parsererror")<br>xhr - contains the XMLHttpRequest object |
| dataType	Optional. | Specifies the data type expected of the server response.<br>By default jQuery performs an automatic guess.<br>Possible types:<br>"xml" - An XML document<br>"html" - HTML as plain text<br>"text" - A plain text string<br>"script" - Runs the response as JavaScript, and returns it as plain text<br>"json" - Runs the response as JSON, and returns a JavaScript object<br>"jsonp" - Loads in a JSON block using JSONP. Will add an "?callback=?" to the URL to specify the callback |

- The required URL parameter specifies the URL you wish to request.
- The optional callback parameter is the name of a function to be executed if the request succeeds.
- The following example uses the $.get() method to retrieve data from a file on the server:

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $.get("https://api.myjson.com/bins/f4qeh", function(data, status){
            $('.demo').html("Getting first name from object: " + '<b>'+data.people[0].firstName + '</b>'+ "\nStatus: " +'<b>' + status + '</b>');
        });
    });
});
</script>
</head>
<body>
<div class="demo"></div>
<br>
<button>Send an HTTP GET request to a page and get the result back</button>

</body>
</html>
```
- The first parameter of $.get() is the URL we wish to request ("api.myjson.com/bins/f4qeh").
- The second parameter is a callback function. The first callback parameter holds the content of the page requested, and the second callback parameter holds the status of the request.

## Get json data 
- use ```getJSON```

```html
	$(document).ready(function(){
		var url = 'https://api.myjson.com/bins/f4qeh';
		$.getJSON(url,function(data,status){
			$('.demo').html((data));
			console.log(data);
			console.log(status);
		})
	})
```
## jQuery post Method
The $.post() method requests data from the server using an HTTP POST request.

```javascript
$.post(URL,data,callback);
```
- The required URL parameter specifies the URL you wish to request.
- The optional data parameter specifies some data to send along with the request.
- The optional callback parameter is the name of a function to be executed if the request succeeds.
- The following example uses the $.post() method to send some data along with the request:

| Parameter | Description | 
| ------------- | ------------- |
| URL	Required. | Specifies the url to send the request to |
| data	Optional.  | Specifies data to send to the server along with the request |
| function(data,status,xhr)	Optional.  | Specifies a function to run if the request succeeds <br>Additional parameters:<br>data - contains the resulting data from the request<br>status - contains the status of the request ("success", "notmodified", "error", "timeout", or "parsererror")<br>xhr - contains the XMLHttpRequest object<br>| dataType	Optional.  | Specifies the data type expected of the server response.<br>By default jQuery performs an automatic guess.<br>Possible types:<br>"xml" - An XML document<br>"html" - HTML as plain text<br>"text" - A plain text string<br>"script" - Runs the response as JavaScript, and returns it as plain text<br>"json" - Runs the response as JSON, and returns a JavaScript object<br>"jsonp" - Loads in a JSON block using JSONP. Will add an "?callback=?" to the URL to specify the callback |
| dataType	Optional. | Optional. Specifies the data type expected of the server response.<br>By default jQuery performs an automatic guess.<br>Possible types:<br>"xml" - An XML document<br>"html" - HTML as plain text<br>"text" - A plain text string<br>"script" - Runs the response as JavaScript, and returns it as plain text<br>"json" - Runs the response as JSON, and returns a JavaScript object<br>"jsonp" - Loads in a JSON block using JSONP. Will add an "?callback=?" to the URL to specify the callback |

Example
- The first parameter of $.post() is the URL we wish to request ("test.phpfile").
- Then we pass in form data to send along with the request (first name nn last name etc).
- The php file reads the parameters, processes them, and returns a result.
- The third parameter is a callback function. The first callback parameter holds the content of the page requested, and the second callback parameter holds the status of the request and the third  callback parameter returns the response 

```html
<!DOCTYPE html>
<html>
<head>
	<title>Jquery ajax post</title>
</head>
<body>
<form class="testForm">
	<label for="fname">First Name</label>
	<input type="text" name="fname" id="fname" value="Naruto">
	<label for="lname">Last Name</label>
	<input type="text" name="lname" id="lname" value="Uzumaki">
	<label for="age">Age</label>
	<input type="number" name="age" id="age" value="24">
	<!--<input type="button" value="Sending via ajax"  onclick="req()">-->
	<input type="submit" value="Submit">
</form>
<div class="demo"></div>
<div class="xhrStatus"></div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		// get form by it's ID/Class
		$('.testForm').submit(function(e){
			// preventDefaul : prevent form from submitting
			$('.xhrStatus').text('Status : Processing');
			e.preventDefault();
			var url = 'test.php';
			var formData = {
				fname : $('#fname').val(),
				lname : $('#lname').val(),
				age : $('#age').val()
			}
			$.post(url,formData,function(data,status,xhr){
				// we would get the data in string format
				console.log(data);
				// so use json.parse on data to become a object
				var json = JSON.parse(data);
				// returns status
				$('.xhrStatus').text('Status :'+status);
				$('.demo').html('Created ' + json.first + ' ' + json.last  +' ('+ json.id +  ')');
				// returns readystate
				console.log(xhr);
			});
		});

	});
	// javascript ajax
	/*
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
	*/
</script>
</body>
</html>
```
#### sql
```sql
CREATE TABLE `names` (
  `id` int(11) NOT NULL,
  `first` varchar(255) NOT NULL,
  `last` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `checked` tinyint(1) NOT NULL,
  `timestamp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

````
#### php
```php
<?php 
	$arr = [];
	$arr['first'] = $_POST['fname'];
	$arr['last'] = $_POST['lname'];
	$arr['age'] = $_POST['age'];

	// $first= $_POST['fname'];
	// $last= $_POST['lname'];
	// $age= $_POST['age'];

	//echo 'hello ' .$fname;

	//echo 'hello ' .$fname;

	 $con = new mysqli("localhost","root","","ajaxtest");
	 //$sql = "INSERT INTO `names` (`first`, `last`, `age`) VALUES ('.$first.', '.$last.', '.$age.');";
	 $sql = "INSERT INTO `names` (`first`,`last`,`age`) VALUES ('.$arr[first].', '.$arr[last].', '.$arr[age].');";

	if($con->ping()){
		$arr['connected'] = true;
	} else {
		$arr['connected'] = false;
	}

	if($con->query($sql) === TRUE) {
		$arr['xstatus'] = 'Created entry';
		$arr['id'] = $con->insert_id;
	} else {
		$arr['xstats'] = 'Errror';
		$arr['message'] = $con->error;
	}

echo json_encode($arr);
?>
```

## Ajax method
The ajax() method is used to perform an AJAX (asynchronous HTTP) request.

All jQuery AJAX methods use the ajax() method. This method is mostly used for requests where the other methods cannot be used.

| Parameter | Value/Description | 
| ------------- | ------------- |
| async	| A Boolean value indicating whether the request should be handled asynchronous or not. Default is true |
| beforeSend(xhr) | 	A function to run before the request is sent |
| cache	| A Boolean value indicating whether the browser should cache the requested pages. Default is true |
| complete(xhr,status)	| A function to run when the request is finished (after success and error functions) |
| contentType | 	The content type used when sending data to the server. Default is: "application/x-www-form-urlencoded" |
| context | 	Specifies the "this" value for all AJAX related callback functions |
| data |	Specifies data to be sent to the server |
| dataFilter(data,type) |		A function used to handle the raw response data of the XMLHttpRequest |
| dataType |		The data type expected of the server response. |
| error(xhr,status,error) |		A function to run if the request fails. |
| global | 	A Boolean value specifying whether or not to trigger global AJAX event handles for the request. Default is true |
| ifModified	 | A Boolean value specifying whether a request is only successful if the response has changed since the last request.<br>Default is: false. |
| jsonp	| A string overriding the callback function in a jsonp request |
| jsonpCallback	 | Specifies a name for the callback function in a jsonp request |
| password	 | Specifies a password to be used in an HTTP access authentication request. |
| processData	 | A Boolean value specifying whether or not data sent with the request should be transformed into a query string.<br>Default is true |
| scriptCharset	 | Specifies the charset for the request |
| success(result,status,xhr) | 	A function to be run when the request succeeds |
| timeout	 | The local timeout (in milliseconds) for the request |
| traditional	 | A Boolean value specifying whether or not to use the traditional style of param serialization |
| type	 | Specifies the type of request. (GET or POST) |
| url	Specifies  |  the URL to send the request to. Default is the current page |
| username	 | Specifies a username to be used in an HTTP access authentication request |
| xhr |	A function used for creating the XMLHttpRequest object |

Syntax

```$.ajax({name:value, name:value, ... })```

```javascript
$.ajax({
	url : url,
	data: formData,
	type: "POST",
	dataType:'json',
	success:function(data,status,xhr){
		console.log(data);
		$('.xhrStatus').text('Status :'+status);
		$('.demo').html('Created ' + data.first + ' ' + data.last  +' ('+ data.id +  ')');
	},
	error : function (data,status,xhr){
		console.log(data);
		$('.xhrStatus').text('Status :'+status);
		console.log(xhr);
	}
});
```





