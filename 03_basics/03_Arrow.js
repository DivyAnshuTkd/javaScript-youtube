// The this keyword in JavaScript refers to the object that is currently executing the function.
// It changes depending on how and where a function is called — not where it’s written.

// More accurately:

// this = the current execution context — the object that owns or calls the function, 
// or the global object, or undefined (strict mode).

// Context in JavaScript is the value of this at the moment a 
// function is executed, i.e., the object that “owns” the function call.

const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage:function(){          // function in object is called method
        console.log(`${this.username} , welcome to website`);
        console.log(this)    // this prints the current object
    }

}

// username.welcomeMessage()  error
user.username = "sam"
user.welcomeMessage()

console.log(this);     // will print {}

function chai()
{
    let username = "hitesh"
    console.log(this.username);  // will print undefined as this keyword does not work for function
}

chai()

// const chai = function()
// {
//     let username = "Hitesh"
//     console.log(this.username)  // will print undefined
// }



const chaii = () => {
    let username = "Hitesh"
    console.log(this.username)  // will print undefined
}

chaii()


// whenever curly bracket is there in function then return must be written in function
// if curly bracket is not there in function then no need to write return and write in paranthesis

// const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4))

// Regular function: Has its own this, can be used as a constructor, and has access to arguments.

// Arrow function: Does not have its own this (inherits from parent), cannot be used as a constructor, and does not have arguments.