// note relative path reference
// import {area} from "./circle-functions.js";

// import {area, circumference} from "./circle-functions.js";

// console.log(area(5)); // 78.53981633974483
// console.log(circumference(5));// 31.41592653589793

// when using the * you need to provide an identifier
import * as circle from "./circle-functions.js";

// calls prefixed with identifier
console.log(circle.area(5)); 

console.log(circle.circumference(5));

import * as circle2 from "./circle-functions-2.js";

console.log(`Export / Import many....`);
console.log(circle2.area(10));

// use default export
console.log("Default export......");

// use any meaningful name you like
import thing from "./circle-functions-2.js";
import circleThing from "./circle-functions-2.js";

console.log(thing);
console.log(circleThing);


