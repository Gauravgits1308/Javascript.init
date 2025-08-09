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

    // ****************** Object_de-structure_and_JSON_API_intro ******************** //

const course = {
    ID : 5412,
    course_name : "JS",
    course_instructor : "Hitesh Sir",
    course_duration : 1 
}

// 1st method 
console.log(course.course_duration);

// 2nd method by de-structuring
// Syntax ==>
// const {attribute_name:shorthand_name(ifuwant)} = object_name {important}
// Same Output
const {course_duration} = course
console.log(course_duration);

const {course_duration:time} = course
console.log(time);

// ************ API intro ****************
// written in JSON files like this
/*
    as objects . . .
    {
        "name" : "Gaurav Gupta",
        "age" : "21",
        "email" : "gaurav@google.com"
    }

    like this also as arrays . . .
    [
        {},
        {},
        {}
    ]
*/

{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}