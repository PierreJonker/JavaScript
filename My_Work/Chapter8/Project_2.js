// Define the end date for the countdown
const endDate = "March 15 2024";

// Function to calculate the countdown
function countdown() {
    // Calculate the total milliseconds between the end date and the current date
    const total = Date.parse(endDate) - new Date();
    // Calculate the remaining days
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    // Calculate the remaining hours
    const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
    // Calculate the remaining minutes
    const mins = Math.floor((total / 1000 / 60) % 60);
    // Calculate the remaining seconds
    const secs = Math.floor((total / 1000) % 60);
    // Return an object containing the remaining days, hours, minutes, and seconds
    return {
        days,
        hrs,
        mins,
        secs
    };
}

// Function to update the countdown display
function update() {
    // Call the countdown function to get the remaining time
    const temp = countdown();
    let output = "";
    // Iterate through each property of the countdown object
    for (const property in temp) {
        // Append the property name and its value to the output string
        output += (`${property}: ${temp[property]} `);
    }
    // Output the countdown display to the console
    console.log(output);
    // Schedule the next update after 1 second
    setTimeout(update, 1000);
}

// Start the countdown update process
update();
