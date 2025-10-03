const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);  // it adds dc_heros array as a single element at the end of marvel_heros array

console.log(marvel_heros[3][1]);  // it gives flash

const allHeros = marvel_heros.concat(dc_heros);  // it merges two arrays and returns a new array
console.log(allHeros);   // it adds elements of dc_heros array at the end of marvel_heros array

const all_new_heros = [...marvel_heros, ...dc_heros];   // this is a spread operator it merges two arrays and returns a new array

console.log(all_new_heros);   // it adds elements of dc_heros array at the end of marvel_heros array

// spread operator is used to copy array and merge arrays
// it is also used to copy objects and merge objects

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_arr.flat(Infinity)  // it flattens the array upto the specified depth. (Flattening means converting a multi-dimensional array into a single-dimensional array)
console.log(real_another_array);

// Infinity means it flattens the array completely

console.log(Array.isArray("Hitesh"))  // it checks whether the given value is an array or not
console.log(Array.from("Hitesh"))  // it converts a string into an array
console.log(Array.from({name: "hitesh"}))  //interesting.  It's output will be an empty array because the object is not iterable.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))  // it creates an array from the given values