let score = "33"

console.log(typeof score);
console.log(typeof {score});

let valueInNumber = Number(score)  // convert to number data type
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)  // convert to boolean data type
console.log(booleanIsLoggedIn);


// 1 => true , 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)  // convert to string data type
console.log(stringNumber);
console.log(typeof stringNumber);




// ********************** Operations **************************

let value = 3
let negValue = -value
console.log(negValue);  // -3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(5%2);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);  // 1
console.log(+"");    // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2  // don't do like this

let gameCounter = 100
gameCounter++;
console.log(gameCounter);