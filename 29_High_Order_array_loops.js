// for of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

let str = ["one","two","three"]
for (const val of str) {
    console.log(val);        
}

const name = "Gaurav Gupta"
for (const character  of name) {
    if(character === " "){
        continue;
    }
    console.log(character);
}

// Maps :- 
// no duplicate values
// retains its order 
const map = new Map() // creating new map object
map.set("IN","India")
map.set("USA","United States of America")
map.set("FR","France")
map.set("USA","United States of America")
// console.log(map);

// How to apply loop on map
for (const key of map) {
    console.log(key);    
} // It prints the map in the format of arrays 

for (const [key,values] of map) {
    console.log(key, ":-" , values);    
} // IMPORTANT ==>  It prints the map in simple key value pairs, that is de-structuring the array 

// OBJECTS :- Objects are "NOT" iteratatable using forof loop... they are iteratatable using forin loop
const obj = {
    'name' : "Gaurav Gupta",
    'age' : 21,
    'gender' : "male"
}

// for (const [key,value] of obj) {
//     console.log(key,":-",value);    
// }

// just prints the key of object
console.log("JUST PRINTS KEY");
for (const key in obj) {
    console.log(key);        
}

console.log("JUST PRINTS VALUES");
// just prints the value of object
for (const key in obj) {
    console.log(obj[key]);        
}

console.log("PRINTS KEY-VALUE PAIR");
// Prints the key-value pair of object
for (const key in obj) {
    console.log(`${key} => ${obj[key]}`);        
}

// ITERATING ARRAY USING forin LOOP

// Just prints key 
const new_arr = ["cpp","js","html","css"]
for (const key in new_arr) {
    console.log(key);   
}

// Just prints values 
const new_arr1 = ["cpp","js","html","css"]
for (const key in new_arr1) {
    console.log(new_arr1[key]);   
}

// Prints key-value pair 
const new_arr2 = ["cpp","js","html","css"]
for (const key in new_arr2) {
    console.log(`${[key]} => ${new_arr2[key]}`);   
}

// Cannot use forin loop on maps


/* VERY IMPORTANT
forEach loop ==> very important for applying loops on arrays
 */

let coding_arr1 = ["java","cpp","python","C#","html"]
coding_arr1.forEach(function(value){
    console.log(value);
})

// Using arrow function
let coding_arr2 = ["java","cpp","python","C#","html"]
coding_arr2.forEach((value,index,coding_arr2) => {
    console.log(value,index,coding_arr2);
})

// One more Method 
function printMe(item){
    console.log(item);
}
coding_arr2.forEach(printMe)

// Looping on Array of Objects
let code_name = [
    {
        Lang_name : "Java",
        Ext_name : ".java"
    },
    {
        Lang_name : "Python",
        Ext_name : ".py"
    },
    {
        Lang_name : "C++",
        Ext_name : ".cpp"
    }
]

code_name.forEach( (item) => {
    console.log(`${item.Lang_name} :- ${item.Ext_name}`);
} )