/*
Stack memory is used for Primitive data types ,
Heap memory is used for Non-Primitive data types.
*/ 

// STACK MEMORY . . .
let myScore = 100
let yourScore = myScore // 'copy by value'

yourScore = 90
console.log(yourScore);
console.log(myScore); // Value for myScore won't change bcoz of heap memory allocation... 'copy' of myscore is being shared with yourScore in previous line

// HEAP MEMORY
let userOne = {
    ID : 123554,
    email : "gaurav@gmail.com"
};

let userTwo = userOne //'copy by reference'
userTwo.ID = 65894 // here ID for both, userOne and UserTwo will get change... bcoz of 'copy by reference'

console.log(userOne.ID);
console.log(userTwo.ID);