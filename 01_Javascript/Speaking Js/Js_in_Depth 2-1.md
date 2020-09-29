## JavaScript in Depth

JavaScript’s syntax is fairly straightforward.

### An Overview of the Syntax
The following are five fundamental kinds of values:

* Booleans:
```
true
false
```
* Numbers:
```
1023
7.851
```
* Strings:
```
'hello'
"hello"
```
* Plain objects:
```
{
firstName: 'Jane',
lastName: 'Doe'
```
}
* Arrays:
```
[ 'apple', 'banana', 'cherry' ]
```

#### Note the two different uses of the equals sign:
* A single equals sign (=) is used to assign a value to a variable.
* A triple equals sign (===) is used to compare two values

#### Comments
There are two kinds of comments:
* Single-line comments via // extend to the rest of the line. Here’s an example:
```
var a = 0; // init
```
Multiline comments via /* */ can extend over arbitrary ranges of text. They cannot
be nested. Here are two examples: 
/* temporarily disabled
processNext(queue);
*/

#### Expressions Versus Statements
An expression produces a value and can be written wherever a value is expected—for
example, as an argument in a function call or at the right side of an assignment. Each
of the following lines contains an expression:
```
myvar
3 + x
myfunc('a', 'b')
```
#### Statements
* Roughly, a statement performs an action. Loops and if statements are examples of
statements. A program is basically a sequence of statements.
* Wherever JavaScript expects a statement, you can also write an expression. Such a
statement is called an expression statement. The reverse does not hold:

##### Conditional statement versus conditional expressions

* The difference between statements and expressions becomes clearer if we look at members
of the two syntactic categories that are similar: the if statement and the conditional
operator (an expression).

* The following is an example of an if statement:
```
var salutation;
if (male) {
salutation = 'Mr.';
} else {
salutation = 'Mrs.';
}
```
* There is a similar kind of expression, the conditional operator. The preceding statements
are equivalent to the following code:
``` var salutation = (male ? 'Mr.' : 'Mrs.'); ```

* The code between the equals sign and the semicolon is an expression. The parentheses
are not necessary, but I find the conditional operator easier to read if I put it in parens.

##### Using ambiguous expressions as statements
- Two kinds of expressions look like statements—they are ambiguous with regard to their
syntactic category:
	- To keep things simple, I’m pretending that declarations are statements.
- Object literals (expressions) look like blocks (statements):
```
{
foo: bar(3, 5)
}
```
* Named function expressions look like function declarations (statements):
``` function foo() { } ``` 
* The preceding construct is either a named function expression or a function declaration.

####  Evaluating an object literal via eval()
* eval parses its argument in statement context. You have to put parentheses around an
object literal if you want eval to return an object:
```
> eval('{ foo: 123 }')
123
> eval('({ foo: 123 })')
{ foo: 123 }
``` 

#### Immediately invoking a function expression
* a function whose body is executed right away
``` (function () {return 'abc' })(); ```
* If you add a name, you also get a syntax error, because function declarations can’t be
immediately invoked:
```
> function foo() { return 'abc' }()
SyntaxError: Unexpected token )
``` 

#### Control Flow Statements and Blocks
* For control flow statements, the body is a single statement. Here are two examples:
```
if (obj !== null) obj.foo();
while (x > 0) x--;
``` 
* However, any statement can always be replaced by a block, curly braces containing zero
or more statements. Thus, you can also write:
``` 
if (obj !== null) {
obj.foo();
}
while (x > 0) {
x--;
}
``` 
I prefer the latter form of control flow statement. Standardizing on it means that there
is no difference between single-statement bodies and multistatement bodies. As a consequence,
your code looks more consistent.


#### Rules for Using Semicolons
* Normally, statements are terminated by semicolons.
* The exception is statements ending with blocks.


Semicolons are optional in JavaScript. Missing semicolons are added via so-called automatic
semicolon insertion. However, that feature doesn’t always work as expected, which is why you should always
include semicolons.

#### No Semicolon After a Statement Ending with a Block
The following statements are not terminated by semicolons if they end with a block: 

