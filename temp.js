// I am ishwar verma
// // console.log("objects"); 
// // Q1:  Create an object {name, email, age} and rename the key "name" full-name

// // q2: Take two object and combione both  without using spread  or Object assign.

// // q3:   Take two object and combine both  without using spread  or Object assign. but if key alread exists and multiple vaklue sin array. 

// // let obj1 = {
// //     a: [10,11], 
// //     b:20,
// //     c: [30,34],
// //     d: 20
// // }

// // let obj2 = {
// //     a: 11, 
// //     d:20,
// //     c: 34
// // }

// // q4:Take an object and check if a particular key exists or not. 

// // q5: take an object and check if a particular value exists or not. 

// // Take a nested object and print all its values (nested upto one level)

// // let obj = {
// //     a: 10 ,
// //     b: 20 ,
// //     c: {
// //         x: 10, 
// //         y: 20
// //     }
// // }

// // let obj1 = {
// //     a: 10, 
// //     b: 20, 
// //     x: 10 ,
// //     y: 20,
// // }


// // Q6: 

// // let user = {
// //     name: {
// //         first:  "Abhi",
// //         last: "kumar"
// //     },
// //     address: {
// //         city: "Noida",
// //         house: 56
// //     },
// //     favourite: {
// //         books: {
// //             fiction: "Harry pooter"
// //         }
// //     }
// // }

// // // console.log(user.name.first)

// // hello(user, "name", "first")



// // q7: .    Group Objects by Property
// // const students = [
// //   {name: "John", grade: "A"},
// //   {name: "Jane", grade: "B"},
// //   {name: "Bob", grade: "A"},
// //   {name: "Alice", grade: "B"}
// // ];
// // Group students by grade
// // Result: {A: ["John", "Bob"], B: ["Jane", "Alice"]}


// // q3 

// // let obj1 = {
// //     a: 10, 
// //     b:20,
// //     c: 30,
// //     e: 333,
// //     d: 20
// // }

// // let obj2 = {
// //     a: 11, 
// //     d:20,
// //     c: 34
// // }

// // for(let o in obj1){
// //     if(o in obj2){
// //         let v1 = obj1[o]
// //         let v2 = obj2[o]
// //         // console.log(v1,v2);
// //     // }
// //         obj2[o] = [v1,v2] 
// //     }
// //     else{
// //         obj2[o]=obj1[o]
// //     }
// // }

// // console.log(obj2);

// // question 5

// let obj = {
//     a: 10 ,
//     b: 20 ,
//     c: {
//         x: 10, 
//         y: 20
//     }
// }

// let obj1 = {
//     a: 10, 
//     b: 20, 
//     x: 10 ,
//     y: 20,
// }

// function f(user, name, first){
//     if(user==undefined){
//         // return;
//     }else{
//         for(let i in user){
//             if(user[])
//         }
//     }

//     //  else if(user.name==undefined){
//     //     // return;
//     // }else if(user.name.first==undefined){
//     //     // return;
//     // }else{
//     //     console.log(user.name.first);
//     // }
// }

// f(obj);




            let user5 = {
                34: true,
                23: "ss",
                "%32": "34",
                for: 333,
            };

            console.log(user5.for)

            // set
            user5["likes birds"] = true;

            // get
            console.log(user5["likes birds"]); // true

            // delete
            delete user5["likes birds"];