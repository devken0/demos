# JavaScript - Modern JS with ES6

## Brief History

* 1995
  * May - developed under name *Mocha*.
  * Sept - original release as *LiveScript* .
  * Dec - Netscape Navigator 20 release and renamed *JavaScript*.
* Nov 1996 - Netscape submitted JS to Ecma International
* June 1997 - new language standard, *ECMAScript*.

*ECMAScript* - the standard
*JavaScript* - most popular implementation of ECMA

## ES_?

ES = ECMAScript

ES Editions

ES1: June 1997
ES2: June 1998
ES3: Dec 1999
ES4: Abandoned
ES5: Dec 2009
ES6/ES2015: June 2015
ES7/ES2016: June 2016
ES8/ES2017: June 2017
ES8/ES2018

## JavaScript

A multi-paradigm client-based programming language (runs on browser), now can be run as server using node.js that conforms on *ECMAScript*.

### Advantages

* programming language of browsers
* very in demand
* can build apps with React native
* can create pc apps using electron JS

## Chrome Browser Console

Developer console that shows information about current webpage, with a cmd line to execute JS expressions.

**Test debug** - output from code.

### Console Output

* Numbers are blue
* Strings are black
* **Tip:** use `clear()` to clear without refresh

`console.log();` - Prints elements in an HTML-like tree

Examples:

`console.log("Hello World");`
`console.dir(document/file);`
`console.table({first:"test",val:9});`
`console.error("Hello World")`

### Alert

`window.alert(message)` method displays an alert dialog

**TIP**: `alert(message);` is enough

### Syntax

Statement example -> `alert("hello");`

Function -> alert()
Message -> "hello"
End of statement -> ';'

## HTML JavaScript

```html
<script src="pathtojsfile"></script>
```

## Variables Let and Const

* Boolean data type
* Let
* Const
* Code block with condition

## Variable Types

`var` - function scoped, declares variable, optionally initializing to a value
`let` - block-scoped, local var, blocks of code indicated using {}
`const` - block-scoped, read-only constant, unchangable

```java
const foo = Object.freeze(foo); // prevents changing the properties
foo.bar = 3;
console.log(foo.bar); // 2
Object.seal(foo); // prevents changing the structure 
foo.baz = false; // TypeError
```
