//! Implement array in javascript
//? Using the JavaScript Keyword new
// const cars2 = new Array("Saab", "Volvo", "BMW");
// console.log(cars2);
// must use second array

//? create an array
const fruits = ["Apple", "Banana", "Orange"];

//? access array item
console.log(fruits[0]);

//! add item in array
//? add item in the last position
fruits.push("Jackfruit");
console.log(fruits);

//? insert item front of the array
fruits.unshift("fruit1");
console.log(fruits);

//! remove item from the array
//? remove last item
fruits.pop();
console.log(fruits);

//? remove first item
fruits.shift();
console.log(fruits);

//! Array Properties and Methods
console.log(cars.length);
console.log(cars.sort());