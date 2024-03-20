// Create a new Date object representing June 15, 2025
let future = new Date(2025, 5, 15); // Note: Months are zero-based, so 5 represents June

// Output the Date object to the console
console.log(future);

// Define an array containing month names
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Extract the day, month, and year from the Date object
let day = future.getDate(); // Get the day of the month
let month = future.getMonth(); // Get the month (zero-based)
let year = future.getFullYear(); // Get the full year

// Construct a custom date string using the month name, day, and year
let myDate = `${months[month-1]} ${day} ${year}`; // Subtracting 1 from month to match array indexing

// Output the custom date string to the console
console.log(myDate);
