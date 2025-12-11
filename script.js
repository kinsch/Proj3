// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
mainTitle.innerHTML = "DOM Project: Ready";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
toggleButton.setAttribute("data-action", "status-toggle");
/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].
function highlightListItems() {
    const listItems = document.querySelectorAll('li')

    // Use of forEarch 
    listItems.forEach(function(item) {
        item.style.color = "blue";
    });
}

// Calling function
highlightListItems();
/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].
function toggleStatus(e) {
    // Task 5, selecting div and ID
    const statusOutput = document.querySelector("#status-output");
    // Task 6
    e.preventDefault();

    // Task 5, add or remove .hidden
    statusOutput.classList.toggle("hidden");
    
    // Task 7, dealing with visibility
    if (!statusOutput.classList.contains("hidden")) {
        // visible status
        mainTitle.style.backgroundColor = "yellow";
        
        // Task 8, create timestamp
        createTimestamp();
    } else {
        // hidden status
        mainTitle.style.backgroundColor = "";
    }
}

// Task 5, event listener for toggleButton
toggleButton.addEventListener("click", toggleStatus);

// Task 8 helper function to create timestamp
function createTimestamp() {
    const span = document.createElement("span");
    span.innerHTML = " " + new Date().toLocaleTimeString();
    statusOutput.appendChild(span);
}

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].
function startFlashing() {
    // Clear existing interval
    if (intervalId !== null) {
        clearInterval(intervalId);
    }

    let id = setInterval(function() {
        controlPanel.classList.toggle("hidden");
    }, 500);

    // Store id
    intervalId = id;
}

function stopFlashing() {
    // use of clearInterval
    clearInterval(intervalId);
    intervalId = null;
}

// Binding to the timer button
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
/* ======================================= */