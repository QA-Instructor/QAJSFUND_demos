// Arrays

//  Creating arrays
let a = Array(); // no data
let b = Array(10); // 10 element array of 'undefined'
let c = Array(`Tom`, `Dick`, `Harry`); // 3 element array of strings
let d = [1, 2, 3]; // short-hand: 3 element array of numbers

// Accessing arrays
let classroom = Array(5);
classroom[0] = "Rod";
classroom[1] = "Jane";
classroom[2] = "Freddy";

classroom[4] = "Bungle";

for (let index = 0; index < classroom.length; index++) {
    const element = classroom[index];
    console.log(element);
}

// array methods
// reverse
console.log("REVERSE an array...");

classroom.reverse();
for (let i = 0; i < classroom.length; i++) {
    console.log(classroom[i]);
}

// join: creates a string
console.log("JOIN...");
let rainbowCast = classroom.join(`, `);
console.log(rainbowCast);

// sort: sort alphabetically as a string if no sort function is provided
console.log("SORT...");
classroom.sort();
// console.log(classroom);
for (let i = 0; i < classroom.length; i++) {
    console.log(classroom[i]);
}

// console.log("SORT with a sort function...");
// classroom.sort((a , b) => a.length - b.length);
// // console.log(classroom);
// for (let i = 0; i < classroom.length; i++) {
//     console.log(classroom[i]);
// }

console.log("ADD name to existing element...");
classroom[4] = "George";
for (let i = 0; i < classroom.length; i++) {
    console.log(classroom[i]);
}

console.log("PUSH a new element...");
console.log(`Current array length is ${classroom.length}`);

let newLength = classroom.push("Zippy");
console.log(`New array length is ${newLength}`);

for (let i = 0; i < classroom.length; i++) {
    console.log(classroom[i]);
}

console.log("POP an element...");
let removedItem = classroom.pop();
console.log(`Item removed is ${removedItem}`);

console.log("UNSHIFT an element...");
let length = classroom.unshift("Geoffrey");
console.log(`Array length is ${length}`);

for (let i = 0; i < classroom.length; i++) {
    console.log(classroom[i]);
}

console.log("SHIFT an element...");
let shiftedItem = classroom.shift();
console.log(`Item removed is ${shiftedItem}`);

console.log("CREATE an element with Array.from()...");
let nums = "1234ABC";
let numbers = Array.from(nums);
console.log(numbers);

console.log("FIND an element...");
let foundItem = classroom.find((item)=> item=="Rod");
console.log(`Item found is ${foundItem}`);

console.log("FIND an element's index...");
let foundIndex = classroom.findIndex((item)=> item=="Jane");
console.log(`Item found is at position ${foundIndex}`);

console.log("FILL an array..."); // fill overrides the specified elements
let filledArray = numbers.fill('8', 4, 7); // start at position 4 and upto but not including position 7
console.log(filledArray);

console.log("INCLUDE to check an item exists in an array...");
let isFreddyInClass = classroom.includes("Freddy");
isFreddyInClass ? console.log("Freddy is in class") : console.log("Freddy is absent");

// alterntaive ternary syntax
console.log(isFreddyInClass ? "Freddy is in class" : "Freddy is absent");

// extra loop types
console.log("FOR...OF LOOP...");
for (item of classroom){
    if (item === "Jane"){
        break;
    }
    console.log(item);
    
}

console.log("FOR EACH LOOP with an arrow function...");
let classroomUpper = [];
classroom.forEach(n => classroomUpper.push(n.toUpperCase()));
console.log(classroomUpper);


console.log("FOR EACH LOOP with separate function...");
let classroomUpper2 = [];
classroom.forEach(turnUpperCase);
console.log(classroomUpper2);

// use a separate function if you want mutliple lines of code
function turnUpperCase(name){
    classroomUpper2.push(name.toUpperCase());
    classroomUpper2.sort();
}