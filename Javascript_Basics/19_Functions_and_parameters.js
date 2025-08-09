function addTwoNumbers(num1,num2){
    if(isNaN(num1) || isNaN(num2)) //The isNaN() function first tries to convert the argument to a number, and then checks if it is NaN.
    {
        console.log("Please enter correct data...");
        return
    }
    else
    {
        result = num1+num2
        console.log(result);
        return result 
    }     
}

addTwoNumbers(2,"1") // Passing Argument

function loginInMsg(username = "User"){
    if(username === undefined) 
        // SYNATX ==> 
            // function fun_name(parameter = "default value")
        // if(!username) -> same use
        // IMP : When no username is passed in the arg, it will take it as undefined .
    {
        console.log("Please enter a username...");
        return
    }
    else{
        return (`Welcome, ${username}`)
    }
}

console.log(console.log(loginInMsg()));