// Initialize an empty array to store the table data
const myTable = [];

// Define the number of rows and columns for the table
const rows = 4;
const cols = 7;

// Initialize a counter variable to keep track of the cell values
let counter = 0;

// Iterate through each row
for (let y = 0; y < rows; y++) {
    // Initialize an empty array to store the current row data
    let tempTable = [];

    // Iterate through each column
    for (let x = 0; x < cols; x++) {
        // Increment the counter to generate unique cell values
        counter++;

        // Push the current counter value into the temporary row array
        tempTable.push(counter);
    }

    // Push the temporary row array into the main table array
    myTable.push(tempTable);
}

// Output the table data in a formatted manner
console.table(myTable);
