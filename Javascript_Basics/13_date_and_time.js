let date = new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.getMilliseconds());

let myDate = new Date(2025,0,25); // Months starts from number 0.
let myDate1 = new Date("01-02-2006"); // In this syntax, Months starts from number 1.
console.log(myDate.toLocaleString());
console.log(myDate1.toLocaleString());

let myTimeStamp = Date.now() ;

console.log(Date.now()); // returns a value is millisecond that is caculated the time from 1970.
console.log(myDate.getTime()); // converts date into milliseconds
console.log(myDate.getTime()/1000); // converts time into second with three decimal places
console.log(Math.floor(myDate.getTime()/1000)); // converts time into second without three decimal places
console.log(myDate.getMonth() + 1);
console.log(myDate.getDay()); // **Day of week for Jan 25, 2025 is Saturday => 6

// IMPORTANT. . . 
console.log(
    myDate.toLocaleString('default',{
        weekday: "long"        
    })
);