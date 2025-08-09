const user = {
    username : "Gaurav",
    price : 999,

    welcomeMessage : function(){
        console.log(`Hello, ${this.username}`);
        console.log(this); // This refers to the whole object attributes
    }
    
}

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this); // This refers globally an empty object

function chai(){
    username : "Gaurav"
    console.log(this.username); // It will give output as 'undefined' bcoz "this" keyword is generally used in objects . . . not in functions
    
}
// ****************** ARROW FUNCTION  ********************
// const chai = () => {
//     console.log(this.username);
// } // ARROW FUNCTION--

// chai();

// 1st method - (Explicit return)
const addTwo = (num1,num2) => {
    return num1+num2
}

// 2nd Method - (Implicit return)
const addTwonums = (num1,num2) => (num1+num2)
const obj = () => ({user : "Gaurav"})

// If we use curly braces{} then we need to use 'return' keyword , and if we use simple paranthesis() then we need not to use 'return' keyword

// Here, addTwo, addTwonums, obj all are functions

console.log(addTwonums(3,4));
console.log(addTwo(3,4));
console.log(obj());


