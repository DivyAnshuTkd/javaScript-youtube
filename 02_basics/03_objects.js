// singleton
// Object.create

// object literals syntax

const mySym = Symbol("key1")  // it creates a unique identifier. It is always unique.

const JsUser = {
    name: "Hitesh",       // key: value       key is always string
    "full name": "Hitesh Choudhary",   // if key has space then we have to use quotes
    [mySym]: "myKey1",   // we can use symbol as key. symbol key value is always written in square brackets. 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);  // useful when we want to access key dynamically. It is necessary to use quotes.
console.log(JsUser["full name"]);  // if key has space then we have to use quotes
console.log(JsUser[mySym]);  // accessing symbol key value  (# Interesting)

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // it makes the object immutable. We cannot change, add or delete properties of the object.
JsUser.email = "hitesh@microsoft.com" // it will not change the email property
console.log(JsUser);

JsUser.greeting = function(){            // function is also treated as object property
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){            
    console.log(`Hello JS User, ${this.name}`);        // this refers to the current object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());