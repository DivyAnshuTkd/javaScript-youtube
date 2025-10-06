const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val) {     // callback function
    console.log(val);
} )

coding.forEach( (item) => {     // callback function
    console.log(item);
} )

function printMe(item)     
{
    console.log(item);
}

coding.forEach(printMe)  // call back function  (putting direct function in callback function)


coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr);
} )



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )