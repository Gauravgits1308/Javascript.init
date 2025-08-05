/*
--> Arrays are resizable.
--> Arrays can contain multiple datatypes.
--> Arrays create shallow copies, copied array shares the same reference point,changes in copied array gets reflected in original array too.
 */

console.log("Before Changed");
let arr = [1,2,3,4,5,"Gaurav",true]
console.log(arr);

let copy_arr = arr;
console.log(copy_arr);

copy_arr[5] = "Gaurav Gupta"; // Important

// After changed..
console.log("After Changed");
console.log(`Original Array is ${arr}`);
console.log(`Copied Array is ${copy_arr}`);

// Another way to create array
const arr1 = new Array(1,2,3,45);
console.log(arr1);

// ARRAY METHODS. . .
arr.push(10) // Adds value to the end of array
arr.pop() // Removes value from the end of array
arr.unshift(25); // Adds value to the start of array
arr.shift() // Removes value from the start of array
console.log(arr);

console.log(arr.includes(65));
console.log(arr.indexOf(65));

// IMPORTANT ---- Converts an array to string 
console.log(arr.join()); 

// IMPORTANT --- USE OF 'slice' and 'splice'
let org_arr = [5,8,9,4,5,6]
console.log(`Original Array is : ${org_arr}`);

let slice_arr = org_arr.slice(2,5) // do not remove this part of array from the original string, and it did not includes the end range 
console.log(`Sliced Array is : ${slice_arr}`);
console.log(`Original After after slice : ${org_arr}`);


let splice_arr = org_arr.splice(2,5) // removes this part of array from the 'original string', and it includes the end range 
console.log(`Spliced Array is : ${splice_arr}`);
console.log(`Original Array after splice : ${org_arr}`);

// PART - 2
let student = ["Gaurav","Harsh","Himashu","Piyush"]
let course = ["CSE","ECE","AI/DE"]

student.push(course); // It will add the whole course array as an array in the Student array ... datatype of the pushed element will be array, does changes to the new array
console.log(student);

let new_arr = student.concat(course); // It will combine both the strings .. element by element...do not does changes in the original array
console.log(new_arr);

// IMPORTANT and widely used for larger number of arrays --- Spreading Array... Combines the elements of all the string in a single string
let all_new_student = [...student,...course,...arr]
console.log(all_new_student);

// Important --- Flattening a Array. . .
let this_arr = [1,5,2,3,4,[5,6,8,9],[8,7,4,5,[5,4,2,6,[8,5,4,7,5]]]] // There are two many arrays in a single array
let flattened_arr = this_arr.flat(Infinity) // depth parameter is passed here ... and it will flat this whole array into a single array.
console.log(flattened_arr);

console.log(Array.isArray("Gaurav Gupta")); // Checks if it is a array
console.log(Array.from("Gaurav Gupta")); // Converts this string or any datatype into a array

console.log(Array.from({name:"Gaurav",Contact:9628135776})); // VERY INTERESTING CASE . . . we must specify what we want to convert in an array that is key or value...if not given it will return an empty array

// Convert list of data into a string
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));