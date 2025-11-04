// JSON.stringify(value, replacer, space)

// What it does: Converts a JavaScript object or value into a JSON string. This is essential for sending data to a server or storing it in localStorage.

// | Type              | Example                     | Effect                                  |
// | ----------------- | --------------------------- | --------------------------------------- |
// | Array Replacer    | `["id", "name"]`            | Sirf ye keys show karega                |
// | Function Replacer | `(key, value) => condition` | Conditional filtering ya transformation |

// Parameters:

// 1. value → wo object ya data jise JSON string me convert karna hai

// 2. replacer → optional, data ko filter/modify karne ke liye

// 3. space → optional, formatting (indentation) ke liye


// JSON.stringify(user, null, 2)

    // user → object to convert

    // null → means no replacer, yani object ke saare keys (except functions or symbols) include honge

    // 2 → means JSON ko pretty format me print karo, har nested level par 2 spaces ka indent do

//----------------------------------------------------------------
// ex:1

// const user = {
//     id: 1,
//     name: "Carly",
//     isActive: true,
//     sayHi: () => console.log("hi"), // Functions and Symbols are ignored!
//     age: 22
// };

// const jsonString = JSON.stringify(user, null, 2); // '2' adds nice formatting
// console.log(jsonString);
// Output:
// {
    //   "id": 1,
    //   "name": "Carly",
    //   "isActive": true
    // }
    
//----------------------------------------------------------------

// ex:2

// const user2 = {
//   id: 1,
//   name: "Carly",
//   isActive: true,
//   age: 22,
//   password: "12345"
// };

// // ✅ Filter only specific keys: "id" and "name"
// const jsonString2 = JSON.stringify(user2, ["id", "name"], 2);
// console.log(jsonString2);

// Output:

// {
//   "id": 1,
//   "name": "Carly"
// }

//------------------------------------------

// ex3: ⚙️ Another version (function-based replacer)

// Tum function bhi use kar sakte ho filtering ke liye 👇

const user3 = {
  id: 1,
  name: "Carly",
  isActive: true,
  age: 22,
  password: "12345"
};


const jsonString3 = JSON.stringify(user3, (key, value) => {
  if (key === "password") return undefined; // ignore password
  return value; // keep rest
}, 2);

console.log(jsonString3);