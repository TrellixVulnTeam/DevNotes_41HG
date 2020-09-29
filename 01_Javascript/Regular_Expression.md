# Regular Expression

Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the **exec** and **test** methods of RegExp, and with the **match, replace, search,** and **split** methods of **String**.

**Syntax**

Literal and constructor
```
// literal
/pattern/flags
// constructor
new RegExp(pattern[, flags])
```

### Parameters

**pattern**

The text of the regular expression.

**flags** 

If specified, flags can have any combination of the following values:

```g```
global match; find all matches rather than stopping after the first match
```i```
ignore case
```m```
multiline; treat beginning and end characters (^ and $) as working over multiple lines (i.e., match the beginning or end of each line (delimited by \n or \r), not only the very beginning or end of the whole input string)
```u```
unicode; treat pattern as a sequence of unicode code points
```y```
sticky; matches only from the index indicated by the lastIndex property of this regular expression in the target string (and does not attempt to match from any later indexes).

## Creation
There are 2 ways to create a RegExp object: a literal notation and a constructor. 

Using a **regular expression literal**, which consists of a pattern enclosed between slashes, as follows:
```javascript
var re = /ab+c/;
```
Regular expression literals provide compilation of the regular expression when the script is loaded. If the regular expression remains constant, using this can improve performance.

Or calling the **constructor function** of the ```RegExp object```, as follows:
```javascript
var re = new RegExp('ab+c','i');
```
Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.

### Pattern Creation

A regular expression pattern is composed of simple characters, such as /abc/, or a combination of simple and special characters, such as /ab*c/ or /Chapter (\d+)\.\d*/. 

### simple pattern

Simple patterns are constructed of characters for which you want to find a direct match. For example, the pattern /abc/ matches character combinations in strings only when exactly the characters 'abc' occur together and in that order. Such a match would succeed in the strings "Hi, do you know your abc's?" and "The latest airplane designs evolved from slabcraft." In both cases the match is with the substring 'abc'. There is no match in the string 'Grab crab' because while it contains the substring 'ab c', it does not contain the exact substring 'abc'.

### Using special characters

When the search for a match requires something more than a direct match, such as finding one or more b's, or finding white space, the pattern includes special characters. For example, the pattern ```/ab*c/``` matches any character combination in which a single 'a' is followed by zero or more ```'b's (*``` means 0 or more occurrences of the preceding item) and then immediately followed by 'c'. In the string "cbbabbbbcdebc," the pattern matches the substring 'abbbbc'.

The following table provides a complete list and description of the special characters that can be used in regular expressions.

**Special characters in regular expressions.**

