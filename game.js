// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen);
    dots[i].addEventListener('click', makeBlue);
    dots[i].addEventListener('dblclick', hide)
    }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}
// CREATE FUNCTION hide HERE
function hide (evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()
}
function updateCounts () {
  var totals = {
    blue: 9,
    green: 9,
    invisible: 9
  }
  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
console.log(document.getElementsByClassName('board')[0].children);
 
 var count = document.getElementsByClassName('board')[0].children
 console.log(count)
 for (var key in count) {
   //count how many dots are blue

   totals.blue = document.getElementsByClassName('blue').length
 //count how many dots are green

 totals.green = document.getElementsByClassName('green').length
 //count how many dots are invisible

 totals.invisible = document.getElementsByClassName('invisible').length
 //update values in the totals object 


//  console.log("key: " + key)
//  console.log("count[key]: " + count[key])
 }
  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
