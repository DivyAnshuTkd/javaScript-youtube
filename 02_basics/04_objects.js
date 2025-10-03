// const tinderUser = new Object()    // singleton object: it is created using object constructor
const tinderUser = {}   // object literal syntax
console.log(tinderUser);  // {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);  // Hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}  // it will create two properties obj1 and obj2
// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2)  // it merges two objects and returns a new object. here first parameter is the target object and rest are source objects. Source object properties will be copied to target object.
// console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}  // spread operator it merges two objects and returns a new object
console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [           // array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));   
console.log(Object.values(tinderUser));   
console.log(Object.entries(tinderUser));   

console.log(tinderUser.hasOwnProperty('isLoggedIn'));