// Immutability
// These methods prevent modifications to an object, but they are also shallow. They only affect the object's direct properties, not nested objects.

// Object.freeze(obj)
// What it does: The strictest option. It freezes an object.

    // You cannot add new properties.

    // You cannot delete existing properties.

    // You cannot change the values of existing properties.

    // You cannot change the property's configuration (writable, enumerable, configurable).


"use strict"; // Use strict mode to see errors
const obj = { a: 1 };

Object.freeze(obj);

// obj.a = 2; // Throws TypeError in strict mode
// obj.b = 3; // Throws TypeError in strict mode
// delete obj.a; // Throws TypeError in strict mode

console.log(obj.a); // Output: 1 (remains unchanged)