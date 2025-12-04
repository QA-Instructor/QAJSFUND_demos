// The Fetch API is an interface for asynchronously calling network resources
// FETCH requests return PROMISES

// Example from slides:
// fetch('https://www.qa.com/courses.json')
//     .then(response => response.json())
//     .then(myJson => console.log(myJson))
//     .catch(err=> console.error(err))

// Working example:

// Making a fetch request can be as simple as 
// passing a URL and chaining appropriate .then 
// and .catch methods onto the return

// // Example A
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//     // the json method returns a promise that resolves
//     // with the response body parsed as JSON
//       .then(json => console.log(json))
//     //   in case of error
//     .catch(error => console.log(error));

// // Example B
// // add a test for 'ok' and look for a non-existant ToDo
fetch('https://jsonplaceholder.typicode.com/todos/2341')
      .then(response => {
        if (response.ok){
          console.log(response.json());
        }
        else{
          throw new Error(`ToDos: Data not found`);
        }
      } 
    )
    .catch(error => console.log(error.message));
