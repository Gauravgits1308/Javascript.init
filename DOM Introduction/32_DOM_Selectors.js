/*
// FETCH ATTRIBUTES IN JAVASCRIPT............
=> document.getElementById('title')
    -> <h1 id="title" class="heading">DOM Learning with Chai aur Code</h1>

=> document.getElementById('title').id
    -> 'title'

=> document.getElementById('title').class
    -> undefined

=> document.getElementById('title').className
-> 'heading' // this is the syntax to fetch class name

=> document.getElementById('title').getAttribute('id')
-> 'title'

=> document.getElementById('title').getAttribute('class')
-> 'heading'

=> document.getElementById('title').setAttribute('class','test')
-> // It will change or 'overwrite' the className which has ID = title

=> document.getElementById('title').setAttribute('class','test heading')
-> // Important :- It will change or overwrite the className which has ID = title .... here both heading and test will be the className

=> const title = document.getElementById('title')
    // title_name in a variable called title 

// STYLING WITH JAVASCRIPT............
=> title.style.backgroundColor = 'green'
=> title.style.padding = '15px'

// HOW TO VIEW TEXT CONTENT ...........
=> title.textContent (displays all the text content , even if it's hidden by display:none;)
-> 'DOM Learning with Chai aur Code'

=> title.innerHTML(displays all the text along with the HTML-tags used)
-> 'DOM Learning with Chai aur Code'

=> title.innerText (does not display the text content that are hidden by display:none;)
-> 'DOM Learning with Chai aur Code'

// QUERY SELECTOR :- In JavaScript, querySelector is a method used to select the first element from the DOM that matches a given CSS selector. .............selection is done as same as in CSS
=> document.querySelector('h1')
-> Selects the first h1 tag used

=> document.querySelector('#title')
-> Selects the attribute with ID = title

=> document.querySelector('.heading')
-> Selects the attribute with class = heading

=> document.querySelector('input[type="password"]')
-> Selects the attribute input type password

// How to select a nested element...like select first list-item from an unordered list

-> const my_ul = document.querySelector('ul')
-> const first_li = my_ul.querySelector('li')
-> first_li.style.color = "white"

// QUERY_SELECTOR_ALL :- querySelectorAll in JavaScript is like the big sibling of querySelector — instead of grabbing just the first matching element, it grabs all matching elements from the DOM.

// NODELIST.............
=> const temp_li_List = document.querySelectorAll('li')
-> gets 'NodeList' of all the list-items -- NodeList is not a complete array...but has some properties similar to Array

-> temp_li_List[0].style.backgroundColor = 'blue'
-> temp_li_List.forEach( (list_item) => {
    list_item.style.backgroundColor = 'green'
    })

// HTML Collection.............
=> const temp_li_List = document.getElementByclassName('list-item')
-> gets 'HTMLCollection' of all the list-items..there is no direct looping function....We have to convert it in Array
-> const listArray = Array.from(temp_li_List)
*/  