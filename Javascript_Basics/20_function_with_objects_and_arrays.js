// Shopping Cart Function - we don't know how much parameters will be input ny the user

function calculateCartPrice(...values){
    let totalPrice = 0 ;
    for(i = 0 ; i < values.length; i++)
        totalPrice += values[i] ;

    return totalPrice
}

// Rest Operator = ...values
// Spread Operator = ...values
// 'Rest' and 'Spread' operator both are same .... difference comes on the basis of their usecases

totalPrice = calculateCartPrice(256,698,458,412)
console.log(`Your total Purchase : Rs.${totalPrice}`);

// Passing Objects ==>
const user = {
    username : "Gaurav",
    price : 156
}

function handleObj(anyobj){
    console.log(`Username is ${anyobj.username} and price of product is ${anyobj.price}`);
}

handleObj(user) // can pass declared object

handleObj({
    username : "Hitesh Sir",
    price : 250,
    city : "Delhi"
}) // can declared object here also


// Passing Arrays ==>
function returnSecondElement(arr){
    return arr[1]
}

const newArr = [100,"Hello",true]
console.log(returnSecondElement(newArr));
