// if, switch, while, do while, for

// IFs
let x = 5, y=3;
let result = null;

if (x > y){
    result = true;
}
else {
    result = false;
}
console.log(result);

// ternary short-hand
let result2 = (x > y) ? true : false;
console.log(result2);

// Date example
// long-hand if
let now = new Date();
let greeting = "Good";

if (now.getHours() > 17) {
    greeting += " evening.";
}
else {
    greeting += " day.";
}
console.log(greeting);

// short-hand ternary
let now2 = new Date();
let greeting2 = "Good" + ((now.getHours() > 17) ? " evening." : " day.");
console.log(greeting2);

// switch
const date = new Date();
let weekDayNumber = date.getDay();
console.log(weekDayNumber);

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let weekDayName = weekdays[weekDayNumber];
let weekDay = weekDayName.substring(0,3);
console.log(weekDay);

switch(weekDay){
        case "Mon":
        case "Tue":
        case "Wed":
        case "Thu":
        case "Fri":
            document.write("Go to work");
            break;
        case "Sat":
        case "Sun":
            document.write("Stay at home");
            break;
        default:
            document.write("Which planet are you on?");
            break;
}

// while loop
let i = 0;
let text = "";

while (i < 6) {
  text += "The number is " + i + "\n";
  i++;
}
console.log(text);

// do while loop
let ii = 7;
let text2 = "";

do {
  text2 += "The number is " + ii + "\n";
  ii--;
}
while (ii >= 1); // change to 10 to see the loop runs once

console.log(text2);

// for loop
let text3 = "";

for (let i = 0; i < 5; i++) {
  text3 += "The number is " + i + "\n";
}

console.log(text3);