* Loops: for, while (but not do-while
* Branching: if, switch, try
* Function declarations (but not function expressions)

Here’s an example of while versus do-while:
```
while (a > 0) {
a--;
} // no semicolon
do {
a--;
} while (a > 0);
```

And here’s an example of a function declaration versus a function expression. The latter
is followed by a semicolon, because it appears inside a var declaration (which is terminated
by a semicolon):
* Function Declaration 
```
function foo() {
// ...
} // no semicolon
```
* Function Expression
```
var foo = function () {
// ...
};
```
**If you do add a semicolon after a block, you do not get a syntax error, because it is considered an empty statement.**

#### The Empty Statement
A semicolon on its own is an empty statement and does nothing. Empty statements can appear anywhere a statement is expected. They are useful in situations where a statement is demanded, but not needed. In such situations, blocks are usually also allowed. For example, the following two statements are equivalent
```
while (processNextItem() > 0);
while (processNextItem() > 0) {}
``` 
The function processNextItem is assumed to return the number of remaining items.
The following program, consisting of three empty statements, is also syntactically
correct:
```
;;;
```

#### Automatic Semicolon Insertion
The goal of automatic semicolon insertion (ASI) is to make semicolons optional at the
end of a line. The image invoked by the term automatic semicolon insertion is that the
JavaScript parser inserts semicolons for you (internally, things are usually handled
differently).

Put another way, ASI helps the parser to determine when a statement ends. Normally,
it ends with a semicolon. ASI dictates that a statement also ends if:

* A line terminator (e.g., a newline) is followed by an illegal token.
	- Example: ASI via illegal token
The following code contains a line terminator followed by an illegal token:
```
if (a < 0) a = 0
console.log(a)
```
The token console is illegal after 0 and triggers ASI:
```
if (a < 0) a = 0;
console.log(a);
```
* A closing brace is encountered.
	-Example: ASI via closing brace
In the following code, the statement inside the braces is not terminated by a semicolon:
``` function add(a,b) { return a+b } ```
ASI creates a syntactically correct version of the preceding code:
``` function add(a,b) { return a+b; } ```

**Pitfall: ASI can unexpectedly break up statements**
ASI is also triggered if there is a line terminator after the keyword return. For example:
// Don't do this
```
return
{
name: 'John'
};
```
ASI turns the preceding into:
```
return;
{
name: 'John'
};

```
That’s an empty return, followed by a block with the label name in front of the expression
statement 'John'. After the block, there is an empty statement.

#### Legal Identifiers
Identifiers are used for naming things and appear in various syntactic roles in JavaScript.
For example, the names of variables and unquoted property keys must be valid identifiers.
Identifiers are case sensitive.

The first character of an identifier is one of:
* Any Unicode letter, including Latin letters such as D, Greek letters such as λ, and Cyrillic letters such as Д
* Dollar sign ($)
* Underscore (_)

Examples of legal identifiers:
```
var ε = 0.0001;
var строка = '';
var _tmp;
var $foo2;
```
Even though this enables you to use a variety of human languages in JavaScript code, I
recommend sticking with English, for both identifiers and comments.

The following identifiers are reserved words—they are part of the syntax and can’t be
used as variable names (including function names and parameter names):

1 |  2 | 3 | 4
-- | -- | -- | --
arguments | break | case | catch
class | const | continue |  debugger
default | delete | do | else
enum | export | extends | false
finally | for | function | if
implements | import | in | instanceof
interface | let | new | null
package | private | protected | public
return | static | super | switch
this | throw | true | try
typeof | var | void | while

The following three identifiers are not reserved words, but you should treat them as if they were:
* Infinity
* NaN
* undefined

#### Invoking Methods on Number Literals

With method invocations, it is important to distinguish between the floating-point dot
and the method invocation dot. Thus, you cannot write 1.toString(); you must use
one of the following alternatives:

1..toString()
1 .toString() // space before dot
(1).toString()
1.0.toString()

#### Strict Mode

ECMAScript 5 has a strict mode that results in cleaner JavaScript, with fewer unsafe
features, more warnings, and more logical behavior. The normal (nonstrict) mode is
sometimes called “sloppy mode.”

##### Switching on Strict Mode
You switch strict mode on by typing the following line first in your JavaScript file or
inside your <script> element:
``` 'use strict'; ```
You can also switch on strict mode per function. To do so, write your function like this:
```
function foo() {
'use strict';
...
}
````
This is handy when you are working with a legacy code base where switching on strict
mode everywhere may break things.

#### Strict Mode: Recommended, with Caveats
* Enabling strict mode for existing code may break it
The code may rely on a feature that is not available anymore, or it may rely on
behavior that is different in sloppy mode than in strict mode. Don’t forget that you
have the option to add single strict mode functions to files that are in sloppy mode.
* Package with care
When you concatenate and/or minify files, you have to be careful that strict mode
isn’t switched off where it should be switched on or vice versa. Both can break code.

##### Variables Must Be Declared in Strict Mode

All variables must be explicitly declared in strict mode. This helps to prevent typos. In
sloppy mode, assigning to an undeclared variable creates a global variable:
```
function sloppyFunc() {
sloppyVar = 123;
}
sloppyFunc(); // creates global variable `sloppyVar`
console.log(sloppyVar); // 123
```
In strict mode, assigning to an undeclared variable throws an exception:
```
function strictFunc() {
'use strict';
strictVar = 123;
}
strictFunc(); // ReferenceError: strictVar is not defined
```

##### Functions in Strict Mode
Functions must be declared at the top level of a scope

In strict mode, all functions must be declared at the top level of a scope (global scope
or directly inside a function). That means that you can’t put a function declaration inside
a block. If you do, you get a descriptive SyntaxError. For example, V8 tells you: “In
strict mode code, functions can only be declared at top level or immediately within
another function”:

```
function strictFunc() {
	'use strict';
		{
		// SyntaxError:
		function nested() {
		}
	}
}
```

That is something that isn’t useful anyway, because the function is created in the scope
of the surrounding function, not “inside” the block.
If you want to work around this limitation, you can create a function inside a block via
a variable declaration and a function expression:

```
function strictFunc() {
	'use strict';
		{
		// OK:
		var nested = function () {
		};
	}
}
```

##### this is undefined in nonmethod functions
In sloppy mode, the value of this in nonmethod functions is the global object (window
in browsers
```
function sloppyFunc() {
`console.log(this === window); // true
}
```

In strict mode, it is undefined:
```
function strictFunc() {
	'use strict';
	console.log(this === undefined); // true
}
```

















































