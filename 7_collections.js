// Maps
// 1. Create a map by passing an Array to new Map
const fruits1 = new Map([[1,"bananas"],[2,"grapefruit"],[3,"apples"]]);

// 2. Create a map by passing an Array to new Map
const fruits2 = new Map();
fruits2.set(1, "bananas");
fruits2.set(2, "grapefruit");
fruits2.set(3, "apples");

console.log(fruits1);
console.log(fruits1.size);

// add an item
fruits1.set(4, "strawberries");
console.log(fruits1);
console.log(fruits1.size);

// fetch an item by key
console.log(fruits1.get(4)); //"strawberries"

// check a key exists
console.log(fruits1.has(2)); //true

// remove an item by key
fruits1.delete(2);
console.log(fruits1);

// remove all items
fruits1.clear();
console.log(fruits1);
console.log(fruits1.size); //0

// iterating over maps
console.log("ITERATING over Maps......");

console.log("ITERATING Keys and Values......");
// log all key/value pairs in the map
for (let [key, value] of fruits2) {
    console.log(`key: ${key} value: ${value}`);
}
console.log("ITERATING Keys......");
// log all keys in the map
for (let key of fruits2.keys()) {
    console.log(`key: ${key}`);
}
console.log("ITERATING Values......");
// log all values in the map
for (let value of fruits2.values()) {
    console.log(`value: ${value}`);
}
console.log("ITERATING Entries......");
// equivalent to first iteration example
// log all entries (key/value pairs) in the map
for (let [key, value] of fruits2.entries()) {
    console.log(`key: ${key} value: ${value}`);
}

// ==================================================
// Sets

console.log("SETS.............");
// stes store unique values
let mySet = new Set();

mySet.add("apples");
mySet.add("bananas");
console.log(mySet.size); //2
mySet.add("apples");
console.log(mySet.size); //2 (the 2nd apples is not unique)
console.log(mySet.has("apples")); //true
mySet.delete("apples");
console.log(mySet.size); //1
mySet.clear();
console.log(mySet.size); //0


mySet.add("cars");
mySet.add("trains");
mySet.add("buses");

// iterating over sets
console.log("ITERATING over Sets......");
// log all key/value pairs in the set
for (let item of mySet) {
    console.log(item);
}

// a WeakSet is a collection of values where the values must be objects.
// This restriction is tied to the garbage collection mechanism; primitives are not garbage 
// collected in the same way as objects.
// A WeakSet holds weak references to its values.
// Unlike a regular Set, a WeakSet does not prevent its values from being garbage collected.
// If there are no other references to an object, it gets garbage collected automatically.
// WeakSets are not enumerable and have no size property.
