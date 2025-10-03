const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Shaktiman", "Nagraj", "Doga", "Superman"];

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[0]);

// shallow copy = Shallow copy means if we change the copied array then original array will also change
// deep copy = Deep copy means if we change the copied array then original array will not change

// Array methods

myArr.push(6); // it adds element at the end of array
myArr.push(7); // it adds element at the end of array
myArr.pop(); // it removes element from the end of array
console.log(myArr);

myArr.unshift(0); // it adds element at the beginning of array
console.log(myArr);
myArr.shift(); // it removes element from the beginning of array
console.log(myArr);

console.log(myArr.includes(9)); // it gives index of element
console.log(myArr.indexOf(3)); // it gives index of element

const newArr = myArr.join(); // it converts array to string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // it creates new array from index 1 to index 3 (3 not included)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // it removes elements from index 1 to index 3 (3 not included) and returns removed elements

console.log("C ", myArr);
console.log(myn2);


// difference between splice and slice

// splice modifies the original array and returns the removed elements
// slice does not modify the original array and returns a new array