// define a function
function outputMessage(message){
    console.log(`LOG: The outputMessage function is running`);
    console.log(`LOG: ${message}`); 
}

// call a function
// outputMessage(`Hello World!`); 
// outputMessage(`Bonjour le Monde!`);

function sayHelloToSomeone(name) {
    alert(`Hi there ${name}!`);
}

// sayHelloToSomeone("Alice");
// sayHelloToSomeone("Bob");

function returnAGreetingToSomeone(name) {
    return `Hi there ${name}!`
}


// let greetingA = returnAGreetingToSomeone("Charlie");
// let greetingB = returnAGreetingToSomeone("Devon");

// console.log(greetingA);
// console.log(greetingB.toUpperCase());

// Arrow function examples
const noArgFnImpRet = () => `Hello World`;		// returns `Hello World` when called

const noArgFnCodeBlk = () => { console.log("Some implementation code with return if required");
    console.log("More code statements can follow");
    console.log("Maybe this should be a regular named function instead of an arrow function");
 };	

const sglArgFn = arg => { console.log(arg); } 	// outputs value of arg
												
const multiArgFn = (num1, num2) => ( num1 * num2 ); // returns value when called	

// call arrow functions
let arrowA = noArgFnImpRet();
console.log(arrowA);

noArgFnCodeBlk();

sglArgFn(`Hey!`);

let arrowB = multiArgFn(2, 5);
console.log(arrowB);

// Default values
function add(arg1, arg2, arg3=5) {
    return(arg1 + arg2 + arg3);
}

console.log(add(1, 2, 3)); // 6
console.log(add(2, 4)); // 11

// rest parameters
// the rest / spread property (...) enables the destructuring of an array

let arrayA = ["one", "two"];
let arrayB = ["three", "four"];
let arrayC = [...arrayA, ...arrayB, "five"];
console.log(arrayC);


function mutiply(arg1, ...args){
    let multipliedNums = [];
    args.forEach(a => multipliedNums.push(a * arg1));
    return multipliedNums;
}

console.log(mutiply(5, 1, 2, 5, 10));

// Function SCOPE
// Example 1
// function testGlobal(){
//    flag = true;

//    alert(flag);
//    test1();
//    alert(flag);
// }

// function test1() 
// {
//    flag = false; // scope from here changes global variable in testGlobal function
//    return
// }

// testGlobal();
// =======================

// Example 2

// function testLet(){
//    flag = true;

//    alert(flag);
//    test2();
//    alert(flag);
// }

// function test2() 
// {
//    let flag = false; // scope from here does NOT change variable in testGlobal function
//    return
// }

// testLet();

// ================================

// scope 2

// // Example 3
// Exlpocotly defined at global level

// let flag = true;

// function testGlobal3() {
//    alert(flag);
//    test3();
//    alert(flag);
// }

// function test3() 
// {
//    flag = false;
//    return
// }

// testGlobal3();

// ===========================

// Example 4

function testGlobal4() {
    let flag = true;

    alert(flag);
    test4();
    alert(flag); // this sees the locally scoped variable
}

// see Global and Local scope settings in Debugger in Chrome
function test4() 
{
   flag = false;// this is seen as a different global variable it is shadowed by the local 
   // varibale inside testGlobal4 function
   return
}

testGlobal4();