// Get Element by Class
function printValue(){
  var name=document.form1.name.value;
  alert("Welcome " + name)
}

// Single element selector
// const form1=(document.getElementbyId());

// Query Selector - returns first element that matches else returns null
console.log(document.querySelector('script'));

// Multiple Element Selector
console.log(document.getElementsByTagName('li')); // lists elements based on HTML tag
console.log(document.getElementsByClassName('items')); // lists elements based on HTML class 
const items = document.querySelectorAll('.items'); // must include dot
items.forEach((item1)=>console.log(item1));

// Manipulating DOM
const ul = document.querySelector(".items");
//ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.remove();
ul.children[0].innerHTML = 'Sam'
ul.children[1].innerHTML = 'Johnny'
ul.lastElementChild.innerHTML = '<h1> Helo </h2>';