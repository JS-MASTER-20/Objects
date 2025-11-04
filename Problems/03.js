// Question 3: Data Loss with JSON.stringify
// Problem: You need to send a report object to a server. The server only accepts JSON strings. The object contains several different data types.

const report = {
  id: 123,
  timestamp: new Date(), // This is a Date object
  run: function() { console.log("running"); }, // This is a function
  user: "admin",
  level: undefined // This property has an 'undefined' value
};

let data = JSON.stringify(report,null,2);
console.log(data);