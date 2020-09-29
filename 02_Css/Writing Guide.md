# Css Guide

#### Workflow
* Organize your CSS-styles, using flags.
````
/* ------------------------*/ /* ---------->>> GLOBAL <<<-----------*/ /* ------------------------*/

```

####  Organize your CSS-styles, ordering properties alphabetically. 
```
body {
   background: #fdfdfd;
   color: #333;
   font-size: 1em;
   line-height: 1.4;
   margin: 0;
   padding: 0;
}
```
####  Use CSS Constants for faster development
```
/*
   # Dark grey (text): #333333
   # Dark Blue (headings, links) #000066
   # Mid Blue (header) #333399
   # Light blue (top navigation) #CCCCFF
   # Mid grey: #666666 #
*/
````
####  General Styling
```
line-height:1.6em

//You can display text in small-caps automatically
h1 { font-variant: small-caps; }
```
* Add borders to identify containers.
```
* { border: 1px solid #f00; }
```

#### Technical Tips: IDs, Classes

* Class and id names can only consist of the characters [A-Za-z0-9] and hyphen (-), and they cannot start with a hyphen or a digit

* Element names in selectors are case sensitive, When CSS is used with XHTML, element names in selectors are case sensitive.


#### Use the power of selectors

* A child selector targets an immediate child of a certain element
```
div > strong { color:#f00; }
```
* You can use adjacent sibling selectors. 
```
p + p { color:#f00; }
```
*  Attribute selectors : match elements based on the presence or value of attributes. There are four ways for an attribute selector to match:

```
[att] Matches elements that have an att attribute, regardless of its value.
[att=val] Matches elements that have an att attribute with a value of exactly “val”.
[att~=val] Matches elements whose att attribute value is a space-separated list that contains “val”. In this case “val” cannot contain spaces.
[att|=val] Matches elements whose att attribute value is a hyphen-separated list that begins with “val”. The main use for this is to match language subcodes specified by the lang attribute (xml:lang in XHTML), e.g. “en”, “en-us”, “en-gb”, etc.
```
	* The selector in the following rule matches all p elements that have a title attribute, regardless of which value it has:
```
p[title] { color:#f00; }
```



