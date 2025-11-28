// selecting elements

// selecting an element by id
let x = document.getElementById("second");
console.log(x);

let y = document.querySelector("#second");
console.log(y);

// selecting mulitple elements
let allP = document.getElementsByTagName('p');

console.log(allP);
// get the zeroth item and retrieve its innerHTML property - uses item() method
console.log(allP.item(0).innerHTML);

// get the first item and retrieve its innerHTML property - uses subscript notation
console.log(allP[1].innerHTML);

console.log("Iterate over collection.................");
// iterate over the collection of paragraphs
for (let para of allP){
    console.log(para);
    console.log(para.innerHTML);
    console.log(para.innerText);
}

// find all anchor tags that are direct descendants of a div
let allA = document.querySelectorAll('div > a');
console.log(allA.length);
console.log(allA[0].innerText);

let allImportant = document.querySelectorAll('.important');
console.log(allImportant.length);

console.log(allImportant[0].innerText);
console.log(allImportant[1].innerText);
console.log(allImportant[2].innerText);

// get an anchor tag with a class of important
let importantAnchor = document.querySelector('a.important');
console.log(importantAnchor);


// get a span tag inside a paragraph with a style class of quote
let quoteSpan = document.querySelector('p span.quote');
console.log(quoteSpan);

// Descendant combinator (space): all descendants (children, grandchildren, etc) of a specified element
// Child combinator (>): all direct children of a specified element
// Next Sibling combinator (+): an element directly after of a specified element (with the same parent)
// Subsequent Sibling combinator (~): all elements directly after of a specified element (with the same parent)

// https://www.w3schools.com/css/css_combinators.asp

// Add a list item to the places list:

let placeListItem = document.createElement('li'); // create the list item
let placeText = document.createTextNode('Leeds'); // create the text node that will become part of the li

placeListItem.appendChild(placeText); // append the text node to the li

// get the last element of type 'ul' and append the 'li'
document.querySelector('ul:last-of-type').appendChild(placeListItem);

// innerText and innerHTML should NOT be your primary way of adding new DOM elements.
// They can work, but they are often unsafe, slow, and problematic compared to proper DOM methods
// such as the mechanism used above (createElement + createTextNode)

// Another example:
const li = document.createElement("li");
li.textContent = "Livingston";
document.querySelector('ul:last-of-type').appendChild(li);

