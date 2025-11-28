console.log("Forms");

// access the DOM forms collection by index
let formA  = document.forms[0];
console.log(formA);

// access the DOM forms collection by id
let formB = document.forms["validSubscribe"];
console.log(formB.children[0]); // access zeroth element

// iterate the forms elements
for (let el of formB.elements){
    console.log(el);
}

// access the DOM forms collection by id with a selector method
let formC = document.getElementById["nonvalidSubscribe"];
console.log(formB.children[0]); // access zeroth element
console.log(`id: ${ formB.children[0].id}`); // access first element's name

const radios = document.querySelectorAll('input[name="drink"]');
const result = document.getElementById('result');

radios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    const selectedValue = e.target.value;
    result.textContent = "You selected: " + selectedValue;
  });
});

document.getElementById("vend").addEventListener("click", (event) => {
    event.preventDefault(); // stop page being submitted
    const selected = document.querySelector('input[name="drink"]:checked');

    if (selected) {
        document.getElementById("result").textContent =
        "You bought: " + selected.value;
    } else {
        document.getElementById("result").textContent =
        "No option selected.";
    }
});

let title = document.querySelector('select');
title.addEventListener('change', (e) =>{
        const selectedValue = e.target.value;
        lblTitle.textContent = "You selected: " + selectedValue;
})
console.log(`Title is: ${title.value}`); // use 'value'

// NOTE: Exercise 12A does not change the url as decsribed in the instructions
// Instead - you later add some console.log statements to output the field values


