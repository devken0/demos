// Variables (var, let, and const)

// Syntax
// variable(declaration = initalization);

// var - Global 
var num;
num = 5;
num = 20;
console.log(num);

var age = 23;
age = 60;
var newAge = age;
console.log(age);
var message = "newage" + age;
console.log(message);

// iife - immediately invoked function expressions
(function(){
    var p=5; // p is not accessible globally
})();

// let and const <-- most recommended, block level scope, more restrictive
let num1;
num1 = 5; // not accessible globally 
const num2 = 20; // not accessible globally

// Data Types

// 1. Primitive
const studname = "John"; // strings
const studage = 20; // numbers
const grade = 90.7; // recognized as number in JS, no integers or floating values
const isB = true; // boolean
const nu = null; //absence of value, empty
const un = undefined;  
console.log(studname, studage, grade, isB, nu, un);
// typeof operator - used to check data types
console.log(typeof studname, studage, grade, isB, nu, un);

// * Primitive data types do not have methods
{
    let myName = "Ana";
    myName=myName.toUpperCase(); // variable must be reassigned 
    console.log(myName);
}

// 2. Objects

// 2a. Creating objects using object literal
let person = {
    // Members of the object 
    fname:"John",
    lname:"Doe",
    loc:"Manila",
    year:3,
    hello:function(){
        console.log("Hello world");
    }
}
console.log(person.hello()); // can invoke the function inside the object person

// 2b. Creating objects using Object.create
var user=Object.create(null);
typeof(user);
user.email="john@mail.com"
console.log(user);

// 2c. Object instances
let now = new Date(); // variable now has inherited the function of the Date() object.
console.log(now);
let username = new String ("John");
console.log(username);

// Conditional Statements 

// Example: 
const x=5;

if (x==5){
    console.log("high five!");
}else{
    console.log("eh");
}

// Terniary Operator
const voterAge = 10;
voterAge < 15 ? console.log("you're underage"):console.log("you are qualified");

// Loops

// for
for(let i=0; i<5; i++){
    console.log(i);
}

// while
let i = 1;
while (i<2){
    console.log(i);
    i++;
}

// String Manipulation

// 1. String Literal 
const food = "pizza";
const food2 = "pasta";
let string1 = "My favorite food is " + food + " and " + food2; 
console.log(string1);

// ES6 fix
let string2 = `My favorite is ${food} and ${food2}`;
console.log(string2);

// 2. String Object Using New Keyword / Operator
var stringName = new String("Ken");
console.log(stringName);

// Converting a number to a string
const a=20 + ""; // converts 20 to a string 
console.log(typeof a); 

// Using methods/functions on strings
let testname = "John";
console.log (testname.substring(0,2)); // outputs only the characters from index 0 - 2
console.log (testname.toUpperCase()); // transforms the string to uppercase
console.log (testname.substring(0,2).toUpperCase()); // transforms only the characters from index 0-2 to uppercase
console.log(testname.split('')); // outputs the array set of characters 
const s = 'web, application, technology';
console.log(s.split('')); // another array output example

// Arrays

// 1. Array Literal 
var methodA=[];
const arr=["one", "two", "three", "four"];
console.log(arr);
console.log(arr[2]); // display value at index 2
arr[4]="five"; // adding a value to the array at the fourth index
console.log(arr);
arr.push("six"); // appending a value  
console.log(arr);
arr.shift(); // moving the values to the left one index 
console.log(arr);
arr.unshift("ONE"); // appends a value from the left 
console.log(arr);
arr.pop(); // deletes the last item 
console.log(arr);
console.log(arr.indexOf("two")); // returns the value's index placement 
console.log(arr.indexOf("Hello")); // returns -1 if value doesn't exist

// 2. Arrays directly invoked using new keyword
var testnum = new Array();
testnum[0] = 1;
testnum[1] = 2; 
testnum[2] = 3; 
for(i=0; i<testnum.length; i++){
    console.log(testnum[i]);
}

// Functions

// 1. Traditional 
let no1 = 100;
let no2 = 200;

function sum(no1, no2){
    return no1+no2;
}
console.log(sum(no1, no2));

// 2. ES6 declaration 
const getSum=(a, b) =>{
    return a+b;
}
console.log(getSum(5,10))

// 3. Arrow functions shortcut
const total= v => v + 100;
console.log(total(140));
