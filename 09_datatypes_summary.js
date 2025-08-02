/*
On the basis of storage,that is how and where data is stored, datatypes are divided in two types - Primitive and Non-primitive.

==> PRIMITIVE DATATYPE
    -> These are basic, immutable, and stored directly in memory.
    -> Stored by value.
    -> Cannot be changed once created (immutable).
    -> String, Number, Boolean, null, undefined, symbol, BigInt

==> NON-PRIMITIVE or REFERENCE TYPE
    -> These are complex objects, and stored by reference (i.e., a pointer to the location in memory).
    -> Stored by reference.
    -> Mutable (you can change their properties or contents).
    -> Array, Objects, Functions.

Note :- In JavaScript there is no float/double ... here every number is simply considered in number datatype.
 */

const Id = Symbol("Hello") ;
const anotherId = Symbol("Hello") ;
// Both are different ,due to Symbol used here
console.log(Id === anotherId); // false

const bigNumber = 5457484546485414141n; // 'n' makes it bigint Type

                /* Non Primitive Datatypes */
// Array
const heros = ["shaktimaan","naagraj","doga"];
console.table(heros);


// Object
const myData = {
    name : "Gaurav gupta",
    age : 21,
    city : "Kota",
    Contact : 9628135776
};
console.table(myData);

// Functions : here function can be stored in a variable.
const myFunction = function Hello(){
    console.log("Hello World");
}

console.log(myFunction());




