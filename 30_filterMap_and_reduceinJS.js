// what forEach returns and use of 'return' keyword in looping of array using forEach

// forEach loop doesn't return a value on its own, if we want to extract returned value in a variable AND also it does not return anything using a return keyword
let coding = ["java","cpp","html","css"]

let value = coding.forEach( (item) => {
    console.log(item);    
    // return value ;
})
console.log(value);

// IMPORTANT :- filter() returns the values
const my_nums = [1,2,3,4,5,6,7,8,9,10]
const nums = my_nums.filter( (num) => num > 6)
console.log(nums);

// If we use curly braces in function ... then we need to use 'return' keyword
// IMPORTANT :- filter() returns the values
const my_nums3 = [1,2,3,4,5,6,7,8,9,10]
const nums4 = my_nums3.filter( (num) => {
    return num > 6
})
console.log(nums);

// IMP :- way of returning values in forEach
const number = []
my_nums.forEach( (num) => {
    if(num > 5) number.push(num)
})
console.log(number);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  let userBook = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
  console.log(userBook);

// IMPORTANT :- using map function, it returns values
const myNumbers = [5,4,1,2,6,5,8,9,4,4]
let numsf = myNumbers.map( (num) => num+10)
console.log(numsf);

// chaining method
let number8 = [1,2,3,4,5,6,7,8,9,10]
const nums_arr = number8
                    .map( (num) => num*10)
                    .map( (num) => num+1)
                    .filter( (num) => num > 30)

console.log(nums_arr);

// IMPORTANT :- using reduce method
const price = [256,254,199,232,485]

// adds all the prices
const init = 0;
const total_price = price.reduce( function (acc,currval){
    return acc+currval
},init) 
console.log(`Grand Total :- Rs.${total_price}`);



const init0 = 0;
const total_price0 = price.reduce( (acc,currval) => acc+currval,init) 
console.log(`Grand Total :- Rs.${total_price0}`);

const shoppingCart = [
    {
        "item" : "Rice",
        "amount" : 1,
        "price/unit" : 120
    },
    {
        "item" : "Sugar",
        "amount" : 3.5,
        "price/unit" : 120
    },
    {
        "item" : "Toor Dal",
        "amount" : 2.5,
        "price/unit" : 105
    },
    {
        "item" : "Shampoo",
        "amount" : 1,
        "price/unit" : 259
    },
    {
        "item" : "Soyabean Oil",
        "amount" : 3,
        "price/unit" : 150
    },
    {
        "item" : "Jaggery",
        "amount" : 0.75,
        "price/unit" : 80
    }
]

const initial = 0;
const myBill = shoppingCart.reduce(function (acc,currval){
    return acc+(currval.amount*currval["price/unit"])
},initial);

console.log(`Your total purchse ==> Rs.${myBill.toFixed(2)}`);

