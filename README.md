1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
    getElementById('id'):  Finds 1 element only (the one with that id).
    getElementsByClassName('class'):  Finds all elements with that class. Returns a collection (like an array).
    querySelector('selector'):  Finds the first match for any CSS selector (.class, #id, tag, etc).
    querySelectorAll('selector'):  Finds all matches for a CSS selector. Returns a NodeList (can loop easily).

2. How do you create and insert a new element into the DOM?
   steps:
         1. create element (a new child)
         2. add text
         3. add the new child or element to parent.
   example--
    let newDiv = document.createElement('div');   
    newDiv.textContent = "Hello World!";         
    document.body.appendChild(newDiv);            

3. What is Event Bubbling and how does it work?
    it is a technic when we click on an element, the event starts from that element and then moves up to its parents one by one.
   
4. What is Event Delegation in JavaScript? Why is it useful?
    Instead of adding a separate event to every child element, we can add one event to the parent and check which child was clicked.
    Useful when we have many items

5. Difference between preventDefault() and stopPropagation()
  preventDefault() → Stops the browser’s default action.
  stopPropagation() → Stops the event from bubbling up to parent elements.
