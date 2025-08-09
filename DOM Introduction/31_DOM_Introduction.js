// Study DOM diagram from video

/*
DOM = Document Object Model
1️⃣ Definition
The DOM is a tree-like structure that represents everything in your HTML (and XML) document so that JavaScript can access, change, add, or remove elements dynamically.
When your browser loads an HTML page:
It reads (parses) the HTML.
It builds an in-memory tree structure where each HTML tag is an object.
That structure is the DOM.

<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, Gaurav!</h1>
    <p>This is my paragraph.</p>
  </body>
</html>

Document
 └── html
      ├── head
      │     └── title
      │           └── "My Page"
      └── body
            ├── h1
            │     └── "Hello, Gaurav!"
            └── p
                  └── "This is my paragraph."
It lets JavaScript manipulate your page after it’s loaded.

Example:

javascript
Copy
Edit
document.querySelector("h1").textContent = "Welcome!";
Finds the <h1> tag in the DOM.

Changes its text without refreshing the page.

Key Points about DOM:
"Document" → The whole page.

"Object" → Everything is treated as an object (HTML elements, attributes, text).

"Model" → A structured representation (tree-like) of the document.

 Common DOM Methods:
document.getElementById("id")

document.querySelector("selector")

document.createElement("tagName")

element.appendChild(node)

element.remove()
*/