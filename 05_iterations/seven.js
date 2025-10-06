// filter, forEach, map all three use callback functions.

// forEach = do something, no return
// map = transform each element, returns new array
// filter = filter elements, returns new array


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( () => num + 10 )


//chaining

const newNums = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 )

console.log(newNums)


// difference between filter and map

// map = “change every element” → returns a transformed array
// filter = “pick certain elements” → returns a subset array (it takes some condition)