// // Example A
// // `this` refers to `window` because function binds to its context
// // name is undefined

// const person = {
//   name: 'Bob',
//   skills: ['HTML', 'CSS', 'JavaScript'],

//   showSkills() {
//     // console.log(`'this' is ${this}`);
//     this.skills.forEach(function (skill) {
//     //   console.log(`'this' is ${this}`);
//       console.log(`${this.name} is skilled in ${skill}`);
//     });
//   },
// };

// person.showSkills();

// =============================
// // Example B
// // `this` refers to the object from which the arrow function 
// // is defined (person) because it doesn't create a new context
// // name is defined as 'Bob'

const person = {
  name: 'Bob',
  skills: ['HTML', 'CSS', 'JavaScript'],

  showSkills() {
    console.log(`'this' is ${this}`);
    this.skills.forEach(skill => {
    //   console.log(`'this' is ${this}`);
      console.log(`${this.name} is skilled in ${skill}`);
    });
  },
};

person.showSkills();

// =============================
// // Example C
// // Do NOT write object methods as arrow functions
// // Uncaught TypeError: Cannot read properties of 
// // undefined (reading 'forEach')

// // When inside an object, the `this` keyword refers to 
// // the current object only when you declare the method 
// // using the standard syntax ->
// // methodName() or methodName: function(){ })

// // When you declare an object method using the arrow function,
// // the `this` keyword refers to the global object, and the 
// // skills property is undefined there. Never use the arrow 
// // function when declaring a method.

// const person = {
//   name: 'Bob',
//   skills: ['HTML', 'CSS', 'JavaScript'],

//   showSkills: () => {
//     this.skills.forEach(skill => {
//       console.log(`${this.name} is skilled in ${skill}`);
//     });
//   },
// };

// person.showSkills();