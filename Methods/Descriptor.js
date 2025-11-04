// These are advanced methods for fine-grained control over object properties.

// Object.defineProperty(obj, prop, descriptor)
// What it does: Defines a new property or modifies an existing property on an object. It allows you to control its attributes (the "descriptor").

// Descriptor Attributes:

    // value: The value of the property.

    // writable: true if the value can be changed.

    // enumerable: true if the property shows up in loops (Object.keys, for...in).

    // configurable: true if the property can be deleted or its attributes can be changed.

// ...............................................
// const user = {};

// Object.defineProperty(user, "id", {
//   value: 101,
//   writable: false,     // cannot be changed
//   enumerable: true,    // will show up in Object.keys
//   configurable: false  // cannot be deleted
// });

// console.log(user.id); // Output: 101
// console.log(Object.keys(user)); // Output: ["id"]

// user.id = 102; // Fails silently (or throws TypeError in strict mode)
// console.log(user.id); // Output: 101

// "use strict"

let obj = {
  id: 1,
  name: "Ishwar",
}

Object.defineProperty(obj, "id", {
    value: 22,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(obj);

delete obj.id;

console.log(obj);

console.log(Object.getOwnPropertyDescriptor(obj,"id"))