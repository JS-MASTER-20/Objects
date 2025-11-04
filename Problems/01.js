// Question 1: The Shallow Copy (Object.assign)
// Problem: You have a user object that contains their preferences, which is a nested object. You try to create a backup of this object using Object.assign().

// const user = {
//   id: 1,
//   preferences: {
//     theme: "dark"
//   }
// };

// Task:

// Create a userBackup by copying user using Object.assign().

// A script then runs and updates the userBackup's theme: userBackup.preferences.theme = "light";

// Question: What is the value of user.preferences.theme after the task is completed?


const user = {
  id: 1,
  preferences: {
    theme: "dark"
  }
};


let userBackup = Object.assign({},user);
userBackup.preferences.theme="light"
console.log(userBackup)
console.log(user)