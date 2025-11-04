// Object.seal(obj)
    // What it does: "Seals" an object. It's less strict than freeze.

    // You cannot add new properties.

    // You cannot delete existing properties.

    // You can change the values of existing properties.

"use strict";
const obj = { a: 1 };

Object.seal(obj);

obj.a = 2; // This is allowed!
// obj.b = 3; // Throws TypeError in strict mode
// delete obj.a; // Throws TypeError in strict mode

console.log(obj.a); // Output: 2