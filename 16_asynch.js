// The keyword async before a function makes the 
// function return a promise

// An async function can contain an 'await' 
// expression which pauses the execution of the 
// async function until completion of the 
// Promise and then resumes


async function doThings() {
    await asyncFunc1();
    await asyncFunc2();
    await asyncFunc3();
    return "All done";
}

async function asyncFunc1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Async function 1');
            resolve();
        },3000);
    });
}

async function asyncFunc2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Async function 2');
            resolve();
            // reject("HELP!!!...I rejected");
        },2000);
    });
}

async function asyncFunc3() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Async function 3');
            resolve();
        },1000);
    });
}

// The console.log within then is to log out "All done"
doThings().then(console.log).catch(console.warn);

// doThings().then().catch(console.warn);
