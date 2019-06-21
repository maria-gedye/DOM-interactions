# Event-driven DOM modification

In this exercise we're going to bind event listeners to DOM elements, and change element appearance using classes. Then we're going to get you to combine some of those techniques in a game board!

You will need to read the [Events and classes](https://github.com/dev-academy-programme/curriculum/blob/master/resources/js-events-and-css-classes-ARTICLE/README.md) resource. It will help you complete this exercise!

---

1. Clone this repo and create a branch labeled with your name.

2. Load the `index.html` file contained in that repository in your browser. You'll see three rows of three divs: your "game board". They should all be grey. We've added a rollover effect using CSS, but otherwise they don't do anything - yet!

3. Take a look at the style.css file. For this assignment you don't actually have to make any changes to it, but notice that there are CSS classes for `div.blue`, `div.green`, and `div.invisible`. We'll be using the class names to interact with the elements shown on your board. If you get stuck, look at some of the examples in the resource linked above.

4.  In your `game.js` file, write a function called `makeBlue` that takes an evt parameter. `makeGreen` is provided if you need an example. In your function, add the blue class to the event's target element using classList.toggle.

5. At the end of the function, call `updateCounts()` so it will update the counts with your new colour.\
**Note:** `makeGreen` uses `preventDefault()` to stop the right mouse button's context menu from appearing. You don't need it for the other event handlers.

6. When you've written makeBlue, add an event listener for it in the bindEventListeners function beneath the one for `makeGreen`.\
It should look very similar to the one above it, but use the 'click' event and your `makeBlue` function.\
Reload the page in your browser and test the changes. If all goes well, when you click the left mouse button on a dot it should go blue, and go green if you click the right mouse button!

7. Write a function `hide` that takes an evt parameter. It'll look almost exactly the same as the first two event handlers, but add the class `invisible`.\
Don't forget to call updateCounts() at the end of the function.

8. Add an event listener for your `hide` function to bindEventListeners. Use the 'dblclick' event.\
Reload in the browser and test it out. A double-click should make dots disappear, and they should reappear with a second double-click in the same place.

9. Take a look at the `displayTotals` function. It is passed an object called `totals` that contains the number of each colour of dot. You're going to need to update the HTML for each display counter to match these numbers. Each display counter has an id named with the colour followed by "-total" (for example, the counter for blue has the id `blue-total`)\
Access the HTML element (using a tool such as `document.getElementById`) and update the inner HTML to match the total count for that colour.
 
10. Repeat that for all 'blue', 'green' and 'invisible' classes.\
Reload the browser periodically to see if your changes are working. If they are, the counts to the right of the board should start going up!

When you're done, make sure you stage, commit, and push your branch back to GitHub.
