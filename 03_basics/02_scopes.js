// var c = 300
// In JavaScript, var does not follow block scope — it is function-scoped (or globally-scoped if declared outside any function).
// If you don’t use var, let, or const, the variable becomes global by default.


let a = 300

if (true){
    let a = 10
    const b = 20
    console.log("Inner: ", a);
}


console.log(a);
// console.log(b);
// console.log(c);


// Nested scope


// A closure gives a function access to its parent function’s variables — even after the parent function has returned.

function one()
{
    const username = "hitesh"

    function two()            // child function can access the variables of parent function
    {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);         error

    two();


    // The function two() forms a closure with its outer function one() — 
    // meaning it “remembers” and can access all the variables of one() (like username), 
    // even after one() has finished executing.
}
one();

if(true)
{
    const username = "hitesh"
    if(username === "hitesh")
    {
        const website = " youtube"
        console.log.log(username + website);
    }
    // console.log(website);  error
}

// console.log(username);    error


// ++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++

function addone(value)
{
    return num + 1
}

addone(5)

const addTwo = function(num){         // this is also called function expression
    return num + 2
}

addTwo(5)







// In normal function declaration we can call the function before the function declaration as well and it will give proper output
// When we write function in variable that in the case of expression we cannot call the function before it's declaration it will give error.

// Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope (before code execution).

// Function expressions do NOT follow hoisting
// Only function declarations are hoisted (both name and body).