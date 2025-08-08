function one(){
    const username = "Hitesh Sir";

    function two(){
        const website = "youtube";
        console.log(username);
        
    }
    console.log(website);
    two();
}
one();

// ********** Interesting ************

addOne(10)
function addOne(num){
    return num+1
}

addTwo(10)
const addTwo = function(num){
    return num+2;
}

/*
==> When simple function is declared . . .
    --> It can be called or accessed before function declaration
==> When function is stored in a variable . . .
    --> It cannot be called or accessed before function declaration 
 */