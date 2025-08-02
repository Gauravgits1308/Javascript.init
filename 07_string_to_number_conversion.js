let str1 = "Gaurav" ;
let str2 = " Gupta" ;
let str3 = str1 + str2 ;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122 
/*
    Step-by-step:
    "1" + 2 → String + Number = "12"
    (The number 2 is coerced to string)

    "12" + 2 → String + Number = "122"

    ✅ Final result: "122" (as a string)
 */
console.log(1 + 2 + "2"); // 32
/*
    Step-by-step:
    1 + 2 → Number + Number = 3

    3 + "2" → Number + String = "32"

    ✅ Final result: "32" (as a string)
*/ 

console.log(true); // true
console.log(+true); // 1
//console.log(true+); // error





