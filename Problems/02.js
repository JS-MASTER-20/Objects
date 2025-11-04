// Question 2: The Deep Copy (structuredClone)
// Problem: You are given the same user object as in the previous problem. This time, you must create a true, independent copy.

const user = {
  id: 1,
  preferences: {
    theme: "dark"
  }
};

let clonedUser = structuredClone(user);
clonedUser.preferences.theme = "light";
console.log(user)
console.log(clonedUser)