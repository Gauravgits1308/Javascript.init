const score = 100
console.log(score);

const balance = new Number(4000.12)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 123.5642
console.log(otherNumber.toPrecision(3));

const val = 95632145
console.log(val.toLocaleString()); // commas regard US standards
console.log(val.toLocaleString('en-IN')); // commas regard Indian standards


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);


// ++++++++++ Maths Library ++++++++++++

// console.log(Math);
// console.log(Math.abs(-10));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(1,5,639,6,5,4));
// console.log(Math.max(5,8,9,7,4));

// console.log(Math.floor((Math.random()*6)+1)); // between 0 and 1

const min = 10
const max = 20

// VERY IMPORATNT
console.log(Math.floor(Math.random() * (max - min + 1)) + min);