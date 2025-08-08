// **************** JAVASCRIPT EXECUTION CONTEXT ******************

/*
           IMPORTANT LECTURE - 25
The Execution Context is the internal environment where JavaScript code is evaluated and executed. JavaScript is single-threaded, meaning only one task is done at a time, and everything in JS runs inside an execution context.

Types of Execution Context
==> Global Execution Context (GEC)
    --> Created when the JavaScript code is first run.
    --> This is the default or base context.
    --> A global object is created (window in browsers or global in Node.js).
    --> 'this' refers to the global object.

==> Function Execution Context (FEC)
    --> Created whenever a function is invoked.
    --> Each function has its own execution context.

==> Eval Execution Context (very rare)
    --> Created when code is executed inside eval().

==> Execution Context Lifecycle
    Each execution context goes through 2 phases:

    --> 1. Creation Phase
            - Memory is allocated to variables and functions.
            - Variables are assigned undefined.
            - Function declarations are hoisted (moved to the   top of the context).
            - A special object called the Lexical Environment is created.
            - It includes Variable Environment and Scope Chain.
            'this' is determined.

    --> 2. Execution Phase
            - Code is executed line-by-line.
            - Variables get their actual values.
            - Functions are invoked.

==> Lexical Environment
Each execution context has a Lexical Environment, which includes:
--Environment Record: Holds identifier-variable mappings.

Outer Lexical Environment Reference: Points to its parent environment (important for closures).


Execution Context in JS is held in two phases : 
==> Global Execution Context
    -> Global execution is stored in 'this' keyword.

==> Function Exectution Context
==> Eval Execution Context
*/