// A deep copy creates a completely independent duplicate of an object. This means that if you change a nested property in the new copy, the original object is not affected.

// (This is different from a shallow copy, using {...obj} or Object.assign(), which only copies the top-level properties. Nested objects are still shared, so changing them in the copy will change the original.)

// 1. structuredClone() (The Modern Way)
// This is the new, built-in standard for deep copying. It's fast, reliable, and designed specifically for this task.

    const original = {
        name: "Alex",
        joined: new Date("2023-01-01"),
        pets: ["cat", "dog"],
        address: {
            city: "New York"
        }
    };

    const copy = structuredClone(original);

    // --- Modify the copy ---
    copy.address.city = "London";
    copy.pets.push("fish");

    // --- Check the original (it's unchanged) ---
    console.log(original.address.city); // Output: "New York"
    console.log(original.pets);         // Output: ["cat", "dog"]