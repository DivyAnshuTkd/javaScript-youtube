// Immediately Invoked Function Expressions (IIFE)

// An IIFE (Immediately Invoked Function Expression) 
// is a JavaScript function that is defined and executed immediately after it is created.

// It runs once and creates its own scope, avoiding polluting the global scope.


(function chai()
{
    // named IIFE
    console.log(`DB CONNECTED`);
})();              // this semicolon is compulsory when writing more than one IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("Divyanshu")             // writing and calling the function immediately