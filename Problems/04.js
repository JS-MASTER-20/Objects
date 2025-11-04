// Question 4: The JSON.parse Roundtrip
// Problem: This is a very common (but flawed) way to deep copy. You will analyze the result.

// Task:

// A new object eventCopy is created by running JSON.parse(JSON.stringify(event)).

// Question: What is the data type of eventCopy.date? Is it a Date object or a string?

// checking type of date
let n  = new Date();
console.log(typeof n)

// deep copy of a object
const event = {
  name: "Meeting",
  // Note: This is a Date object
  date: new Date("2025-12-01T10:00:00Z") 
};

let eventCopy = JSON.parse(JSON.stringify(event));
// console.log(eventCopy);
eventCopy.name = "k hal"
console.log(eventCopy);
console.log(event);