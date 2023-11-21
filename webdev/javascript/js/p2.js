// Functions (regular, traditional arrow)
// 1. Regular Functions (declaration, expression)
// 2. Arrow Functions

// Function Declaration - makes functions global
// 1st example
function sum1(num1, num2){
  console.log(num1+num2)
}
sum1(20, 30);
// 2nd example
console.log(sum2());
function sum2(num3=20, num4=30){
  return num3+num4;
}
// 3rd example
console.log(sum3(20, 50));
function sum3(num5, num6){
  return num5+num6;
}

// Function Expression - limited availability, local
const getArea=function(width, height){
  return width * height;
}
console.log(getArea(23, 20));

// hoisting - moving declarations to the top
const bar=true; // always declare all variables at the beginning of every scope
console.log(bar);

// Arrow functions
const sum4=(num7, num8) => num7+num8;
console.log(sum4(20, 50));

// ------------------------------------------- 

// Object Creation

// Constructor vs Object Literals
// 4 methods to create an obj.

// 1. Object Literal 

let person1={
  name: "Joe",
  age: 23,
  func: function(){
    console.log("hello")
  }
}
let person2={
  name: "Jack",
  age: 26,
  func: function(){
    console.log("hello")
  }
}
console.log(person1.name)

// 2. New Operator or Constructor
// must be Capitalized 

// Creating a Template
function Customer(fn, ln, bday, favcolor, phoneno, job, active){
  this.fn=fn; // reassigning
  this.ln=ln; // reassigning
  // Defining built in javascript constructors as rules
  this.bday=new Date(bday); // reassigning
  this.favcolor=new String(favcolor); // reassigning
  this.phoneno=new Number(phoneno); // reassigning
  this.job=new Object(job); // reassigning
  this.active=new Boolean(active); // reassigning
}
// Defining multiple objects
const customer1 = new Customer("Jane", "Doe", "01/02/2001")
console.log(customer1);
const customer2 = new Customer("Kim", "Glenn", "12/04/1994")
console.log(customer2);
// adding method 
customer1.greet=function(){
  console.log("good day");
}
customer1.greet();

// 3. Object.create

// JavaScript Object Prototype - can add properties or create functions
Customer.prototype.status="Married";
console.log(customer1.status);
Customer.prototype.status="Single";
console.log(customer2.status);

Customer.prototype.getFullName=function(){
  return `${this.fn} ${this.ln}`
}
console.log(customer1.getFullName());

// 4. Class (components - class expressions, class declarations)

// Class Declaration

class ClassDec{
  constructor(param1, param2){
    this.param1=param1;
    this.param2=param2;
  }
}
const j = new ClassDec(5, 10);
console.log(j);

// Class Expression

let ClassExp = class{
  constructor(parama, paramb){
    this.parama=parama;
    this.paramb=paramb;
  }
}
const w = new ClassExp(3,4);
console.log(w);

// Class Inheritance using extends

// Parent
class Laptop{
  constructor(cpu, gpu, ram){
    this.cpu=cpu;
    this.gpu=gpu;
    this.ram=ram;
  }
  laptopMethod(){
    console.log("Laptop");
  }
}

// Child 
class PersonalComputer extends Laptop{
  constructor(cpu, gpu, ram, pccase){
    super(cpu, gpu, ram) // inherit this attributes from parent
    this.pccase=pccase;
  }
  computerMethod(){
    console.log("Computer");
  }
}

// ----------------------------------------------------

// Document Object Model (DOM)
// interface that represents how HTML is read by a browser
// allows JavaScript to manipulate the structure or style of an HTML
// helps in creating dynamic content inside a wepage








