// Question 8: The Non-Writable Property
// Problem: You need to add an id property to a user object. This id must be permanent and cannot be changed once it's set.

"use strict";
const user = {
  id: 33,
  name: "Carlos"
};

Object.defineProperty(user, "id", {
    value: 101,
    writable: false,
})

// user.id = 445; // (X);

console.log(user);