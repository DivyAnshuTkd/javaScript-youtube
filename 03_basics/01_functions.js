function sayMyName()
{
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2)
{
    console.log(number1 + number2);
}

addTwoNumbers(3, 4)     // 7
addTwoNumbers(3, "4")   // 34
addTwoNumbers(3, "a")   // 3a
addTwoNumbers(3, null)  // 3

function addTwoNumbers(number1, number2)
{
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(3, 5)
console.log("Result : ", result);

function loginUserMessage(username = "sam")     // we have given the default value of username as sam, now if we do not give any parameter while calling this function then undefined will not be given as output instead, sam will come in output
{
    // if(username === undefined)
    if(!username)
    {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Hitesh"))
console.log(loginUserMessage())



//  IntereSting



function calculateCartPrice(...num1)    // here ... is a rest operator
{
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500, 2000))  // this will print the array of these numbers


 /*Interesting*/ 
function calculateCartPrice1(val1, val2, ...num1)    // val1 will take 200 and 300. While 500 and 2000 will come in array
{
    return num1
}

console.log(calculateCartPrice1(200, 300, 400, 500, 2000))  

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

// passing direct object as parameter in reference

handleObject({
    username: "sam", 
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));