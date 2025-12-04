let products = {
    "productList": [
        { 
            "productName": "Aniseed Syrup", 
            "unitPrice": 10 
        }, 
        { 
            "productName": "Alice Mutton", 
            "unitPrice": 39 
        }
    ]
};


console.log("The JSON object....");

// JSON.parse() turns JSON string into JavaScript
// JSON.stringify() turns JavaScript into JSON string

console.log("PARSE....");
// PARSE takes a string and turns it into a JS object
let objA = JSON.parse('{"name":"Adrian"}');

console.log(objA); // returns {name: 'Adrian'}
console.log(objA.name); //returns Adrian

// slightly more complex string
let objB = JSON.parse('{"name":"Beverley", "age": 35}');

console.log(objB); // returns {name: 'Beverley', age: 35}
console.log(objB.name); //returns Beverley
console.log(typeof objB); //returns object


console.log("\nSTRINGIFY....");
// STRINGIFY takes a JS object and turns it into a string
let str = JSON.stringify({ name: "John" });
console.log(str);
console.log(typeof str);

console.log("\nPRODUCTS DATA....");
console.log(products);
console.log(typeof products); // object of type Array

console.log(`\nPRODUCT LIST:`);
// products is already a JavaScript Object so we don't need to parse it

console.log(products.productList);
// objects by element ID
console.log(products.productList[0]);
console.log(products.productList[1]);

// specific props of object by name
console.log(products.productList[1].productName);
console.log(products.productList[1].unitPrice);

let productStr = JSON.stringify(products);
console.log(productStr);
console.log(typeof productStr);
