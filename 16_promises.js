
// A Promise in JavaScript represents the eventual 
// completion (or failure) of an asynchronous operation 
// and its resulting value. 
// 
// A promise can be in one of three states: 
// Pending: The initial state, where the operation has not completed yet. 
// Fulfilled: The operation completed successfully. 
// Rejected: The operation failed

// When a Promise object is "fulfilled", the result is a 
// value.

// When a Promise object is "rejected", the result is an 
// error object.

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
    // create a promise that will call some other code
    // that may take a while
    // if all is good, pass this data to my resolve function
    // if something goes wrong, pass this error data to my reject function
  let x = 0;
// this would be the code we call that might resolve or reject
// some code (try to change x to any value other than 0)
x++;
  if (x == 0) {
    myResolve("Okey dokey");//"Okey dokey" is passed to the resolve function (line 41)
  } else {
    myReject("Ooops - Error!");//"Ooops - Error!" is passed to the reject function (line 42)
  }
});

// make the call

// myFunction().then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );

//// 'then': attaches callbacks for the resolution or rejection of the promise
myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);


// what happens if I don't define a callback for the rejected status
// myPromise.then(
//   function(value) {myDisplayer(value);}
// );

// The Fetch API is an interface for asynchronously calling network resources
// FETCH requests return PROMISES

