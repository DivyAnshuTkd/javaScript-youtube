const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // use backtick ``

const gameName = new String("hitesh-hc-com")

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const str = gameName.slice(-8, 4);
console.log(str); // -8 means start from last  (output: hite)

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());  // remove extra spaces from start and end

const url = "https://hitesh.com/hitesh%20choudhary"

url.replace("%", "-")  // only first match will be replaced

console.log(url.includes("hitesh"))  // true

console.log(gameName.split('-'));