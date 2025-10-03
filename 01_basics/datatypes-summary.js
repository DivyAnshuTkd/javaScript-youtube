// how the data is stored in memory and how the data is accessed from the memory, 
// on the basis of this data types are of two types, primitive and non primitive

// Primitive data types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// const bigNumber = 1234567890123456789012345678901234567890n

// Reference (Non-Primitive data types)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "divyanshu",
    age: 24
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof outsideTemp); // object
console.log(typeof myFunction); // function
console.log(typeof heros); // object


// All non-primitive data types type are objects

// JS is dynamically typed language
// We don't need to specify data types while declaring a variable
// Data type is assigned automatically based on the value assigned to the variable