// Example from slides:
// fetch('https://www.qa.com/courses.json')
//     .then(response => response.json())
//     .then(myJson => console.log(myJson))
//     .catch(err=> console.error(err))

// Working example:

// Making a fetch request can be as simple as 
// passing a URL and chaining appropriate .then 
// and .catch methods onto the return

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
    //   the json method returns a promise that resolves
    // with the response body parsed as JSON
      .then(json => console.log(json))
    //   in case of error
    .catch(error => console.log(error));

