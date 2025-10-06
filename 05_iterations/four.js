const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);   
}


const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming)
{
    console.log(programming[key]);
}

// generally we will use for of loop for arrays and will not use for in loop for arrays