| Character | Meaning |
| ------------- | ------------ |
| ```\```         |  A backslash that precedes a special character indicates that the next character is not special and should be interpreted literally. For example, the pattern``` /a*/``` relies on the special character ```*``` to match 0 or more a's. By contrast, the pattern ```/a\*/``` removes the specialness of the ```*``` to enable matches with strings like ```a*```. |
|  ```^```       | Matches beginning of input. If the multiline flag is set to true, also matches immediately after a line break character.<br><br>For example, ```/^A/``` does not match the 'A' in "an A", but does match the 'A' in "An E".<br><br>The ```^``` has a different meaning when it appears as the first character in a character set pattern.   |
| ```$``` | Matches end of input. If the multiline flag is set to true, also matches immediately before a line break character. <br><br> For example,``` /t$/``` does not match the 't' in "eater", but does match it in "eat" | 
| ```*``` | Matches the preceding expression 0 or more times. Equivalent to {0,}.<br><br>For example, ```/bo*/``` matches 'boooo' in "A ghost booooed" and 'b' in "A bird warbled" but nothing in "A goat grunted".  | 
| ```+``` | Matches the preceding expression 1 or more times. Equivalent to {1,}. <br><br> For example, ``` /a+/``` matches the 'a' in "candy" and all the a's in "caaaaaaandy", but nothing in "cndy".  | 
| ```?``` | Matches the preceding expression 0 or 1 time. Equivalent to {0,1}.<br><br>For example, ```/e?le?/``` matches the 'el' in "angel" and the 'le' in "angle" and also the 'l' in "oslo".<br><br>If used immediately after any of the quantifiers ```*, +, ?, or {},``` makes the quantifier non-greedy (matching the fewest possible characters), as opposed to the default, which is greedy (matching as many characters as possible). For example, applying ```/\d+/ to "123abc"``` matches "123". But applying ```/\d+?/``` to that same string matches only the "1".  | 
| ```.``` | (The decimal point) matches any single character except the newline character.<br><br>For example, ```/.n/``` matches 'an' and 'on' in "nay, an apple is on the tree", but not 'nay'.  | 
| ```(x)``` | Matches 'x' and remembers the match, as the following example shows. The parentheses are called **capturing parentheses.**<br><br> The '(foo)' and '(bar)' in the pattern ```/(foo) (bar) \1 \2/``` match and remember the first two words in the string "foo bar foo bar". The \1 and \2 in the pattern match the string's last two words. Note that \1, \2, ..., \n are used in the matching part of the regex. In the replacement part of a regex the syntax $1, $2, ..., $n must be used, e.g.: ```'bar foo'.replace(/(...) (...)/, '$2 $1')```.  $& means the whole matched string. | 

**incomplete**  see ref [MDN Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Methods that use regular expressions
Regular expressions are used with the RegExp methods ```test``` and ```exec``` and with the String methods ```match, replace, search,``` and ```split```.

| Method | Description |
| ---------- | --------------- |
| exec |  A RegExp method that executes a search for a match in a string. It returns an array of information or null on a mismatch. |
| test  | A RegExp method that tests for a match in a string. It returns true or false. |
| match |  A String method that executes a search for a match in a string. It returns an array of information or null on a mismatch. |
| search |  A String method that tests for a match in a string. It returns the index of the match, or -1 if the search fails. |
| replace |  A String method that executes a search for a match in a string, and replaces the matched substring with a replacement substring. |
| split |  A String method that uses a regular expression or a fixed string to break a string into an array of substrings. | 

When you want to know whether a pattern is found in a string, use the ```test or search``` method; for more information (but slower execution) use the ```exec or match``` methods. If you use ```exec or match``` and if the match succeeds, these methods return an ```array``` and update properties of the associated regular expression object and also of the predefined regular expression object, RegExp. If the match fails, the exec method returns null (which coerces to false).

### exec method
The exec() method executes a search for a match in a specified string. Returns a result array, or null.
If you are executing a match simply to find true or false, use the RegExp.prototype.test() method or the String.prototype.search() method.

**Syntax**

```regexObj.exec(str)```

#### Parameters
```str```
The string against which to match the regular expression.

#### Return value
If the match succeeds, the exec() method returns an array and updates properties of the regular expression object. The returned array has the matched text as the first item, and then one item for each capturing parenthesis that matched containing the text that was captured.

If the match fails, the ```exec()``` method returns null.

**Example**

```javascript
var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');

console.log(result);
//["Quick Brown Fox Jumps", "Brown", "Jumps"]

