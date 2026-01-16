// RegEx
console.log("REGEX......");

// long-hand syntax
let re = new RegExp("ab+c");

// short-hand regex initialiser syntax
let quickRe = /ab+c/; // add i before g to make it case insensitive

let string = "xyz ABC abc aaaaBcc cccabbbca aabbbbc";
let isMatch = quickRe.test(string);

console.log(`Is there a match? ${isMatch}`);
let matches = quickRe.exec(string);

console.log(`Matched text is: ${matches[0]}`);
console.log(`Substring matches: ${matches[1]}`);
console.log(`Input string: ${matches.input}`);

// short-hand regex initialiser syntax
let quickReWithBrackets = /(ab+c)/; // add i before g to make it case insensitive

// let string = "xyz ABC abc aaaaBcc cccabbbca aabbbbc";
let isMatch2 = quickReWithBrackets.test(string);

console.log(`Is there a match? ${isMatch2}`);
let matches2 = quickReWithBrackets.exec(string);


console.log(`Matched text is: ${matches2[0]}`);
console.log(`Substring matches: ${matches2[1]}`);
console.log(`Input string: ${matches2.input}`);

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
console.log(str.split(/\s/)); // array of "my, little, string"

let strWithNumbers = 'h3llo 3v3ryon3'; // 3 instead of e
//remove 'g' to see replacement only affects first 'e'
let stringWithoutNumbers = strWithNumbers.replace(/3/g,'e');
console.log(stringWithoutNumbers); //"hello everyone"

let someString = 'Hello, World'; 
someString = someString.replace(/World/, 'Universe'); 
console.log(someString); // "Hello, Universe" 

let jeff = 'JeffreyWay'; 
// alert(name.match(/e/g)); // alerts "e,e"
// match return an array of the matches found
let jeffResult = jeff.match(/e/g); // look for 'e' globally
console.log(jeffResult);

