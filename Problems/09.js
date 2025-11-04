// Question 9: The Non-Enumerable Property
// Problem: You are storing a user object and need to add a "secret" property. This property must be accessible (user.secretKey), but it must not show up in Object.keys() or be included in JSON.stringify() outputs.

const user = {
  username: "dave",
  level: 5,
//   secretKey:123
};

// user.secretKey = 123;


Object.defineProperty(user, "secretKey", {
    value:3,
    enumerable: false,
});

console.log(JSON.stringify(user))
console.log(Object.keys(user))

for(key of Object.keys(user)){
    console.log(key);
}
console.log(user.secretKey);
console.log(user);