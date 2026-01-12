// 'this' in JavaScript is a powerful feature. It allows changing the 
// context depending on the way a function is called. Frequently the 
// context is the target object on which invocation happens, making 
// the code more natural. It says like "something is happening with 
// this object".

// However, the arrow function binds the context statically on the 
// declaration and it is not possible to make it dynamic. 
// e.g. it is not lexical. It is not bound to the place where it is defined,
// such as the 'calculate' object

const calculate = {
  array: [1, 2, 3],
  sum: () => {
    console.log(`Inside the object's arrow function method`);
    console.log(`Is 'this' the 'window' object`);
    console.log(this === window); // => true
    console.log(`'this' gets rebound to the calling object \nso it is no longer the 'calculate' object \ntherefore no array exists.`);
    return this.array.reduce((result, item) => result + item);
  }
};

console.log(`THIS.......`);
console.log(`OUTSIDE - Is 'this' the 'window' object`);
console.log(this === window); // => true
// Throws "TypeError: Cannot read property 'reduce' of undefined"
// let answer = calculate.sum();
// console.log(answer);

// The solution is to use a `function expression` or shorthand syntax for
// method definition (available in ECMAScript 6). In such a case this 
// is determined by the invocation, but not by the enclosing context. 
const calculateFixed = {
  array: [1, 2, 3],
  sum() {
    console.log(`Inside the object's function expression method`);
    console.log(`Is 'this' the 'window' object`);
    console.log(this === window); // => true
    console.log(`'this' does NOT get rebound to the calling object \nso it is still the 'calculate' object \ntherefore the array does exist.`);
    return this.array.reduce((result, item) => result + item);
  }
};

console.log(`FIXED.......`);
console.log(`OUTSIDE - Is 'this' the 'window' object`);
console.log(this === window); // => true
// Does not throw an error
let answerFixed = calculateFixed.sum();

console.log(answerFixed);