let pi = 3.14159;
console.log(pi.toFixed(2)); // 2 decimal places
console.log(pi.toFixed(10));// 10 decimal places
console.log(pi.toFixed(100)); // 100 decimal places
// console.log(pi.toFixed(1000)); //// 1000 decimal places -> RangeError

// bar++; // ReferenceError: bar is not defined

// console.log("Missing close bracket"; // SyntaxError

const foo ={};
console.log(typeof foo);
// foo.bar(); // TypeError: foo.bar is not a function

// Handling errors
try {
    let x = parseInt(prompt("Enter a number", ""));
    if (isNaN(x)) {
        let e = new Error();
        e.message = "That wasn't a number";
        throw e;
    }
    console.log(`Your number is: ${x}`)
}
catch (e) {
    console.log(`Something went wrong: ${e.message}`);
    // console.warn(e);
    // console.error(e);
    // console.trace(e);
}
finally {
    console.log("Finally block");
    
}

// console examples
// console.log(`LOG`);
// console.warn(`WARN`);
// console.error(`ERROR`);
// console.trace(`TRACE`);