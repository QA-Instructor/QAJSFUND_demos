// create objects using OBJECT LITERALS
// an object literal is a concise way to create an object

console.log("OBJECT LITERALS.................");

const myBike = new Object(); // using new 
myBike.make = "Honda"; 
myBike.model = "Fireblade";

const myBike2 = {            // using object literal {}
    make: "Honda", 
    model: "Fireblade" 
};

// There is no need to use new Object().
// For readability, simplicity and speed, use an object literal instead.

// access objects
myBike.make = "Yamaha"; // Dot
myBike["model"] = "R1"; // Obj indexer

console.log(myBike.make);

console.log(myBike["make"]);

console.log(myBike2.model);


const yourBike = {
    make: "Honda",
    model: "Fireblade",
    year: 2008,
    mileage: 12500,
}

// iterate over the object with for...in
for (let propName in yourBike) {
    console.log(`${propName} :: ${yourBike[propName]}`);
}

// Object Methods
console.log("OBJECT METHODS................");
// a method is a function stored as a property value

const person = {
  firstName: "Julie",
  lastName : "Dooley",
  id       : 1,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.id);
console.log(person.fullName());

// Classes introduced in 2015 as simpler syntax for creating multiple objects of the same type
// and to make inheritance simpler

console.log("OBJECTS from CLASSES.................");

import Car from './14_car.js';

// call the constructor
const myCar = new Car(4, 20);

console.log(`Number of wheels: ${myCar._wheels}`);

console.log(`Car's initial speed: ${myCar._speed}`);
myCar.accelerate(10);
console.log(`Car's current speed: ${myCar._speed}`);

console.log("GETTERS and SETTERS......");
console.log(myCar.power);
console.log(myCar.wheels);
console.log(myCar.speed);


console.log("Attempt to give the car 5 wheels");//invalid
myCar.wheels = 5;
console.log(myCar.wheels);


console.log("Attempt to give the car 3 wheels");//valid
myCar.wheels = 3;
console.log(myCar.wheels);

// overriding is creating a new method with the same name as an inherited method within a subclass
// use 'extends' to inherit from a class
// use 'super' to call the base class constructor

console.log("INHERITANCE...");
import HireCar from './14_hire_car.js'; 

const myHireCar = new HireCar(4, 1, 5);
console.log(`Constructed wheels: ${myHireCar.wheels}`);
console.log(`Constructed speed: ${myHireCar.speed}`);
myHireCar.accelerate(30);
console.log(`Accelerated speed: ${myHireCar.speed}`);
console.log(`Constructed lease duration: ${myHireCar.leaseDuration} days`);

myHireCar.leaseDuration = 14;
console.log(`Changed lease duration: ${myHireCar.leaseDuration} days`);

// private props are accessible but should be avoided
console.log(myHireCar._leaseDuration);

// an OBJECT CONSTUCTOR FUNCTION is a way of creating multiple objcts of the same type without defining a class

// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.

// This code creates an error class named DivisionByZeroError, instead of using the built-in Error, TypeError, RangeError, etc.
function DivisionByZeroError(message) {
    this.name = "DivisionByZeroError";
    this.message = (message || "");
}

// make it inherit from the built-in Error object
DivisionByZeroError.prototype = new Error();

// because of the inheritance it now has the following attributes:
// .name
// .message
// a stack trace
// can be caught in try/catch

// this is what we do now in modern JS:

// class DivisionByZeroError extends Error {
//     constructor(message = "") {
//         super(message);
//         this.name = "DivisionByZeroError";
//     }
// }

// STATIC
// Static class methods are defined on the class itself.

// You cannot call a static method on an object, only on an object class.

import Triangle from './14_static_triangle.js';

const myTriangle = new Triangle(10, 12);
// call STATIC method of the Triangle class

console.log(Triangle.area(myTriangle));

// console.log(myTriangle.area());
