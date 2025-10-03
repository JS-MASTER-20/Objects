// Objects
   
   // In JavaScript, an object is a non-primitive data type that stores data as key-value pairs. 
  // It allows us to represent real-world entities by grouping related properties and methods together, making code more organized and reusable.

// ============================================================
// What this covers (based on your provided content):
// • What objects are; why they’re used
// • Creating objects (constructor vs literal)
// • Literals & properties (read / add / update / delete)
// • Multiword property names + trailing comma
// • Square brackets (string keys, variables/expressions as keys)
// • Computed properties in object literals
// • Property value shorthand (and mixing styles)
// • Property name rules & numeric-key coercion (+ __proto__ caveat)
// • Property existence test: undefined vs "in"
// • for..in loop over properties
// • Property order rules: integer-like keys sorted; others keep insertion order
// • Integer-property test explanation
// • Quick summary + mention of other object “kinds” (Array, Date, Error)
//
// NOTE: Browser-only features like `alert`/`prompt` in the original text
// are replaced here with `console.log` and direct variable values so that
// this script works in both Browser Consoles and Node.js.
// ============================================================

'use strict';

// ------------------------------------------------------------
// 0) Concept — Objects in JS
// ------------------------------------------------------------
// Objects store keyed collections of data (key–value pairs).
// Keys (a.k.a. property names) are strings or symbols; values can be any type.
// Think of an object as a “cabinet” with labeled folders (keys) holding values.
// ------------------------------------------------------------

// ------------------------------------------------------------
// 1) Creating Empty Objects (two syntaxes)
// ------------------------------------------------------------
console.log("\n=== 1) Creating Empty Objects ===");
let userA = new Object();   // "object constructor" syntax
let userB = {};             // "object literal" syntax
console.log("userA ->", userA);
console.log("userB ->", userB);

// ------------------------------------------------------------
// 2) Literals & Properties (read / add / update / delete)
// ------------------------------------------------------------
console.log("\n=== 2) Literals & Properties ===");
let userC = {               // an object literal
  name: "John",             // key "name" -> "John"
  age: 30                   // key "age"  -> 30
};

// Read properties (dot notation):
console.log("userC.name ->", userC.name); // "John"
console.log("userC.age  ->", userC.age);  // 30

// Add a boolean property:
userC.isAdmin = true;
console.log("added isAdmin ->", userC.isAdmin); // true

// Update a property:
userC.age = 31;
console.log("updated age ->", userC.age); // 31

// Delete a property:
delete userC.age;
console.log("after delete age ->", userC.age); // undefined
console.table(userC);

// ------------------------------------------------------------
// 3) Multiword Property Names + Trailing Comma
// ------------------------------------------------------------
console.log("\n=== 3) Multiword Property Names + Trailing Comma ===");
let userD = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword key must be quoted in literals
}; // trailing comma above is allowed
console.log('userD["likes birds"] ->', userD["likes birds"]); // true

// Trailing/hanging commas make it easier to add/remove/move properties
let userD2 = {
  name: "John",
  age: 30, // trailing comma is fine
};
console.table(userD2);

// ------------------------------------------------------------
// 4) Square Brackets — when keys aren't valid identifiers
// ------------------------------------------------------------
console.log("\n=== 4) Square Brackets (string/variable keys) ===");
// Dot notation DOESN'T work for multiword keys:
// ❌ userD.likes birds = true // (syntax error if attempted)

// ✅ Use square brackets for any string key:
let userE = {};
userE["likes birds"] = true;                  // set
console.log('userE["likes birds"] ->', userE["likes birds"]); // get
delete userE["likes birds"];                  // delete
console.log('"likes birds" after delete ->', userE["likes birds"]); // undefined

// You can take the key from a variable (computed at runtime):
let key1 = "favorite color";
userE[key1] = "blue";
console.log("userE[key1] ->", userE[key1]); // "blue"

// Compare with dot notation when using a variable:
let userF = { name: "John", age: 30 };
let key2 = "name";
console.log("userF[key2] ->", userF[key2]); // "John"
console.log("userF.key2  ->", userF.key2);  // undefined (dot uses literal "key2")

// ------------------------------------------------------------
// 5) Computed Properties in Object Literals
// ------------------------------------------------------------
console.log("\n=== 5) Computed Properties in Literals ===");
// In browsers, original examples used prompt(); here we simulate:
let fruit = "apple";

// Property name taken from variable:
let bagA = {
  [fruit]: 5, // becomes { apple: 5 }
};
console.table(bagA);

// More complex expressions also work:
let bagB = {
  [fruit + "Computers"]: 5, // becomes { appleComputers: 5 }
};
console.table(bagB);

// Equivalent (but more verbose) dynamic assignment:
let bagC = {};
bagC[fruit] = 5;
console.table(bagC);

