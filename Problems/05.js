// Question 5: The Rules of Object.seal
// Problem: You are given a config object. You seal it to prevent new properties from being added or old ones from being deleted, but you still want to be able to change existing values.
// Task: Predict the outcome of the following three operations. Will they work or will they throw an error?

    // config.port = 9000; // (Try to change a value) -> (ho jayee ga update)

    // config.user = "admin"; // (Try to add a new property) -> (X)

    // delete config.host; // (Try to delete a property) -> (X)

    // Question: Which of the three operations will be successful, and which will fail?
"use strict"; // Use strict mode to see errors

const config = {
  host: "localhost",
  port: 8080
};

Object.seal(config);

config.port = 33; //(ho jaye ga update)
// config.name = "Ishwar Verma"; //(X)
// delete config.port; // (X)
console.log(config);