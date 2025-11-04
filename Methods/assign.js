// Copy / Merge
// These are used to create new objects by copying or combining properties from other objects.

// Important: Both methods perform a shallow copy. This means if a property's value is another object or an array, only the reference to that object is copied, not the object itself. Modifying the nested object will affect both the original and the copy.

// Object.assign(target, ...sources)
     // What it does: Copies all enumerable own properties from one or more source objects to a target object. It modifies and returns the target object.

    const defaults = { theme: "light", layout: "grid" };
    const userPrefs = { theme: "dark", showAds: false };

    // Merges userPrefs into defaults.
    // Properties in userPrefs will overwrite those in defaults.
    const finalSettings = Object.assign(defaults, userPrefs);

    console.log(finalSettings); // Output: { theme: "dark", layout: "grid", showAds: false }
    console.log(defaults);      // Output: { theme: "dark", layout: "grid", showAds: false } (target is modified)

//--------------------------------------------------

// Spread Syntax ({...obj})
    // What it does: A modern, more concise syntax for copying or merging objects. It "spreads" the key-value pairs from one object into a new one.

    const original = { a: 1, b: 2 };
    const copy = { ...original }; // This is the preferred way to make a shallow copy

    copy.a = 5;
    console.log(copy.a);     // Output: 5
    console.log(original.a); // Output: 1

    