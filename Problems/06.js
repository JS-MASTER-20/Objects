// Question 6: The Rules of Object.freeze
// Problem: You are given a userRoles object. You freeze it to make it completely read-only.

// Task: Predict the outcome of the following three operations. Will they work or will they throw an error?

    // userRoles.guest = 3; // (Try to change a value)

    // userRoles.moderator = 4; // (Try to add a new property)

    // delete userRoles.admin; // (Try to delete a property)

    // Question: Which of the three operations will be successful, and which will fail?


"use strict"; // Use strict mode to see errors

const userRoles = {
  admin: 1,
  guest: 2
};

Object.freeze(userRoles);

// userRoles.guest = 3; //(X)
// userRoles.moderator = 4; //(X)
// delete userRoles.admin; //(X)