/*
quick\s(brown).+?(jumps)
find
quick,'space',brown, one or more characters -non-greedy, jumps
brown and jumps have parenthesis means they are capturing. so we have brown and jumps returned
*/
```

### test method
The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.

Use test() whenever you want to know whether a pattern is found in a string. test() returns a boolean, unlike the String.prototype.search() method, which returns the index (or -1 if not found).

**Syntax**

regexObj.test(str)

#### Parameters
```str```
The string against which to match the regular expression.

#### Return value
true if there is a match between the regular expression and the specified string; otherwise, false.

**Example**

Simple example that tests if "hello" is contained at the very beginning of a string, returning a boolean result.

```javascript
var str = 'hello world!';
var result = /^hello/.test(str);
console.log(result); // true
```

### match method
The match() method retrieves the matches when matching a string against a regular expression.

If the regular expression does not include the g flag, str.match() will return the same result as RegExp.exec(). The returned Array has an extra input property, which contains the original string that was parsed. In addition, it has an index property, which represents the zero-based index of the match in the string.

If the regular expression includes the g flag, the method returns an Array containing all matched substrings rather than match objects. Captured groups are not returned. If there were no matches, the method returns null.


- If you need to know if a string matches a regular expression RegExp, use RegExp.test().
- If you only want the first match found, you might want to use RegExp.exec() instead.
- if you want to obtain capture groups and the global flag is set, you need to use RegExp.exec() instead.

**Syntax**

```str.match(regexp)```

#### Parameters

```regexp```
A regular expression object. If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj). If you don't give any parameter and use the match() method directly, you will get an Array with an empty string:[""].

#### Return value
If the string matches the expression, it will return an Array containing the entire matched string as the first element, followed by any results captured in parentheses. If there were no matches, null is returned.

**Examples**

In the following example, match() is used to find 'Chapter' followed by 1 or more numeric characters followed by a decimal point and numeric character 0 or more times. The regular expression includes the i flag so that upper/lower case differences will be ignored.

```javascript
var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);
// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
```

Using global and ignore case flags with match()

The following example demonstrates the use of the global and ignore case flags with match(). All letters A through E and a through e are returned, each its own element in the array.

```javascript
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```


### search method
The search() method executes a search for a match between a regular expression and this String object.

When you want to know whether a pattern is found and also its index in a string use search() (if you only want to know if it exists, use the similar test() method on the RegExp prototype,

**Syntax**

```str.search(regexp)```

#### Parameters
```regexp```
A regular expression object. If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj).

#### Return value
The index of the first match between the regular expression and the given string; if not found, -1.


**Example**

The following example searches a string with 2 different regex objects to show a successful search (positive value) vs. an unsuccessful search (-1)

```javascript
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;

var result = str.search(re);
var result2 = str.search(re2);

console.log(result); // 4
console.log(result2); // -1
```


### replace method
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

This method does not change the String object it is called on. It simply returns a new string.

**Syntax**

```str.replace(regexp|substr, newSubstr|function)```

#### Parameters
```regexp (pattern)```
A RegExp object or literal. The match or matches are replaced with newSubStr or the value returned by the specified function.

```substr (pattern)```
A String that is to be replaced by newSubStr. It is treated as a verbatim string and is not interpreted as a regular expression. Only the first occurrence will be replaced.

```newSubStr (replacement)```
The String that replaces the substring specified by the specified regexp or substr parameter. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.

```function (replacement)```
A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr

#### Return value
A new string with some or all matches of a pattern replaced by a replacement.

#### Specifying a string as a parameter
The replacement string can include the following special replacement patterns:

| Pattern | Inserts |
| --------- | --------- |
| $$ | Inserts a "$". |
| $& |  Inserts the matched substring. |
| $` |  Inserts the portion of the string that precedes the matched substring. |
| $' |  Inserts the portion of the string that follows the matched substring. |
| $n |  Where n is a positive integer less than 100, inserts the nth parenthesized submatch string, provided the first argument was a RegExp object. Note that this is 1-indexed. |

**Example**

In the following example, the regular expression is defined in replace() and includes the ignore case flag.
```javascript
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...
```

**Using global and ignore with replace()**

Global replace can only be done with a regular expression. In the following example, the regular expression includes the global and ignore case flags which permits replace() to replace each occurrence of 'apples' in the string with 'oranges'.

```javascript
var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.
```
**Switching words in a string**

The following script switches the words in the string. For the replacement text, the script uses the $1 and $2 replacement patterns.

```
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John
```


## Regular expression flags

| Flag | Description |
| ------ | --------------- |
| g | Global search. | 
| i | Case-insensitive search. | 
| m | Multi-line search. | 
| u | unicode; treat pattern as a sequence of unicode code points | 
| y | Perform a "sticky" search that matches starting at the current position in the target string. | 

See, [Javascript info Regexp](https://javascript.info/regular-expressions)
[MDN Javascript Regexp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
[W3schools Regexp](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)
