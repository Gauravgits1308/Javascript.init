// CASE OK
let num = 33;
console.log(typeof num); // number

// CASE OK
let num1 = "33";
console.log(typeof num1); //string
// type conversion
let Num1 = Number(num1);
console.log(typeof Num1); //number

// CASE NOT OK****
let num2 = "33abcd";
console.log(typeof num2); //string
// type conversion
let Num2 = Number(num2);
console.log(typeof Num2); //number, but it's not a number 
console.log(Num2);//value of Num2 is NaN

// CASE NOT OK****
let num3 = null;
console.log(typeof num3); //object
// type conversion
let Num3 = Number(num3);
console.log(typeof Num3); //number, but it's not a number 
console.log(Num3);//value of Num2 is 0

// CASE NOT OK****
let num4 = true;
console.log(typeof num4); //boolean
// type conversion
let Num4 = Number(num4);
console.log(typeof Num4); //number, but it's not a number 
console.log(Num4);//value of Num2 is 1

/*
Some Boolean Conversions
    1 => true ;
    0 => false ;

    "" (empty string) => false
    "gaurav" (non-empty string) => true
 */