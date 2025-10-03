// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 == "2");

console.log("2" > 1);  // true
console.log("2" > 1);  // true

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true, but null > 0 is false.

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// When comparing with undefined, the comparisons always return false.

// Strict check

// ===

console.log(2 === 2);    // true
console.log(2 === "2");  // false
console.log(2 !== "2");  // true

// Strict check (===) does not do type conversion, Whereas regular check (==) does.