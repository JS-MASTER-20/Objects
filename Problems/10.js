// Question 10: Object.fromEntries
// Problem: You receive data as an array of [key, value] pairs. You need to convert this into a standard object.

// Task:

    // Use the correct Object method to transform dataArray into a new object.

    // Question: What is the one line of code to create the new object, and what does the final object look like?


const dataArray = [
  ['product', 'Laptop'],
  ['price', 1200],
  ['inStock', true]
];

let newObj = Object.fromEntries(dataArray);

console.log(newObj);

