// ============================================================
// Object References & Copying — Notes + Single-Console Demo
// (Paste whole script in Browser DevTools Console or run with Node)
// ============================================================
// Short Theory (cheatsheet):
// • Primitives copy by VALUE (independent). Objects copy by REFERENCE (same target).
// • Copying an object variable copies the reference (address), not the object itself.
// • Object equality compares references (same object?) — not structure.
// • const on objects: you can change properties; you cannot reassign the binding.
// • Shallow clone: Object.assign({}, obj) — nested objects are shared.
// • Deep clone: structuredClone(obj) — copies nested structures; supports circular refs; functions are NOT cloned.
// ============================================================

'use strict';

// ------------------------------------------------------------
// 1) Primitives vs Objects — copy behavior
// ------------------------------------------------------------
// Primitives -> independent copies
let message = "Hello!";
let phrase = message;       // value copy
phrase = "Hi!";             // change the copy only
console.log("message:", message); // "Hello!"
console.log("phrase:", phrase);   // "Hi!"

// Objects -> reference copy
let user = { name: "John" };
let admin = user;           // reference copy (both point to same object)
admin.name = "Pete";        // mutate via one reference
console.log("user.name:", user.name);   // "Pete" (changed)
console.log("admin.name:", admin.name); // "Pete"

// ------------------------------------------------------------
// 2) Comparison by reference
// ------------------------------------------------------------
let a = {};
let b = a; // same reference
console.log("a == b:", a == b);     // true
console.log("a === b:", a === b);   // true

let c = {};
let d = {}; // different objects
console.log("c == d:", c == d);     // false
console.log("c === d:", c === d);   // false

// (Rare; usually a mistake) object compared to primitive triggers conversion:
let objToPrim = {};
console.log("objToPrim == 5:", objToPrim == 5); // false

// ------------------------------------------------------------
// 3) const objects can be modified (but not re-assigned)
// ------------------------------------------------------------
const constUser = { name: "John" };
constUser.name = "Pete";             // ✅ allowed (property mutation)
console.log("constUser.name:", constUser.name); // "Pete"

try {
  // ❌ not allowed (rebinding the const variable)
  // @ts-ignore
  constUser = { name: "Ann" };
} catch (e) {
  console.log("Reassigning constUser -> ERROR:", e.message);
}

// ------------------------------------------------------------
// 4) Cloning & Merging — Object.assign (shallow)
// ------------------------------------------------------------
// Manual shallow clone with a loop:
let source = { name: "John", age: 30 };
let clone1 = {};
for (let key in source) {
  clone1[key] = source[key];
}
clone1.name = "Pete"; // modify clone only
console.log("source.name:", source.name); // "John"
console.log("clone1.name:", clone1.name); // "Pete"

// Merge multiple objects into a target:
let baseUser = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
Object.assign(baseUser, permissions1, permissions2);
console.log("merged baseUser:", baseUser); // { name: "John", canView: true, canEdit: true }

// Overwrite existing keys:
Object.assign(baseUser, { name: "Pete" });
console.log("baseUser.name (overwritten):", baseUser.name); // "Pete"

// Shallow clone with assign:
let clone2 = Object.assign({}, baseUser);
console.log("clone2:", clone2);

// NOTE: Another shallow-clone method exists: spread syntax {...obj} (covered later).

// ------------------------------------------------------------
// 5) Nested cloning pitfall (shallow copy shares inner objects)
// ------------------------------------------------------------
let userWithNesting = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let shallowClone = Object.assign({}, userWithNesting);
console.log("shared nested?",
  userWithNesting.sizes === shallowClone.sizes); // true (same nested reference)

// Change nested via clone:
shallowClone.sizes.width = 60;
console.log("userWithNesting.sizes.width:", userWithNesting.sizes.width); // 60 (changed!)

// ------------------------------------------------------------
// 6) Deep cloning with structuredClone
// ------------------------------------------------------------
if (typeof structuredClone === "function") {
  let deepOriginal = {
    name: "John",
    sizes: { height: 182, width: 50 }
  };
  let deepClone = structuredClone(deepOriginal);
  console.log("deep nested same ref?",
    deepOriginal.sizes === deepClone.sizes); // false (independent)

  // Change original nested
  deepOriginal.sizes.width = 60;
  console.log("deepClone.sizes.width (should stay 50):", deepClone.sizes.width); // 50

  // Circular references supported:
  let loop = {};
  loop.me = loop;
  let loopCopy = structuredClone(loop);
  console.log("loopCopy.me === loopCopy:", loopCopy.me === loopCopy); // true

  // Functions are NOT supported:
  try {
    structuredClone({ f: function() {} });
  } catch (e) {
    console.log("structuredClone with function -> ERROR:", e.name || "Error", "-", e.message);
  }
} else {
  console.log("ℹ️ structuredClone is not available in this environment; deep clone demo skipped.");
}

// ------------------------------------------------------------
// 7) Summary (comment-only quick reference)
// ------------------------------------------------------------
// • Objects copy by REFERENCE; primitives by VALUE.
// • Equality checks compare references (same object?) not structure.
// • const object: mutate properties ✔️; reassign binding ❌.
// • Object.assign({}, obj) -> SHALLOW clone (nested refs shared).
// • structuredClone(obj) -> DEEP clone (nested structures & circular refs), no functions.
// • For advanced cases, libraries like lodash offer _.cloneDeep (not shown here).

console.log("✅ Done: Object references & copying — all concepts demoed.");
