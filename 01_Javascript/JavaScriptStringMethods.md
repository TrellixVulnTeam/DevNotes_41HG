# JavaScript Strings

## Table of contents
- [JavaScript Strings](#javaScript-strings)
  - [Quotes](#quotes)
  - [Special Characters](#special-characters)
  - [Strings Can be Objects](#strings-can-be-objects)
- [JavaScript String Methods](#javaScript-string-methods)
  - [length Property](#length-property)
  - [indexOf](#indexof)
  - [lastIndexOf](#lastindexof)
  - [charAt](#charat)
  - [charCodeAt](#charcodeat)
  - [concat](#concat)
  - [endsWith](#endswith)
  - [includes](#includes)
  - [match](#match)
  - [repeat](#repeat)
  - [search](#search)
  - [slice](#slice)
  - [substring](#substring)
  - [substr](#substr)
  - [split](#split)
  - [trim](#trim)


JavaScript strings are used for storing and manipulating text. 
A JavaScript string simply stores a series of characters like "John Doe".


### Quotes
A string can be any text inside quotes. You can use single or double quotes:
```javascript
let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks/ string literals`;
```
Single and double quotes are essentially the same. **Backticks**, however, allow us to embed any **expression** into the string, including function calls:
```
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```

### Special Characters

It is still possible to create multiline strings with single quotes by using a so-called newline character, written as **\n**, which denotes a line break:
```javascript
let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // a multiline list of guests

alert( "Hello\nWorld" ); // two lines using a "newline symbol"

// two lines using a normal newline and backticks
alert( `Hello
World`
```

There are other, less common “special” characters as well. Here’s the list:

| Character | Description | 
| ------------- | --------------- |
| \b  | Backspace () |
| \n  | New line (creates next line) |
| \t  | Tab (works as tab key, space) |


#### escape character

All special characters start with a **backslash character \.** It is also called an **escape character**.
We would also use it if we want to insert a quote into the string.
```alert( 'I\'m the Walrus!' ); // I'm the Walrus!```

Use backticks instead of escape character
```javascript
alert( `The backslash: \\` ); // The backslash: 
```
#### Long literal strings
Sometimes, your code will include strings which are very long. If a JavaScript statement does not fit on one line, the best place to break it is after an **operator**:
```javascript
document.getElementById("demo").innerHTML =
"Hello Dolly!";
```
you may wish to specifically break the string into **multiple lines** in the source code without affecting the actual string contents. There are two ways you can do this.

- You can use the + operator to append multiple strings together, like this:

```javascript
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable.";
```                 

you can use the **backslash character ("\")** at the end of each line to indicate that the string will continue on the next line. Make sure there is no space or any other character after the backslash (except for a line break), or as an indent; otherwise it will not work. That form looks like this:
```javascript
let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

### Strings Can be Objects
Normally, JavaScript strings are primitive values, created from literals:

**var firstName = "John";**

But strings can also be defined as objects with the keyword new:

**var firstName = new String("John");**
```
var x = "John";
var y = new String("John");

// typeof x will return string
// typeof y will return object
```
**Don't create strings as objects. It slows down execution speed.**
**The new keyword complicates the code. This can produce some unexpected results:**

## JavaScript String Methods

### length Property
The length of a string is found in the built in property length:
```javascript
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

console.log(sln);
//26
```
### indexOf
The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character of a string called stringName is **stringName.length - 1.**

**Syntax**

```str.indexOf(searchValue[, fromIndex])```

**Parameters** 

```searchValue```
A string representing the value to search for.

```fromIndex``` [Optional]
An integer representing the index at which to start the search; the default value is 0. For fromIndex values lower than 0 or greater than str.length, the search starts at index 0 and str.length respectively

**Return value**

The index of the first occurrence of searchValue, or -1 if not found.
An empty string searchValue will match at any index between 0 and str.length

**Examples** 

```javascript
'Blue Whale'.indexOf('Blue');     // returns  0
'Blue Whale'.indexOf('Blute');    // returns -1
'Blue Whale'.indexOf('Whale', 0); // returns  5
'Blue Whale'.indexOf('Whale', 5); // returns  5
'Blue Whale'.indexOf('Whale', 7); // returns -1
'Blue Whale'.indexOf('');         // returns  0
'Blue Whale'.indexOf('', 9);      // returns  9
'Blue Whale'.indexOf('', 10);     // returns 10
'Blue Whale'.indexOf('', 11);     // returns 10
```

**Checking occurrences**
Note that '0' doesn't evaluate to true and '-1' doesn't evaluate to false. Therefore, when checking if a specific string exists within another string the correct way to check would be:

```javascript
'Blue Whale'.indexOf('Blue') !== -1; // true
'Blue Whale'.indexOf('Bloe') !== -1; // false
```

### lastIndexOf
The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

**Syntax**

```str.lastIndexOf(searchValue[, fromIndex])```

**Examples**

```javascript
'canal'.lastIndexOf('a');     // returns 3


//how does this work
'canal'.lastIndexOf('a', 2);  // returns 1

// 4 3  '2'  1  0
// l  a  'n'  a  c 

// last indexof counts from 'right'
//start from '2' which is 'n' 

```

### charAt
The charAt() method returns the specified character from a string.

Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character in a string called stringName is stringName.length - 1. If the index you supply is out of range, JavaScript returns an empty string.

If no index is provided to .charAt(), 0 will be used as default

**Syntax**

```str.charAt(index)```

**Parameters**

```index```
An integer between 0 and 1-less-than the length of the string. If no index is provided, charAt() will use 0.

**Return value**

A string representing the character at the specified index; empty string if index is out of range.

**Examples**

```javascript
var anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'"); 
// No index was provided, used 0 as default

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");

// =====================

The character at index 0   is 'B'
The character at index 0   is 'B'
The character at index 1   is 'r'
The character at index 2   is 'a'
The character at index 3   is 'v'
The character at index 4   is 'e'
The character at index 999 is ''

```

**Tip:** The index of the last character in a string is string.length-1, the second last character is string.length-2, and so on (See "More Examples").

### charCodeAt
The charCodeAt() method returns the Unicode of the character at the specified index in a string.
The index of the first character is 0, the second character 1, and so on.

**Syntax**

```javascript
str.charCodeAt(index)
```

**Parameters**

```index```

An integer greater than or equal to 0 and less than the length of the string; if it is not a number, it defaults to 0.
Return value

**Return value** 

A number representing the UTF-16 code unit value of the character at the given index; NaN if index is out of range.

**Examples**

```javascript
'ABC'.charCodeAt(0); // returns 65
```

### concat
The concat() method combines the text of one or more strings and returns a new string.

**Syntax**

```javascript
str.concat(string2[, string3, ..., stringN])
```

**Parameters**

```string2...stringN```

string2...stringN
Strings to concatenate to this string.

**Return value**

A new string containing the combined text of the strings provided.

**Examples**

```javascript
var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2); //returns 'hello world!'
```

**Tips:** It is strongly recommended that assignment operators (+, +=) are used instead of the concat() method. See this performance test.


### endsWith
The endsWith() method determines whether a string ends with the characters of a specified string, returning **true or false** as appropriate.


Syntax
```javascript
str.endsWith(searchString[, length])
```

**Parameters**

```searchString```
The characters to be searched for at the end of this string.

```length```
Optional. If provided overwrites the considered length of the string to search in. If omitted, the default value is the length of the string.

**Return value**

true if the given characters are found at the end of the string; otherwise, false.

**Examples**

```javascript
var str = 'To be, or not to be, that is the question.';

console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be'));     // false
console.log(str.endsWith('to be', 19)); // true

// Check if a string ends with "world", assuming the string is 11 characters long:

var str = "Hello world, welcome to the universe.";
var n = str.endsWith("world", 11); //true
```
### includes
The includes() method determines whether one string may be found within another string, returning true or false as appropriate.

**Syntax**

```javascript
str.includes(searchString[, position])
```

**Parameters**

```searchString```
A string to be searched for within this string.

```position```
Optional. The position within the string at which to begin searching for searchString.(defaults to 0).

**Return value**

true if the given string is found anywhere within the search string; otherwise, false if not.

**Examples**

```javascript
var str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false
```


### match
The match() method retrieves the matches when matching a string against a regular expression.

**Syntax**

```javascript
str.match(regexp)
```

**Parameters**

```regExp```
A regular expression object. If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj). If you don't give any parameter and use the match() method directly, you will get an Array with an empty string:[""].


**Return value**

If the string matches the expression, it will return an Array containing the entire matched string as the first element, followed by any results captured in parentheses. If there were no matches, null is returned.

**Examples**

```javascript
var str = "The rain in SPAIN stays mainly in the plain"; 

var res = str.match(/ain/gi); 

//returns ain,AIN,ain,ain
```


### repeat
The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

**Syntax**

```javascript
str.repeat(count);
```

**Parameters**

```count```
An integer between 0 and +∞: [0, +∞), indicating the number of times to repeat the string in the newly-created string that is to be returned..

**Return value**

A new string containing the specified number of copies of the given string.

**Examples**

```javascript
'abc'.repeat(-1);   // RangeError
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0);  // RangeError
```
### replace
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

**Note: The original string will remain unchanged.**

**Syntax**

```javascript
str.replace(regexp|substr, newSubstr|function)
```

**Parameters**

```regexp(pattern)```
 A RegExp object or literal. The match or matches are replaced with newSubStr or the value returned by the specified function.

```substr (pattern)```
A String that is to be replaced by newSubStr. It is treated as a verbatim string and is not interpreted as a regular expression. Only the first occurrence will be replaced.

```newSubStr (replacement)```
The String that replaces the substring specified by the specified regexp or substr parameter. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.

```function (replacement)```
A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. 

**Return value**

A new string with some or all matches of a pattern replaced by a replacement.

**Examples**

#### Defining the regular expression in replace()

```javascript
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...
```
#### Using global and ignore with replace()
```javascript
var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.
```
#### Switching words in a string
The following script switches the words in the string. For the replacement text, the script uses the $1 and $2 replacement patterns.
```
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John
```
#### Using a function to return the replacement text:
```javascript
var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue|house|car/gi, function myFunction(x){return x.toUpperCase();});

//Mr BLUE has a BLUE HOUSE and a BLUE CAR.
```

### search
The search() method executes a search for a match between a regular expression and this String object.

**Syntax**

```javascript
str.search(regexp)
```

**Parameters**

```regExp```
A regular expression object. If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj).

**Return value**

The index of the first match between the regular expression and the given string; if not found, -1.

**Examples**

```javascript
var str = "Visit W3Schools!";
var n = str.search("W3Schools");

// returns 6
```
regular expression

```javascript
var str = "Mr. Blue has a blue house";
var n = str.search(/blue/i)

// returns 4
```

### slice
The slice() method extracts a section of a string and returns it as a new string.

- slice() extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string.
- slice() extracts up to but not including endIndex. str.slice(1, 4) extracts the second character through the fourth character (characters indexed 1, 2, and 3).
- As an example, str.slice(2, -1) extracts the third character through the second to last character in the string.

**Syntax**

```javascript
str.slice(beginIndex[, endIndex])
```

**Parameters**

```beginIndex```
The zero-based index at which to begin extraction. If negative, it is treated as strLength + beginIndex where strLength is the length of the string (for example, if beginIndex is -3 it is treated as strLength - 3). If beginIndex is greater than or equal to the length of the string, slice() returns an empty string.

```endIndex```
Optional. The zero-based index before which to end extraction. The character at this index will not be included. If endIndex is omitted, slice() extracts to the end of the string. If negative, it is treated as strLength + endIndex where strLength is the length of the string (for example, if endIndex is -3 it is treated as strLength - 3).

**Return value**

A new string containing the extracted section of the string.

**Examples**

```javascript
var str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2); // OUTPUT: he morn
console.log(str3); // OUTPUT: morning is upon u
console.log(str4); // OUTPUT: is upon us.
console.log(str5); // OUTPUT: ""
```

Extract from position 3, and to the end:
```
var str = "Hello world!";
var res = str.slice(3);

// returns lo world!
```

Extract only the first character:
```
var str = "Hello world!";
var res = str.slice(0, 1);

// returns H
```

Extract only the last character:
```
var str = "Hello world!";
var res = str.slice(-1);

// returns !
```


### substring
The substring() method returns a subset of a string between one index and another, or through the end of the string.

substring() extracts characters from indexStart up to but not including **indexEnd.** In particular:

- If ```indexStart``` equals ```indexEnd, substring()``` returns an empty string.
- If ```indexEnd``` is omitted, substring() extracts characters to the end of the string.
- If either argument is less than 0 or is NaN, it is treated as if it were 0.
- If either argument is greater than ```stringName.length```, it is treated as if it were ```stringName.length.```
- If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; for example, ```str.substring(1, 0) == str.substring(0, 1).```

**Syntax**

```javascript
str.substring(indexStart[, indexEnd])
```

**Parameters**

```indexStart```
An integer between 0 and the length of the string, specifying the offset into the string of the first character to include in the returned substring.

```indexEnd```
Optional. An integer between 0 and the length of the string, which specifies the offset into the string of the first character not to include in the returned substring.

**Return value**

A new string containing the extracted section of the given string

**Examples**

```javascript
var anyString = 'Mozilla';

// Displays 'Moz'
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));

// Displays 'lla'
console.log(anyString.substring(4, 7));
console.log(anyString.substring(4));
console.log(anyString.substring(7, 4));

// Displays 'Mozill'
console.log(anyString.substring(0, 6));

// Displays 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
```

### substr
The substr() method returns the characters in a string beginning at the specified location through the specified number of characters. 

**Syntax**

```javascript
str.substr(start[, length])
```

**Parameters**

```start```
Location at which to begin extracting characters. If a negative number is given, it is treated as strLength - start where strLength is the length of the string. For example, str.substr(-3) is treated as str.substr(str.length - 3)

```length```
The number of characters to extract. If this argument is undefined, all the characters from start to the end of the string are extracted..

**Return value**

A new string containing the extracted section of the given string. If length is 0 or a negative number, an empty string is returned.

**Examples**

```javascript
var str = 'abcdefghij';

console.log('(1, 2): '   + str.substr(1, 2));   // '(1, 2): bc'
console.log('(-3, 2): '  + str.substr(-3, 2));  // '(-3, 2): hi'
console.log('(-3): '     + str.substr(-3));     // '(-3): hij'
console.log('(1): '      + str.substr(1));      // '(1): bcdefghij'
console.log('(-20, 2): ' + str.substr(-20, 2)); // '(-20, 2): ab'
console.log('(20, 2): '  + str.substr(20, 2));  // '(20, 2): '
```


### split
The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.

**Syntax**

```javascript
str.split([separator[, limit]])
```

**Parameters**

```separator Optional```
Specifies the string which denotes the points at which each split should occur. The separator is treated as a string or as a regular expression. If a plain-text separator contains more than one character, that entire string must be found to represent a split point. If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters.

```limit Optional```
Integer specifying a limit on the number of splits to be found. When this parameter is provided, the split() method splits the string at each occurence of the specified separator but stops when limit entries have been placed into the array. It may still contain fewer entries than limit if the end of the string is reached before the specified limit is reached. The left-over text is not returned in the new array.

**Return value**

An array of strings split at each point where the separator occurs in the given string.

**Examples**

Split a string into an array of substrings:
```javascript
var str = "How are you doing today?";
var res = str.split(" ");
//How,are,you,doing,today?
```

Omit the separator parameter:
```javascript
var str = "How are you doing today?";
var res = str.split();
The result of res will be an array with only one value:

//How are you doing today?
```

Use the limit parameter:
```javascript
var str = "How are you doing today?";
var res = str.split(" ", 3);
The result of res will be an array with only 3 values:

//How,are,you
```

Use a letter as a separator:
```javascript
var str = "How are you doing today?";
var res = str.split("o");
The result of res will be an array with the values:

H,w are y,u d,ing t,day?
```

### trim
The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

**Syntax**

```javascript
str.trim()
```

**Return value**

A new string representing the calling string stripped of whitespace from both ends.

**Examples**

```javascript
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// Another example of .trim() removing whitespace from just one side.

var orig = 'foo    ';
console.log(orig.trim()); // 'foo'
```
