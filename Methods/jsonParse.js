// JSON.parse(text)
// What it does: Parses a JSON string, converting it back into a JavaScript object. This is used to read data from an API or localStorage.

const jsonString = '{ "id": 1, "name": "Carly", "isActive": true }';

const userObject = JSON.parse(jsonString);

console.log(userObject.name); // Output: Carly
console.log(userObject.isActive); // Output: true