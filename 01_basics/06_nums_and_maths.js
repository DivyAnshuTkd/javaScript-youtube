const score = 100;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));   // it shows how many digits after decimal point

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(4));   // it shows how many digits in total (before and after decimal point)

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // it adds commas according to country format (by default it is US format)


// ********************** Maths **************************

console.log(Math);
console.log(Math.abs(-4));  // 4
console.log(Math.round(4.6));  // 5
console.log(Math.ceil(4.1));  // 5
console.log(Math.floor(4.9));  // 4
console.log(Math.min(4,1,5,6,9,-3));  // -3
console.log(Math.max(4,1,5,6,9,-3));  // 9
console.log(Math.random());  // it gives random number between 0 to 1
console.log(Math.floor((Math.random() * 10) + 1));  // it gives random number between 0 to 9  

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // it gives random number between min to max (both inclusive)