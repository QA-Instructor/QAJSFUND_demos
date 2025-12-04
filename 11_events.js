console.log("Module 11");

let div = document.querySelector('#quad');
div.addEventListener('mousedown', findQuadrant);

let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', buttonClickHandler);

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', buttonClickHandler);

// uses an Arrow Function as an event handler - does NOT create a new context - yikes
let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', ()=> {buttonClickHandler()});

// uses an Anonymous Function as an event handler - does create a new context
// but I can pass in the event object to access the 'target' prop
let btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function(event){buttonClickHandler(event)});

function findQuadrant(event){
    let x = event.x;
    let y = event.y;
    console.log(x , y);

    let label = document.querySelector('#colour');
    if (x < 65 && y < 230){
        console.log("Yellow");
        label.textContent = "Yellow";
    }
    else if (x >= 66 && y < 230){
        console.log("Red");
        label.textContent = "Red";
    }
    else if (x < 65 && y >= 230){
        console.log("Green");
        label.textContent = "Green";
    }
    else {
        console.log("Blue");
        label.textContent = "Blue";
    }
    
}

function buttonClickHandler(event){

    let label = document.querySelector('#colour');
    let info = document.querySelector('#info');

    label.textContent = "";
    info.textContent = "";

    try {
        let myTarget = event.target;

        console.log(`Button clicked: ${myTarget.id}`);
        console.log(`TARGET: ${myTarget}`);
        info.textContent =`'event.target' is: ${myTarget}`;
    }
    catch  {
        console.log(`Button clicked: No event target is is available`);
        console.log("inline, hard coded event handler or arrow function");
    }
    
    console.log(`"this" refers to: ${this}`);
    label.textContent = `'this' is: ${this}`;

}

// arrow functions versus anonymous functions
// nested arrow function
// an arrow function is a short-hand for writing an anonymous function
// that does NOT create a new context for 'this'

let btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', function(event){
    console.log(`Button clicked: ${event.target.id}`);

    this.disabled = true;
    setTimeout(() => { // arrow function
        alert("Time's up");
        this.disabled = false; // this still refers to the button so it can be re-enabled
        console.log(`this: ${this}`);
    }, 1000);
});

// nested anonymous function
let btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', function(event){
    console.log(`Button clicked: ${event.target.id}`);

    this.disabled = true;
    setTimeout(function() { // anonymous function
        alert("Time's up");
        this.disabled = false;// this now refers to the WINDOW (a new context was created) 
        // so the button can NOT be re-enabled
        console.log(`this: ${this}`);
    }, 1000);
});

// nested anonymous function attempting to pass in event object
let btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', function(event){
    console.log(`Button clicked: ${event.target.id}`);

    this.disabled = true;
    setTimeout(function(event) { // event is no longer in contect - anonymous function
        console.log(event.target);
        alert("Time's up");
        event.target.disabled = false;// this now refers to the WINDOW (a new context was created) 
        // so the button can NOT be re-enabled
        console.log(`this: ${this}`);
    }, 1000);
});