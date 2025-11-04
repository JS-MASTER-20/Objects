// Question 7: The "Shallow" Freeze Pitfall
// Problem: You freeze a user object, but that object contains a nested object.

// Task:

    // An attempt is made to change the user's name: user.name = "Bob";

    // An attempt is made to change a nested permission: user.permissions.canWrite = true;

    // Question: What is the final state of the user object? Which change was successful (if any) and why?


"use strict";

const user = {
  name: "Alice",
  permissions: {
    canRead: true,
    canWrite: false
  }
};

Object.freeze(user);

user.name = "Alice"

user.permissions.canWrite = true;

console.log(user);