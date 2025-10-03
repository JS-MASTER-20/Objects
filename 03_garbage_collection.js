// ============================================================
// Garbage Collection — Easy Notes + Single-Console Demo
// ============================================================
//
// THEORY (Easy Explanation):
//
// • In JavaScript, memory cleanup (Garbage Collection) happens automatically.
//   Matlab humein manually memory free karne ki zarurat nahi hai.
//
// • Main concept hai REACHABILITY (pahunch).
//   Agar koi value root se reachable hai to wo memory me rahegi.
//   Root kya hai?
//      (a) Function ke andar ke local variables aur parameters
//      (b) Current call stack (jo abhi chal raha hai)
//      (c) Global variables
//      (d) Kuch internal values jo engine handle karta hai
//
// • Agar kisi object tak root se koi bhi rasta (reference) nahi bachta,
//   to wo unreachable ho jata hai aur Garbage Collector usko delete kar deta hai.
//
// • Ek object ko multiple variables reference kar sakte hain.
//   Agar ek variable se reference hata do, to bhi object memory me rahega
//   jab tak koi aur variable usko point kar raha ho.
//
// • Kabhi-kabhi objects ek dusre ko reference karte hain (island ban jata hai).
//   Agar pura island root se connected nahi hai, to pura island delete ho jayega.
//
// • Garbage Collector ek process use karta hai called "mark-and-sweep":
//   - Pehle roots se start karke sab reachable objects ko mark karta hai.
//   - Fir jo marked nahi hai (unreachable) unko memory se hata deta hai.
//
// • Modern JS engines speed ke liye kuch optimizations karte hain:
//   - Generational: naye objects alag, purane alag; naye zyada frequently check hote hain
//   - Incremental: ek hi baar me saara kaam na karke chhote steps me clean karte hain
//   - Idle-time: mostly jab CPU free ho tab GC run hota hai, taki slow feel na ho
//
// • IMPORTANT: Humein JavaScript me Garbage Collector ko force karne ka option nahi milta.
//   Wo apne hisaab se hi chalega.
//

//
// ============================================================
// 1) Reachability basics (simple example)
// ============================================================

let user = { name: "John" };           // Global reference -> reachable
console.log("1) user at start:", user);

user = null;                           // Lose the only reference
console.log("1) user set to null -> the {name:'John'} object is now unreachable (eligible for GC).");

// ============================================================
// 2) Two references to the same object
// ============================================================

let u1 = { name: "John" };
let admin = u1;                        // Copy the REFERENCE (not the object)
console.log("2) admin before:", admin.name); // "John"

u1 = null;                             // Drop one reference, object still reachable via 'admin'
console.log("2) u1 = null; still reachable via admin:", admin.name); // "John"

admin = null;                          // Drop the last reference
console.log("2) admin = null; no references left -> object becomes GC-eligible.");

// ============================================================
// 3) Interlinked objects (INCOMING refs matter, not outgoing)
// ============================================================

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;
  return { father: man, mother: woman };
}

let family = marry({ name: "John" }, { name: "Ann" });
console.log("3) family created:", family);
// Structure (conceptually):
// global -> family
// family.father -> John
// family.mother -> Ann
// John.wife -> Ann
// Ann.husband -> John

// Remove two links so John has NO incoming references from roots
delete family.father;                  // remove family -> John
delete family.mother.husband;          // remove Ann -> John
console.log("3) after deletes, family:", family);
console.log("3) John now has no incoming refs from any root -> eligible for GC.");
console.log("3) Ann is still reachable via family.mother:", family.mother);

// ============================================================
// 4) Unreachable island (whole subgraph becomes collectible)
// ============================================================

family = marry({ name: "John" }, { name: "Ann" });
console.log("4) fresh family island:", family);

family = null;                         // Remove the only root link to the island
console.log("4) family = null -> entire island (father/mother + cross-links) is unreachable -> GC-eligible.");

// ============================================================

// 7) Final Summary (comments only)
// ============================================================
//
// • GC is automatic; you cannot force or prevent it from standard JS.
// • Objects remain in memory while REACHABLE from a ROOT.
// • Being referenced ≠ being reachable from a root; an entire interlinked island can be collected
//   if no root points to it.
// • Engines use mark-and-sweep (with optimizations like generational, incremental, idle-time).
//
// ✅ End of notes + demo (all logs use console.log only).
