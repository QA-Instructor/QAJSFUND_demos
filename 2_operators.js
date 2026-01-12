let x = 0;
x = x + 1; //x is now 1
x += 1; //x is now 2
x++; //x is now 3
console.log(x);
x = x**2; //x is now 9
console.log(x);

// short-circuiting

let isAdmin = false;
let password = "secret";
if (isAdmin && password == "hidden"){
    console.log("Let Admin in");
}
else{
    console.log("You are not the Administrator!");
}
console.log(password);

let count = 1;
console.log(`count is: ` + count);
// isAdmin = true;
password = "hidden";
if (isAdmin && count++ && password == "hidden"){
    console.log("Let Admin in");
}
else{
    console.log("You are not the Administrator!");
}
console.log(`count is: ` + count);

// type checking
let a = 2;
let b = "two";
let c = "2";

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // string

console.log(a * a); //  4 - multiplication
console.log(a + b); //  2two - concatenation
console.log(a * c); //  4 - multiplication: JS can interpret numbers in strings as numbers

console.log(typeof (a * a)); //  number
console.log(typeof (a + b)); //  string - concatenation
console.log(typeof (a * c)); //  number

console.log(a + c); // 22 - concat (strings)
console.log(a + parseInt(c)); // 4 - addition (numbers)

//  Quick exercise
let h = 2;
let i = "2";
let j = (h == i); //true

let k = (i === j); // false

// strict equality
// == equality operator
// === strict equality operator
// JS coerces the types when using equality op
// JS compares value and type when using strict equality op
let l = true, m = 1;
console.log(l == m); // true
console.log(l === m); // false
console.log(l != m); // false
console.log(l !== m); // true

// type conversion
// parseInt()
let s = "5";
let t = 5;
let total = t + parseInt(s); //returns 10 not 55
console.log(total);

// isNan function
console.log("Is 's' a number: " + isNaN(s));
console.log("Is 's' NOT a number: " + !isNaN(s));

// eval - do NOT use - evil
let xx = 10;
let yy = 20;
let text = "xx * yy";
let result = eval(text);
console.log(result);

// security risk due to code injection
// use code or a function instead
let xxx = 10;
let yyy = 20;
let result2 = xxx * yyy;
console.log(result2);