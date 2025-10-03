// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)  // month is 0 based index (0 to 11) so 0 means January
console.log(myCreatedDate.toDateString());

let myCreatedDatee = new Date(2023, 0, 23, 5, 3)   // year, month, date, hours, minutes
console.log(myCreatedDatee.toLocaleString());

let myCreatedDateee = new Date("2023-01-23")   // year-month-date
console.log(myCreatedDateee.toLocaleString());

let myTimeStamp = Date.now()   // it gives timestamp (number of milliseconds since January 1, 1970)
console.log(myTimeStamp);
console.log(myCreatedDatee.getTime());  // it also gives timestamp of that date

console.log(Math.floor(Date.now()/ 1000)); // it gives timestamp in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());  // it gives year
console.log(newDate.getMonth());    // month is 0 based index (0 to 11) so 0 means January



newDate.toLocaleString("default", {   // it gives full month name
    weekday: "long",
})