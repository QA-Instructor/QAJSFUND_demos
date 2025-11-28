// create an object
const student = new Object();
student["name"] = "Caroline";
student["id"] = 1234;
student["courseCode"] = "QAJSFUND";
student["courseTitle"] = "Web Development Fundamentals - JavaScript";

// expando properties
student.email = "caroline@somewhere.com";

console.log("CONSOLE LOG....");
console.log(student);

console.log("CONSOLE DIR....");
console.dir(student);

console.log(student.email);
console.log(student["email"]);

// `for in loop` is used to enumerate over property names of an object
for (let key in student) {
    console.log(`${key}:${student[key]}`);
}

// literal notation for creating objects
let student2 = { name: "David", id: 1235, courseCode: "QAJSFUND" };

// an array of object literals
let classroom = [
    { name: "David", id: 1235, courseCode: "QAJSFUND" },
    { name: "Caroline", id: 1234, courseCode: "QAJSFUND" }
]

// use a `for of` loop to iterate the array
for (attendee of classroom){
    console.log(attendee);
}

// use a `for of` loop to iterate the array to fetch their name
for (attendee of classroom){
    console.log(attendee.name);
}

console.log("QUICK EXERCISE A....");

for (let i = 0; i < classroom.length; i++) {
    for (let key in classroom[i]) {
        console.log(`\t${key} : ${classroom[i][key]}`);
    }
}

// my solution
console.log("QUICK EXERCISE B....");

for (let attendee of classroom){
    for (let key in attendee)    {
        console.log(`\t${key}: ${attendee[key]}`);
    }
}

// Enhanced object literals
let power = 200;

let myCar = {
    power
}

console.log(myCar);

let yourCar = {
    // properties
    make : 'Ford',
    model : 'Focus',
    speed : 0,
    power,
    // method
    // use `this` to disambiguate between props and variables with the same name
    accelerate() { this.speed = this.power / 2 },
    // can call `super` class
    toString() { return `Car: ${super.toString()}`},
    // toString() { return `Car: ${this.make} ${this.model} is travelling at speed: ${this.speed}`}
} 

console.log("TO STRING().........")
console.log(yourCar);
console.log(yourCar.toString()); // comment / uncomment lines 80 + 81


console.log("DYNAMIC PROPERTY NAMES.........")
// dynamic property names
// Use variables or expressions as object keys instead of hard-coding them
// useful when working with data from APIs or when creating flexible data structures


const dynamicKey = 'age';
const person = {
  name: 'Alice',
  [dynamicKey]: 30  // Dynamic property name
};

console.log(person); // Output: { name: 'Alice', age: 30 }

// You can use any expression inside the square brackets, including template literals for more 
// complex key generation:
const prefix = 'user';
const id = 42;
const user = {
  [`${prefix}_${id}`]: 'John Doe'
};

console.log(user);  // Output: { user_42: 'John Doe' }

let horsePower = 200;
n = 0;

let theirCar = {
    horsePower,
    ["prop_" + ++n]: n
};

console.log(theirCar);  // Output: { horsePower:200, prop_1: 1}


console.log("OBJECT.ASSIGN().........")
let obj1 = {a: 1};
let obj2 = {b: 2};
let obj3 = {c: 3};

// Object.assign(target, source1, source2, sourcen)
Object.assign(obj1,obj2,obj3);

console.dir(obj1); //{a: 1, b: 2, c: 3}
console.log(obj1); //{a: 1, b: 2, c: 3}

// copy one object into another
// example 1
let obj4 = {a: 1};
let obj5 = Object.assign({},obj4);
console.log(obj5);

// example 2
let product = {name: 'widget'};
let productDetails = {price: 9.99, weight: 150};
let completeProduct = Object.assign({}, product, productDetails);

console.log(completeProduct);

// everything is an object
console.log("WRAPPERS.........")
// JavaScript has wrapper objects because early in its design, primitives needed methods, but primitives
// themselves are not objects.
// Wrapper objects (Number, String, Boolean, Symbol, BigInt) are special built-in object types that 
// give primitives access to methods and properties.

console.log("hello".toUpperCase());  // → "HELLO"
console.log((42).toFixed(2));        // → "42.00"
console.log(true.toString());        // → "true"


let x = 5;
const y = new Number(5);

console.log(x);
console.log(y);

// JS temporarily boxes objects
console.log(x.toFixed(2));
console.log(y.toFixed(2));


console.log("abc".toUpperCase());
// JavaScript does this behind the scenes:
// Takes the primitive "abc"
// Wraps it in a temporary String object
// (new String("abc"))
// Calls .toUpperCase() on the object
// Discards the object
// Returns the result

// This is called autoboxing.
// You never see the object — it’s implicit.

// We could define functions as wrappers also - but don't
let doStuff = new Function('alert("stuff was done")');
// call function
// doStuff();

// It is slow, unsafe and problematic for scope.
// It is sometimes used by libraries or frameworks.

console.log("DESTRUCTURING Arrays.........")
// Destructuring provides a convenient way to extract data from objects and arrays

let first, second, third;
[first, second, third] = ["I","Love","JavaScript"];

console.log(first);  // I
console.log(second); // Love
console.log(third);  // JavaScript

// default values
let [a, b=7] = [5];

console.log(a); // 5
console.log(b); // 7

console.log("DESTRUCTURING Objects.........")

// property names and variable names must match
let myObject = {condimentA: "Salt", condimentB: "Pepper"};
let {condimentA, condimentB} = myObject;

console.log(condimentA); // "Salt"
console.log(condimentB); // "Pepper"

// or variables can be renamed
let myObject2 = {first: "Salt", second: "Pepper", third: "Mustard"};

let {first: condiment1, second: condiment2, third: condiment3} = myObject2;

console.log(condiment1); //"Salt"
console.log(condiment2); //"Pepper"
console.log(condiment3); //"Mustard"

// Default values
// Example 1
let sauces = {item1: "Ketchup"};
let {item1="Mayonnaise", item2="Brown Sauce"} = sauces;


console.log(item1); // "Ketchup"
console.log(item2); // "Brown Sauce"

// Example 2
let sauces2 = {}; // empty object
let {item3="Mayonnaise", item4="Brown Sauce"} = sauces2;

console.log(item3); // "Mayonnaise"
console.log(item4); // "Brown Sauce"

// Be careful with braces
// let i, j;
let {i, j} = {i: 5, j: 7}; 		//syntax good
console.log(`i is: ${i} and j is: ${j}`);

// if variables declared separately
let k, m;
// {k, m} = {k: 5, m: 7}; 		//syntax error
// the braces on the left-hand side denote a vlock so the `=` is unexpected without the `let` keyword

({k, m} = {k: 9, m: 2}); 	// Solution: put brackets around entire block - syntax okay!

console.log(`k is: ${k} and m is: ${m}`);
