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