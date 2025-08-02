console.log("2" > 1); //true
console.log(2 > "1"); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

// IMPORTANT . . .
console.log("2" == 2); // here the ans will be true
console.log("2" === 2); // here the ans will be false, bcoz it is known as 'strict check',it will not only check the values but also its datatypes . . . 

// Avoid comparison of 'null' and 'undefined' with any type of data . . .



