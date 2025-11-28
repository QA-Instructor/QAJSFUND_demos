// RegEx
console.log("REGEX......");

let re = new RegExp("ab+c");
let quickRe = /ab+c/g; // add i before g to make it case insensitive

let string = "xyz ABC abc aaaaBcc cccabbbca aabbbbc";
let isMatch = quickRe.test(string);

console.log(`Is there a match? ${isMatch}`);
let matches = quickRe.exec(string);


console.log(`Matched text is: ${matches[0]}`);
console.log(`Substring matches: ${matches[1]}`);
console.log(`Input string: ${matches.input}`);

// Match one 'd' followed by one or more b's followed by one 'd'
// Remember matched b's and the following d
// Ignore case
let exampleB = /d(b+)(d)/ig;
let matchesB = exampleB.exec("cdbBdbsbz");

console.log(`Matched text is: ${matchesB[0]}`); // dbBd
console.log(`Substring matches: ${matchesB[1]}`); //bB
console.log(`Substring matches: ${matchesB[2]}`); //d
console.log(`Input string: ${matchesB.input}`);


let str = 'my little string'; // s means whitespace
console.log(str.split(/\s/)); //"my, little, string"

let someString = 'Hello, World'; 
someString = someString.replace(/World/, 'Universe'); 
console.log(someString); // "Hello, Universe" 

let jeff = 'JeffreyWay'; 
// alert(name.match(/e/g)); // alerts "e,e"
let jeffResult = jeff.match(/e/g); // look for 'e' globally
console.log(jeffResult);

