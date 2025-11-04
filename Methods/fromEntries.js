// Object.fromEntries(iterable)
// What it does: The opposite of Object.entries(). It takes an iterable of [key, value] pairs (like an array or a Map) and transforms it into a new object.

// From an array
const entries = [ ["name", "Alex"], ["age", 30] ];
const obj = Object.fromEntries(entries);
console.log(obj); // Output: { name: "Alex", age: 30 }

// From a Map
const map = new Map();
map.set("id", 123);
map.set("status", "pending");

const objFromMap = Object.fromEntries(map);
console.log(objFromMap); // Output: { id: 123, status: "pending" }