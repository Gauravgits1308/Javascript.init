/*
==> Two ways to declare object - as literal or as constructor
==> Literals make singleton objects.
==> Constructors do not make singleton objects.
 */

const mySym = Symbol("key1")

const obj = {
    name : "Gaurav",
    full_name : "Gaurav Gupta",
    Contact : 9628135776,
    Email : "gaurav@gmail.com",
    isLoggedIn : true,
    [mySym] : 12356 // Important --- Now it is declared as Symbol, in brackets, study more for it 
};

// Accessing elements of objects
console.table(obj)
console.log(obj.Contact); // First way to access
console.log(obj.full_name);
console.log(obj["Email"]); // Second way to access
console.log(typeof obj[mySym]);

// Changing and freezing object
obj.Email = "gaurav@google.com" // overwrites the object element
// Object.freeze(obj) // Freezed the object...no change will effect the original array
obj.Email = "gaurav@youtube.com" // no overwrites will be done
console.table(obj);

// Adding new elements in the object
obj.DOB = "01/02/2006"
console.table(obj);

obj.greet = function(){
    console.log("Hello JS User");    
}
console.table(obj);
console.log(obj.greet());

obj.greet = function(){
    console.log(`Hello JS User, ${this.full_name}`); // Important
}
console.log(obj.greet());

                /*************** PART 2 **************/

// const tinderuser = new Object() //   singleton user

const tinderuser = {}
tinderuser.ID = "589654586"
tinderuser.email = "some@gmail.com"
tinderuser.Contact = "9563425418"
console.table(tinderuser);

const reg_user = {
    name : {
        username : {
            fullname : {
                firstname : "Gaurav",
                lastname : "Gupta"
            }
        }
    },
    isLoggedIn1 : false
}
console.table(reg_user);
console.table(reg_user.name.username.fullname?.firstname); // Study why question mark is used

// Objects concatenation

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// console.log(obj3); // combines as objects only not as elements

//const obj3 = Object.assign({},obj1,obj2) // give this curly braces too, Important

const obj3 = {...obj1,...obj2} // Using spread technique
console.log(obj3); // combines objects as element by element 

// Array of Objects
const arr_obj = [
    {
        ID : "5896",
        Name : "Hitesh",
        Email : "hit@google.com"
    },
    {
        ID : "5897",
        Name : "Ritesh",
        Email : "rit@google.com"
    },
    {
        ID : "5898",
        Name : "Gaurav",
        Email : "gaurav@google.com"
    }
]
console.table(arr_obj);

console.log(arr_obj[2].Email);

console.log(Object.keys(obj)); // Returns in an array
console.log(Object.values(obj)); // Returns in an array
console.log(Object.entries(obj)); // Returns in an array
console.log(obj.hasOwnProperty("Contact"));


console.log(Object.keys(arr_obj)); // Returns in an array
console.log(Object.values(arr_obj)); // Returns in an array