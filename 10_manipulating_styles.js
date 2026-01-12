// get the style of the 2nd paragraph
// there are mulitple ways of selecting the paragraph
let bgColor = document.querySelectorAll('p')[1].style.backgroundColor;
console.log(bgColor);

let bgColor2 = document.querySelector("p:nth-of-type(2)").style.backgroundColor;
console.log(bgColor2);

// Attempt to get the style of the 3rd paragraph
let bgColorPara3 = document.querySelector("p:nth-of-type(3)").style.color;
console.log(bgColorPara3); // element is styled via CSS class so no style is returned
// Styles applied via classes are not added to the 'style' property

// instead they become part of the 'computed style' of an element
let paragraph3 = document.querySelector("p:nth-of-type(3)");
let colorParagraph3 = getComputedStyle(paragraph3).color;
console.log(colorParagraph3); // rgb(238, 130, 238) => violet

// Computed Style is read-only. Use the style property to set CSS values using JS
// or add CSS classes

// // Setting multiple CSS properties
// // apply style to para 1 using JS
// document.querySelector('p:nth-of-type(1)').style.backgroundColor = '#dddddd';
// document.querySelector('p:nth-of-type(1)').style.color = '#666666';

// // // use Object.assign to make the code less verbose
// let div = document.querySelector('div');

// let styles = {
//     backgroundColor: "pink",
//     borderRadius: '5px',
//     boxShadow: "5px 5px 5px deeppink"
// }

// Object.assign(div.style,styles);

// // Add and remove CSS classes
// const para3 = document.querySelector('p:nth-of-type(3)');

// para3.classList.remove('fancy');
// para3.classList.add('green');

// Lab 10: ensure link to css does not have ../styles.css
// Ensure: first style is called  #blueParagraph not #blueText