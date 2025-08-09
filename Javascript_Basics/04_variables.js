const accountId = "12345";
let accountEmail = "gaurav@yahoo.com";
var accPassword = "541255";
accountCity = "Jaipur"
let accountState;

// accountId = "58499" // No use , it will throw an error

accountEmail = "gauragupta@yahoo.com"; // can be changed
accPassword = "2563"; // can be changed

console.table([accountId,accountEmail,accPassword,accountCity,accountState]);


/*

--> 'const' values cannot be changed if once declared.
--> 'var' keyword creates problem in scoping a variable, so use of it is now STRICTLY PROHIBITED.
--> Try to use only 'const' and 'let' for storing variables.
--> We can declare variable without using let or const , but it's not a good practice.
--> We can leave a variable undefined too, like 'accountState'.

*/