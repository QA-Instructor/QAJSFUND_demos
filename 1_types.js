// variables and typeof
console.log("VARIABLES & TYPEOF");

const TYPE_TEST = "string value";
// alert(typeof TYPE_TEST);
console.log(typeof TYPE_TEST);

// alert(typeof 95);
console.log(typeof 95);

// a non-initialised variable
console.log("A non-initialised variable is seen as 'undefined'");
let age;
console.log(age);
console.log(typeof age);

// a non-declared variable
console.log("A non-declared variable is seen as 'undefined'");
console.log(typeof thing);

// nulls
console.log("NULLS");
console.log("Use a 'null' to tell the runtime the variable is 'empty'");
let userID = null;
console.log(userID); //returns null

console.log("Be careful:  a 'null' and 'undefined' evaluate the same if using '=='");
let productID = null;
console.log(productID == undefined); //returns true

console.log("However:  a 'null' and 'undefined' evaluate different if using '==='");
console.log(productID === undefined); //returns false

// booleans
console.log("BOOLEANS");
let loggedOn = false;
console.log(loggedOn); //returns false
console.log(!loggedOn); //invert using ! returns true

console.log(loggedOn == 1); //returns false
console.log(loggedOn == 0); //returns true

console.log(loggedOn === 0); //=== returns false

// numbers
console.log("NUMBERS");

let x = 3.14;    // A number with decimals
console.log("x is: " + x);
let y = 3;       // A number without decimals
console.log("y is: " + y);

console.log("NaN is a JavaScript reserved word indicating that a number is not a legal number.")
let z = 10 / "Bob";
console.log("z is: " + z);

// infinity is a value outside the largest possible number
let a =  2 / 0;
let b = -2 / 0;

console.log("a is: " + a + " and b is: " + b);

let c = Number.POSITIVE_INFINITY;
console.log(c);

let d = Number.MAX_VALUE;
console.log(d);

let e = Number.MAX_SAFE_INTEGER;
console.log(e);

let f = Number.MIN_VALUE;
console.log(f);

// strings
console.log("STRINGS");
console.log("Strings can use double or single quotes or backticks");
let text1 = "A string in double quotes";
let text2 = 'A string in single quotes';
let text3 = `A string in back ticks`;

console.log(text1);
console.log(text2);
console.log(text3);

// escape characters
let alright= 'It\'s alright - escape character.';
console.log(alright);

// could be done as follows:
let alright2 = "It\'s alright - double quotes.";
console.log(alright2);

let alright3 = `It\'s alright - back ticks.`;
console.log(alright3);

// concatenation
let str1 = "5 + 3 = ";
let value = 5 + 3;
let str2 = str1 + value
console.log(str2); // 5 + 3 = 8

// interpolation - uses back ticks (templates) and ${expression}
let str3 = `5 + 3 = ${5 + 3}`;
console.log(str3); // 5 + 3 = 8

// string functions
console.log(alright.length);

let str = "Hello world, welcome to the universe.";
let n = str.indexOf("welcome"); 
console.log(`Position of "welcome" is: ${n}`);

console.log(str.toUpperCase());
console.log(str); // original str is unchanged

console.log(str.charAt(6));
console.log(str.charAt(0));