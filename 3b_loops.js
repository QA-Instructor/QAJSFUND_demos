// Date example
// long-hand if
let now = new Date();
let greeting = "Good";

if (now.getHours() >= 16) {
    greeting += " evening.";
}
else {
    greeting += " day.";
}
console.log(greeting);

// for loop
let text3 = "";

for (let i = 0; i < 5; i++) {
  text3 += "The number is " + i + "\n";
}

console.log(text3);



// do while loop
let maxLoginAttempts = 3;
let currentAttempt = 1;
let successfullLogin = false;

do {
  console.log(`Show login screen: ${currentAttempt}`);
  if (successfullLogin){
    break;
  }

  currentAttempt++;
}
while (currentAttempt <= maxLoginAttempts); 

if (successfullLogin){
    console.log(`You are logged in`);
}
else{
    console.log(`You are NOT logged in`);
}