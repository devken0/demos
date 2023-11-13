// Functions (regular, arrow)
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

// hoisting
let bar=true;
console.log(bar);