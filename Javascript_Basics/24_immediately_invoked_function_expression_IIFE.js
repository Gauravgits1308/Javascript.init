// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it's defined. It's used to avoid polluting the global scope by keeping variables private. Syntax: (function(){})();. Useful for initialization tasks and creating isolated code blocks without affecting other parts of the program.

// Named IIFE
(function chai (){
    console.log(`DB CONNECTED`);
})(); // Here semicolon is mandatory to terminate the invoke

// Unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED AGAIN, ${name}`);
})('Gaurav'); // Can be used in arrow function too . . .Here semicolon is mandatory to terminate the invoke