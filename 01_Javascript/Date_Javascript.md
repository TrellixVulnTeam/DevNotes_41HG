# Javascript topics

## Table of contents
- [Date](#date)

## Callback Functions 
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```html
<html>
<head>
	<title>Func</title>
</head>
<body>
	<button>Print my name</button>
	<span></span>
<script type="text/javascript">

var btn = document.querySelector('button');
var demo = document.querySelector('span');

btn.addEventListener('click', function () {
	askName(printFunc);
});

function printFunc (name) {
	if(name !== undefined) {
		console.log('Hello '+ name);	
	}
}

function askName (func) {
	var userName = prompt('What\'s your name?');

	if(typeof func === "function") {
		func(userName);
	} else {
		return userName;
	}
}

//console.log(askName());

</script>
</body>
</html>
```


## Date

To create date object in JavaScript use Date() constructor

The following example writes the current Date and Time to the web page
```javascript
document.write(new Date());
```
If the Date() constructor is used without any arguments, it returns the current date and time. To create a date object with specific dates there are 2 ways.

Creating a specific date object in JavaScript using a date string
```javascript
var dateOfBirth = new Date("January 13, 1980 11:20:00");
document.write(dateOfBirth);
```

You can also create a specific date object using number for year, month, day, hours, minutes, seconds, & milliseconds. 

The syntax is shown below.

var dateOfBirth = new Date(year, month, day, hours, minutes, seconds, milliseconds);

Example :
```javascript
var dateOfBirth = new Date(1980, 0, 13, 11, 20, 0, 0);
document.write(dateOfBirth);
```

**Please note : In JavaScript month numbers start from ZERO. So if you want the month of march then use 2 instead of 3.**

### Some useful Date object methods in JavaScript

#### getFullYear
getFullYear() Returns the full year (all the four digits)

Example : The following example returns 1980
```javascript
var year = new Date(1980, 0, 13, 11, 20, 0, 0).getFullYear();
document.write(year);
```

#### getMonth
getMonth() - Returns the month number (from 0-11)

Example : The following example returns 0 (for January)
```javascript
var month = new Date(1980, 0, 13, 11, 20, 0, 0).getMonth();
document.write(month);
```

You can use the following code to get the month name from the month number in Javascript. The following example returns January.

```javascript
function getMonthNameFromNumber(monthNumber) 
{
    var monthNames = ["January", "February", "March", "April",
                        "May", "June", "July", "August", "September", 
                        "October", "November", "December"];
    return monthNames[monthNumber];
}

var monthName = getMonthNameFromNumber(new Date(1980, 0, 13, 11, 20, 0, 0).getMonth());
document.write(monthName);
```
#### getDate
getDate() - Returns the day of the month (from 1-31)

Example : The following example returns 13

```javascript
var dayOfMonth = new Date(1980, 0, 13, 11, 20, 0, 0).getDate();
document.write(dayOfMonth);
```
#### getDay
getDay() - Returns the day number of the week (from 0-6). 0 is sunday, 1 is monday and so on.

Example : The following example returns 0
```javascript
var dayOfWeek = new Date(1980, 0, 13, 11, 20, 0, 0).getDay();
document.write(dayOfWeek);
```
You can use the following code to get the day of the week from the day number in Javascript. The following example returns Sunday.
```javascript
function getWeekDayNameFromNumber(dayNumber) 
{
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekDays[dayNumber];
}

var weekdayName = getWeekDayNameFromNumber(new Date(1980, 0, 13, 11, 20, 0, 0).getDay());
document.write(weekdayName);
```

You also have the following methods that return the time parts of the date object
```javascript
getHours() - Returns the hour (from 0-23)
getMinutes() - Returns the minutes (from 0-59)
getSeconds() - Returns the seconds (from 0-59)
getMilliseconds() - Returns the milliseconds (from 0-999)
```
### How to convert date in javascript to dd/mm/yyyy format
```javascript
function formatDate(date) 
{
    var day = date.getDate();
    if (day [ 10) 
    {
        day = "0" + day;
    }

    var month = date.getMonth() + 1;
    if (month [ 10) 
    {
        month = "0" + month;
    }

    var year = date.getFullYear();

    return day + "/" + month + "/" + year;
}

document.write(formatDate(new Date()));

// If you don't want ZERO (0) before a single digit month or day number, then modify the formatDate() function as shown below.
function formatDate(date) 
{
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return day + "/" + month + "/" + year;
}

document.write(formatDate(new Date()));
```