// ------------------------------------------------------------
// 6) Property Value Shorthand (and mixing styles)
// ------------------------------------------------------------
console.log("\n=== 6) Property Value Shorthand ===");
// If variable name == property name, you can write just `name` instead of `name: name`.
{
  let name = "Mia";
  let age = 25;
  // Shorthand:
  let userG = { name, age, isAdmin: false };
  console.table(userG);

  // Mixing shorthand with normal properties:
  let userH = { name, age: 30 }; // 'age' here overrides the variable age (25)
  console.table(userH);
}

// Also common in factory functions:
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...other properties
  };
}
let userI = makeUser("John", 30);
console.log("makeUser ->", userI.name); // "John"

// ------------------------------------------------------------
// 7) Property Names — rules & numeric-key coercion
// ------------------------------------------------------------
console.log("\n=== 7) Property Names (rules & coercion) ===");
// Reserved words are allowed as property names:
let objA = { for: 1, let: 2, return: 3 };
console.log("objA.for + objA.let + objA.return ->", objA.for + objA.let + objA.return); // 6

// Numeric-like keys are converted to strings automatically:
let objB = { 0: "test" }; // same as "0": "test"
console.log('objB["0"] ->', objB["0"]); // "test"
console.log("objB[0]   ->", objB[0]);   // "test" (same property)

// __proto__ caveat: assigning a non-object is ignored; it stays an object prototype
let objC = {};
objC.__proto__ = 5; // attempt to assign primitive
console.log("typeof objC.__proto__ ->", typeof objC.__proto__); // "object"
console.log("objC.__proto__ === Object.prototype ->", objC.__proto__ === Object.prototype); // true

// ------------------------------------------------------------
// 8) Property Existence Test — undefined vs "in"
// ------------------------------------------------------------
console.log("\n=== 8) Property Existence: undefined vs 'in' ===");
let userJ = {};
console.log("userJ.noSuchProperty === undefined ->", userJ.noSuchProperty === undefined); // true

let userK = { name: "John", age: 30 };
console.log('"age" in userK  ->', "age" in userK);     // true
console.log('"blabla" in userK ->', "blabla" in userK); // false

// Using a variable on the left of `in`:
let key3 = "age";
console.log("key3 in userK ->", key3 in userK); // true

// Why `in` exists: it distinguishes existing-but-undefined from missing
let objD = { test: undefined };
console.log("objD.test ->", objD.test);       // undefined (value)
console.log('"test" in objD ->', "test" in objD); // true (key exists)

// Note: assigning undefined explicitly is rare; prefer null for “unknown/empty”.

// ------------------------------------------------------------
// 9) for..in — iterate over keys
// ------------------------------------------------------------
console.log("\n=== 9) for..in Loop ===");
let userL = { name: "John", age: 30, isAdmin: true };
for (let key in userL) {
  console.log("key:", key, "| value:", userL[key]);
}

// ------------------------------------------------------------
// 10) Property Order Rules
// ------------------------------------------------------------
console.log("\n=== 10) Property Order Rules ===");
// Integer-like property names iterate in ascending numeric order:
let codesA = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1":  "USA",
};
console.log("Integer-like keys (ascending):");
for (let code in codesA) console.log(code); // 1, 41, 44, 49

// Non-integer keys keep insertion order:
let codesB = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1":  "USA",
};
console.log("Non-integer keys (insertion order):");
for (let code in codesB) console.log(code); // +49, +41, +44, +1

// If you need “Germany (49)” first in iteration, “cheat” by making keys non-integer:
console.log("Reading numeric value back with unary +:");
for (let code in codesB) console.log(+code); // 49, 41, 44, 1

// ------------------------------------------------------------
// 11) What’s an “integer property name”?
// ------------------------------------------------------------
console.log("\n=== 11) Integer Property Name Test ===");
// A string key is “integer-like” if:  String(Math.trunc(Number(s))) === s
function isIntegerPropertyName(s) {
  return String(Math.trunc(Number(s))) === s;
}
console.log('"49"  ->', isIntegerPropertyName("49"));   // true
console.log('"+49" ->', isIntegerPropertyName("+49"));  // false
console.log('"1.2" ->', isIntegerPropertyName("1.2"));  // false

// ------------------------------------------------------------
// 12) Summary (comment-only quick reference)
// ------------------------------------------------------------
// • Objects store key–value pairs. Keys are strings/symbols; values can be any type.
// • Create: let o = {};  or  let o = new Object();
// • Read:  o.key   |   o["any string key"]
// • Write: o.key = v;  o["k"] = v;
// • Delete: delete o.key;
// • Existence: "key" in o  (distinguishes missing vs value === undefined)
// • Loop: for (let k in o) { ... } (enumerates enumerable own+inherited keys; for “own” only, use Object.keys/entries)
// • Ordering: integer-like keys sort ascending; other keys keep insertion order.
// • Shorthand: let name="A", age=1; let user={ name, age };
// • Computed: let k="x"; let obj={ [k]: 1 };
// • Property names: reserved words ok; numeric keys are coerced to strings; beware special __proto__.
// • Other object “kinds”: Array, Date, Error, etc. (still objects; they extend core Object in various ways).

console.log("\n✅ Done: All concepts from your provided content are covered with runnable examples.");
