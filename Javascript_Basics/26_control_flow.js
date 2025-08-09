let month = "Feb"
switch(month){
    case "Jan":
        console.log("Jan");
        break;
    case "Feb":
        console.log("Feb");
        break;
    default :
        console.log("Wrong Imput");       
}

/*
TRUTHY & FALSY VALUES ==> 

==> FLASY VALUES :- 
    --> false
    --> 0,-0
    --> Bigint 0n
    --> ""
    --> null
    --> undefined
    --> NaN

==> TRUTHY VALUES :- 
    --> All other are truthy values
    --> "0" , "false" , " " , [] , {} , function(){}
 */

let userEmail = ""
if(userEmail.length === 0)
        console.log("String is empty");

let userEmail1 = []
if(userEmail.length === 0)
        console.log("Array is empty");

let userEmail3 = {}
if(Object.keys(userEmail3).length === 0)
        console.log("Object is empty");

// null Coalescing operator (??) : null or undefined, if it gets null or undefined then run the code after '??'

let val1;
val1 = 5 ?? 10
val2 = null ?? 15
val3 = undefined ?? 14

console.log(val1);
console.log(val2);
console.log(val3);

// Ternary Operator
// condition ? true : false

let price = 250;
(price < 200) ? console.log("less than 200") : console.log("greater than 200");


        