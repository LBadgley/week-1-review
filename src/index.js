
// reference the DOM nodes we need to work with

// need to subscribe to event:
const button = document.getElementById('button');
const thanksButton = document.getElementById('thanks-button');
// need to get a value from:
const nameInput = document.getElementById('name-input');
// need to change the textContent:
const nameSpan = document.getElementById('name-span');
const clicks = document.getElementById('clicks');
// need to append new elements to:
const listOfNames = document.getElementById('list-of-names');
const lettersOfName = document.getElementById('letters-of-name');


// "state" - things that change over time
let count = 0;

// handle user events

button.addEventListener('click', function() {

    // get actual text value out of input element
    const name = nameInput.value;

    // set the text content of the span
    nameSpan.textContent = name;


    // create a new element
    const li = document.createElement('li');
    li.textContent = name;

    // append to its parent:
    listOfNames.appendChild(li);

    // remove all contents of <p>
    lettersOfName.innerHTML = '';

    // loop a string (it has letters!)
    for(let index = 0; index < name.length; index++) {
        // create new span element
        const span = document.createElement('span');
        span.classList.add('letter');
        const letter = name[index];
        span.textContent = letter;
        lettersOfName.appendChild(span);
    }

    // use our "state" of count of how many click
    // increment
    count += 1;
    clicks.textContent = count;

    if(count > 3) {
        window.location = 'thank-you.html';
        return;
    }

});

thanksButton.addEventListener('click', function() {
    // pretend to do some work
    console.log('interesting thing for thanks button');

    // programmatic navigation
    window.location = 'thank-you.html';
});