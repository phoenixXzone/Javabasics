// Initialize counter in localStorage if it doesn't already exist
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

// Function to reset the counter to 0
function reset() {
    const counter = 0; // Reset counter to 0
    localStorage.setItem('counter', counter); // Update localStorage
    updateDisplay(counter); // Update the display
}

// Function to increment the counter
function count() {
    let counter = parseInt(localStorage.getItem('counter'), 10); // Retrieve and convert to an integer
    counter++; // Increment the counter
    localStorage.setItem('counter', counter); // Save updated counter to localStorage
    updateDisplay(counter); // Update the display
}

// Function to update the counter display
function updateDisplay(value) {
    document.querySelector('h1').innerHTML = value; // Set the counter display
}

// Set up event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const counter = localStorage.getItem('counter'); // Get the current counter value
    updateDisplay(counter); // Display the counter

    // Attach event listeners to the buttons
    document.querySelector('#count-button').onclick = count; // Increment counter
    document.querySelector('#reset-button').onclick = reset; // Reset counter
});
