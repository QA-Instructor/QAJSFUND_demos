// Arrays
// deliberate array with an empty value to show
// difference between the for of loop and forEach
let classroom = Array(5);
classroom[0] = "Rod";
classroom[1] = "Jane";
classroom[2] = "Freddy";

classroom[4] = "Bungle";

// extra loop types
console.log("FOR...OF LOOP...");

// // without `let` item becomes a global variable
// for (item of classroom){
//     console.log(item);  
// }

// with `let` item becomes a local variable
for (let item of classroom){
    console.log(item);  
}

// This now stores an array of length 4 as the undefined item is ignored by the arrow function
// console.log("FOR EACH LOOP with an arrow function...");
// let classroomUpper = [];
// classroom.forEach(n => classroomUpper.push(n.toUpperCase()));
// console.log(classroomUpper);